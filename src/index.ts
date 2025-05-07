import {
  TFramedTransport,
  TBinaryProtocol,
  createConnection,
  createClient,
  Connection,
  Int64,
} from "thrift";
import {
  IClientRPCService,
  TSOpenSessionReq,
  TSCloseSessionReq,
  TSOpenSessionResp,
  TSProtocolVersion,
  TSExecuteStatementReq,
  TSExecuteBatchStatementReq,
  TSSetTimeZoneReq,
  type ITSExecuteStatementReqArgs,
  type ITSFetchResultsReqArgs,
  TSFetchResultsReq,
  type ITSExecuteBatchStatementReqArgs,
  type ITSFetchMetadataReqArgs,
  TSFetchMetadataReq,
  type ITSCancelOperationReqArgs,
  TSCancelOperationReq,
  type ITSCloseOperationReqArgs,
  TSCloseOperationReq,
  type ITSCreateTimeseriesReqArgs,
  TSCreateTimeseriesReq,
  type ITSCreateMultiTimeseriesReqArgs,
  TSCreateMultiTimeseriesReq,
  type ITSInsertRecordReqArgs,
  TSInsertRecordReq,
  type ITSInsertStringRecordReqArgs,
  TSInsertStringRecordReq,
  type ITSInsertTabletReqArgs,
  TSInsertTabletReq,
  TSInsertTabletsReq,
  type ITSInsertTabletsReqArgs,
  type ITSInsertRecordsReqArgs,
  TSInsertRecordsReq,
  type ITSInsertRecordsOfOneDeviceReqArgs,
  TSInsertRecordsOfOneDeviceReq,
  type ITSInsertStringRecordsReqArgs,
  TSInsertStringRecordsReq,
  type ITSDeleteDataReqArgs,
  TSDeleteDataReq,
  type ITSRawDataQueryReqArgs,
  TSRawDataQueryReq,
  TSQueryDataSet,
} from "@iotdb/client";
import type { OpenSessionConfig } from "./types";

class IoTDBClient {
  private host: string;
  private port: number;
  private connection: Connection | null = null;
  private client: IClientRPCService.Client | null = null;

  constructor(host: string, port: number) {
    this.host = host;
    this.port = port;
    this.connection = createConnection(this.host, this.port, {
      transport: TFramedTransport,
      protocol: TBinaryProtocol,
    });
    this.client = createClient(IClientRPCService, this.connection);
    this.connection.on("error", (err) => {
      console.error("Connection error:", err);
    });
  }

  closeConnection() {
    if (this.connection) {
      this.connection.end();
      this.connection = null;
      this.client = null;
    }
  }

  // Helper functions
  numberToBuffer(value: number, byteLength = 8, isLittleEndian = true): Buffer {
    const buffer = Buffer.alloc(byteLength);

    switch (byteLength) {
      case 1: // 1 byte (8-bit integer)
        buffer.writeUInt8(value, 0);
        break;
      case 2: // 2 bytes (16-bit integer)
        isLittleEndian
          ? buffer.writeUInt16LE(value, 0)
          : buffer.writeUInt16BE(value, 0);
        break;
      case 4: // 4 bytes (32-bit integer or float)
        isLittleEndian
          ? buffer.writeUInt32LE(value, 0)
          : buffer.writeUInt32BE(value, 0);
        break;
      case 8: // 8 bytes (64-bit double)
        isLittleEndian
          ? buffer.writeDoubleLE(value, 0)
          : buffer.writeDoubleBE(value, 0);
        break;
      default:
        throw new Error("Unsupported byte length");
    }

    return buffer;
  }

  // open a session
  async openSession(
    sessionParams: OpenSessionConfig
  ): Promise<TSOpenSessionResp> {
    if (!this.client || !this.connection) {
      throw new Error("Client not connected");
    }
    const params = new TSOpenSessionReq({
      username: sessionParams.username,
      password: sessionParams.password,
      zoneId: sessionParams.zoneId ?? "UTC",
      client_protocol:
        sessionParams.client_protocol ||
        TSProtocolVersion.IOTDB_SERVICE_PROTOCOL_V3,
    });

    return await this.client.openSession(params);
  }

  // close a session
  async closeSession(sessionId: number | Int64) {
    if (!this.client || !this.connection) {
      throw new Error("Client not connected");
    }
    return await this.client.closeSession(new TSCloseSessionReq({ sessionId }));
  }

  // run an SQL statement
  async executeStatement(args: ITSExecuteStatementReqArgs) {
    if (!this.client || !this.connection) {
      throw new Error("Client not connected");
    }
    const req = new TSExecuteStatementReq(args);
    return this.client.executeStatement(req);
  }

  // execute SQL statements in batch
  async executeBatchStatement(args: ITSExecuteBatchStatementReqArgs) {
    if (!this.client || !this.connection) {
      throw new Error("Client not connected");
    }
    const req = new TSExecuteBatchStatementReq(args);
    return this.client.executeBatchStatement(req);
  }

  // execute query SQL statement
  async executeQueryStatement(args: ITSExecuteStatementReqArgs) {
    if (!this.client || !this.connection) {
      throw new Error("Client not connected");
    }
    const req = new TSExecuteStatementReq(args);
    return this.client.executeQueryStatement(req);
  }

  // execute insert, delete, update SQL statement
  async executeUpdateStatement(args: ITSExecuteStatementReqArgs) {
    if (!this.client || !this.connection) {
      throw new Error("Client not connected");
    }
    const req = new TSExecuteStatementReq(args);
    return this.client.executeUpdateStatementV2(req);
  }

  // fetch next query result
  async fetchResults(args: ITSFetchResultsReqArgs) {
    if (!this.client || !this.connection) {
      throw new Error("Client not connected");
    }
    const req = new TSFetchResultsReq(args);
    return this.client.fetchResultsV2(req);
  }

  // fetch meta data
  async fetchMetaData(args: ITSFetchMetadataReqArgs) {
    if (!this.client || !this.connection) {
      throw new Error("Client not connected");
    }
    const req = new TSFetchMetadataReq(args);
    return this.client.fetchMetadata(req);
  }

  // cancel a query
  async cancelOperation(args: ITSCancelOperationReqArgs) {
    if (!this.client || !this.connection) {
      throw new Error("Client not connected");
    }
    const req = new TSCancelOperationReq(args);
    return this.client.cancelOperation(req);
  }

  // close a query dataset
  async closeOperation(args: ITSCloseOperationReqArgs) {
    if (!this.client || !this.connection) {
      throw new Error("Client not connected");
    }
    const req = new TSCloseOperationReq(args);
    return this.client.closeOperation(req);
  }

  // get time zone
  async getTimeZone(sessionId: Int64) {
    if (!this.client || !this.connection) {
      throw new Error("Client not connected");
    }

    const resp = await this.client.getTimeZone(sessionId);
    if (resp.status.code === 200) {
      return resp.timeZone;
    } else {
      throw new Error(`Failed to get time zone: ${resp.status.message}`);
    }
  }

  // set time zone
  async setTimeZone(sessionId: number | Int64, timeZone: string) {
    if (!this.client || !this.connection) {
      throw new Error("Client not connected");
    }
    return await this.client.setTimeZone(
      new TSSetTimeZoneReq({ sessionId, timeZone })
    );
  }

  // get server's properties
  async getProperties() {
    if (!this.client || !this.connection) {
      throw new Error("Client not connected");
    }
    return this.client.getProperties();
  }

  // create database
  async setStorageGroup(sessionId: number | Int64, storageGroup: string) {
    if (!this.client || !this.connection) {
      throw new Error("Client not connected");
    }
    if (typeof sessionId === "number") {
      sessionId = new Int64(Buffer.of(sessionId));
    }
    return this.client.setStorageGroup(sessionId, storageGroup);
  }

  // create timeseries
  async createTimeseries(args: ITSCreateTimeseriesReqArgs) {
    if (!this.client || !this.connection) {
      throw new Error("Client not connected");
    }
    const req = new TSCreateTimeseriesReq(args);
    return this.client.createTimeseries(req);
  }

  // create multi timeseries
  async createMultiTimeseries(args: ITSCreateMultiTimeseriesReqArgs) {
    if (!this.client || !this.connection) {
      throw new Error("Client not connected");
    }
    const req = new TSCreateMultiTimeseriesReq(args);
    return this.client.createMultiTimeseries(req);
  }

  // delete timeseries
  async deleteTimeSeries(sessionId: number | Int64, path: Array<string>) {
    if (!this.client || !this.connection) {
      throw new Error("Client not connected");
    }
    if (typeof sessionId === "number") {
      sessionId = new Int64(Buffer.of(sessionId));
    }
    return this.client.deleteTimeseries(sessionId, path);
  }

  // delete storage groups
  async deleteStroageGroups(
    sessionId: number | Int64,
    storageGroup: Array<string>
  ) {
    if (!this.client || !this.connection) {
      throw new Error("Client not connected");
    }
    if (typeof sessionId === "number") {
      sessionId = new Int64(Buffer.of(sessionId));
    }
    return this.client.deleteStorageGroups(sessionId, storageGroup);
  }

  // insert record
  async insertRecord(args: ITSInsertRecordReqArgs) {
    if (!this.client || !this.connection) {
      throw new Error("Client not connected");
    }
    const req = new TSInsertRecordReq(args);
    return this.client.insertRecord(req);
  }

  // insert record in string format
  async insertStringRecord(args: ITSInsertStringRecordReqArgs) {
    if (!this.client || !this.connection) {
      throw new Error("Client not connected");
    }
    const req = new TSInsertStringRecordReq(args);
    return this.client.insertStringRecord(req);
  }

  // insert tablet
  async insertTablet(args: ITSInsertTabletReqArgs) {
    if (!this.client || !this.connection) {
      throw new Error("Client not connected");
    }
    const req = new TSInsertTabletReq(args);
    return this.client.insertTablet(req);
  }

  // insert tablets in batch
  async insertTablets(args: ITSInsertTabletsReqArgs) {
    if (!this.client || !this.connection) {
      throw new Error("Client not connected");
    }
    const req = new TSInsertTabletsReq(args);
    return this.client.insertTablets(req);
  }

  // insert records in batch
  async insertRecords(args: ITSInsertRecordsReqArgs) {
    if (!this.client || !this.connection) {
      throw new Error("Client not connected");
    }
    const req = new TSInsertRecordsReq(args);
    return this.client.insertRecords(req);
  }

  // insert records of one device
  async insertRecordsOfOneDevice(args: ITSInsertRecordsOfOneDeviceReqArgs) {
    if (!this.client || !this.connection) {
      throw new Error("Client not connected");
    }
    const req = new TSInsertRecordsOfOneDeviceReq(args);
    return this.client.insertRecordsOfOneDevice(req);
  }

  // insert records in batch as string format
  async insertStringRecords(args: ITSInsertStringRecordsReqArgs) {
    if (!this.client || !this.connection) {
      throw new Error("Client not connected");
    }
    const req = new TSInsertStringRecordsReq(args);
    return this.client.insertStringRecords(req);
  }

  // test the latency of innsert tablet, caution: no data will be inserted, only for test latency
  async testInsertTablet(args: ITSInsertTabletReqArgs) {
    if (!this.client || !this.connection) {
      throw new Error("Client not connected");
    }
    const req = new TSInsertTabletReq(args);
    return this.client.testInsertTablet(req);
  }

  // test the latency of innsert tablets, caution: no data will be inserted, only for test latency
  async testInsertTablets(args: ITSInsertTabletsReqArgs) {
    if (!this.client || !this.connection) {
      throw new Error("Client not connected");
    }
    const req = new TSInsertTabletsReq(args);
    return this.client.testInsertTablets(req);
  }

  // test the latency of innsert record, caution: no data will be inserted, only for test latency
  async testInsertRecord(args: ITSInsertRecordReqArgs) {
    if (!this.client || !this.connection) {
      throw new Error("Client not connected");
    }
    const req = new TSInsertRecordReq(args);
    return this.client.testInsertRecord(req);
  }

  // test the latency of innsert record in string format, caution: no data will be inserted, only for test latency
  async testInsertStringRecord(args: ITSInsertStringRecordReqArgs) {
    if (!this.client || !this.connection) {
      throw new Error("Client not connected");
    }
    const req = new TSInsertStringRecordReq(args);
    return this.client.testInsertStringRecord(req);
  }

  // test the latency of innsert records, caution: no data will be inserted, only for test latency
  async testInsertRecords(args: ITSInsertRecordsReqArgs) {
    if (!this.client || !this.connection) {
      throw new Error("Client not connected");
    }
    const req = new TSInsertRecordsReq(args);
    return this.client.testInsertRecords(req);
  }

  // test the latency of innsert records of one device, caution: no data will be inserted, only for test latency
  async testInsertRecordsOfOneDevice(args: ITSInsertRecordsOfOneDeviceReqArgs) {
    if (!this.client || !this.connection) {
      throw new Error("Client not connected");
    }
    const req = new TSInsertRecordsOfOneDeviceReq(args);
    return this.client.testInsertRecordsOfOneDevice(req);
  }

  // test the latency of innsert records in string format, caution: no data will be inserted, only for test latency
  async testInsertStringRecords(args: ITSInsertStringRecordsReqArgs) {
    if (!this.client || !this.connection) {
      throw new Error("Client not connected");
    }
    const req = new TSInsertStringRecordsReq(args);
    return this.client.testInsertStringRecords(req);
  }

  // delete data
  async deleteData(args: ITSDeleteDataReqArgs) {
    if (!this.client || !this.connection) {
      throw new Error("Client not connected");
    }
    const req = new TSDeleteDataReq(args);
    return this.client.deleteData(req);
  }

  // execute raw data query
  async executeRawDataQuery(args: ITSRawDataQueryReqArgs) {
    if (!this.client || !this.connection) {
      throw new Error("Client not connected");
    }
    const req = new TSRawDataQueryReq(args);
    return this.client.executeRawDataQuery(req);
  }

  async requestStatementId(sessionId: Int64) {
    // request a statment id from server
    if (!this.client || !this.connection) {
      throw new Error("Client not connected");
    }
    return this.client.requestStatementId(sessionId);
  }
}

class Session {
  private client: IoTDBClient;
  private sessionId: Int64;
  private statementId: Int64;
  private fetchSize: number;
  private timeout: number;

  constructor(
    client: IoTDBClient,
    sessionId: Int64,
    statementId: Int64,
    fetchSize = 1000,
    timeout = 30000
  ) {
    this.client = client;
    this.sessionId = sessionId;
    this.statementId = statementId;
    this.fetchSize = fetchSize;
    this.timeout = timeout;
  }

  async query<T>(statement: string) {
    const resp = await this.client.executeQueryStatement({
      sessionId: this.sessionId,
      statement,
      statementId: this.statementId,
      timeout: this.timeout,
      fetchSize: this.fetchSize,
    });

    const {
      columnNameIndexMap,
      queryDataSet,
      dataTypeList,
      moreData,
      queryId,
    } = resp;
    const { time, valueList, bitmapList } = resp.queryDataSet as TSQueryDataSet;
    interface DataPoint {
      time: Date;
      value?: number | string | boolean | Date;
    }
    const points: DataPoint[] = [];
    const valIdxs = dataTypeList?.map((val) => 0);
    const bitmapIdxs = dataTypeList?.map((val) => 0);
    const bitmaps = bitmapList?.map((val) =>
      Array.from(val)
        .map((byte) => byte.toString(2))
        .join("")
    );
    for (let ts = 0; ts < time.length; ts += 8) {
      const timePoint = time.subarray(ts, ts + 8).readBigUInt64BE(0);
      const date = new Date(Number(timePoint));
    }
  }
}
async function makeRow({}: {}) {}

const parseTS = (buf: Buffer<ArrayBufferLike>) => {
  const bufView = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
  const vals = [];

  for (let i = 0; i < bufView.byteLength; i += 8) {
    const timestamp = bufView.getBigInt64(i);
    vals.push(new Date(Number(timestamp)));
  }
  return vals;
};

const parseValue = (
  dataType: string,
  value: Buffer<ArrayBufferLike>,
  timeIdxNullBits: string
) => {
  const bufView = new DataView(
    value.buffer,
    value.byteOffset,
    value.byteLength
  );
  const vals = [];

  switch (dataType) {
    case "BOOLEAN":
      for (let i = 0; i < timeIdxNullBits.length; i++) {
        if (timeIdxNullBits[i] === "0") {
          vals.push(null); // null 값 처리
        } else {
          vals.push(bufView.getUint8(i) !== 0); // Boolean 값 읽기
        }
      }
      break;
    case "INT32":
      for (let i = 0, bufIdx = 0; i < timeIdxNullBits.length; i++) {
        if (timeIdxNullBits[i] === "0") {
          vals.push(null); // null 값 처리
        } else {
          vals.push(bufView.getUint32(bufIdx));
          bufIdx += 4;
        }
      }
      break;
    case "INT64":
      for (let i = 0, bufIdx = 0; i < timeIdxNullBits.length; i++) {
        if (timeIdxNullBits[i] === "0") {
          vals.push(null); // null 값 처리
        } else {
          vals.push(bufView.getBigInt64(bufIdx));
          bufIdx += 8;
        }
      }
      break;
    case "FLOAT":
      for (let i = 0, bufIdx = 0; i < timeIdxNullBits.length; i++) {
        if (timeIdxNullBits[i] === "0") {
          vals.push(null); // null 값 처리
        } else {
          vals.push(bufView.getFloat32(bufIdx));
          bufIdx += 4;
        }
      }
      break;
    case "DOUBLE":
      for (let i = 0, bufIdx = 0; i < timeIdxNullBits.length; i++) {
        if (timeIdxNullBits[i] === "0") {
          vals.push(null); // null 값 처리
        } else {
          vals.push(bufView.getFloat64(bufIdx));
          bufIdx += 8;
        }
      }
      break;
    case "TEXT":
    case "STRING":
      for (let i = 0, bufIdx = 0; i < timeIdxNullBits.length; i++) {
        if (timeIdxNullBits[i] === "0") {
          vals.push(null); // null 값 처리
        } else {
          const len = bufView.getUint32(bufIdx);
          bufIdx += 4;
          const textView = new DataView(
            bufView.buffer,
            bufView.byteOffset + bufIdx,
            len
          );
          const text = new TextDecoder("utf-8").decode(textView);
          vals.push(text);
          bufIdx += len;
        }
      }
      break;
    case "BLOB":
      for (let i = 0, bufIdx = 0; i < timeIdxNullBits.length; i++) {
        if (timeIdxNullBits[i] === "0") {
          vals.push(null); // null 값 처리
        } else {
          const len = bufView.getUint32(bufIdx);
          bufIdx += 4;
          const blobView = new DataView(bufView.buffer, bufIdx, len);
          const blob = new Uint8Array(
            blobView.buffer,
            blobView.byteOffset + bufIdx,
            len
          );
          vals.push(blob);
          bufIdx += len;
        }
      }
      break;
    case "TIMESTAMP":
      for (let i = 0, bufIdx = 0; i < timeIdxNullBits.length; i++) {
        if (timeIdxNullBits[i] === "0") {
          vals.push(null); // null 값 처리
        } else {
          const timestamp = bufView.getBigInt64(bufIdx);
          vals.push(new Date(Number(timestamp)));
          bufIdx += 8;
        }
      }
      break;
    case "DATE":
      for (let i = 0, bufIdx = 0; i < timeIdxNullBits.length; i++) {
        if (timeIdxNullBits[i] === "0") {
          vals.push(null); // null 값 처리
        } else {
          const date = bufView.getUint32(bufIdx); // Returns to YYYYMMdd e.g. 20250507
          vals.push(date); // Assuming date is in seconds
          bufIdx += 4;
        }
      }
      break;
    default:
      throw new Error(`Unsupported data type: ${dataType}`);
  }
  return vals;
};

const main = async () => {
  const host = "localhost";
  const port = 6667;
  const client = new IoTDBClient(host, port);
  const sessionParams = {
    username: "root",
    password: "root",
    zoneId: "UTC",
    client_protocol: TSProtocolVersion.IOTDB_SERVICE_PROTOCOL_V3,
  };
  const session = await client.openSession(sessionParams);
  if (session.sessionId) {
    // console.log("Session ID:", session.sessionId?.toString());

    // const props = await client.getProperties();
    // console.log("Properties:", props);

    const timeZone = await client.getTimeZone(session.sessionId);
    console.log("Time Zone:", timeZone);

    const statementId = await client.requestStatementId(session.sessionId);
    console.log("Statement ID:", statementId.toString());
    // const resp = await client.executeStatement({
    //   sessionId: session.sessionId,
    //   statement: "show databases",
    //   statementId: statementId,
    //   timeout: 30,
    // });
    const resp = await client.executeQueryStatement({
      sessionId: session.sessionId,
      // statement: "show databases",
      // statement: "select * from root.enerdot.ems.*",
      statement: "select * from root.enerdot.test.datatest",
      statementId,
      timeout: 30 * 1000,
      fetchSize: 1000,
    });

    const {
      queryDataSet,
      columnIndex2TsBlockColumnIndexList,
      columnNameIndexMap,
      status,
      dataTypeList,
    } = resp;
    if (status.code !== 200) {
      throw new Error(`Error: ${status.message}`);
    } else if (
      !queryDataSet ||
      !dataTypeList ||
      !columnIndex2TsBlockColumnIndexList
    ) {
      return [];
    }
    const { bitmapList, time, valueList } = queryDataSet;
    // bitmaplist 에서 bit를 읽어서 null인지 아닌지 판단
    const parseBitMap = (
      bitmap: Buffer<ArrayBufferLike>,
      timeLength: number
    ) => {
      const bits = Array.from(bitmap)
        .map((byte) => byte.toString(2).padStart(8, "0"))
        .join("");
      if (bits.length !== timeLength) {
        return bits.slice(0, timeLength);
      }
      return bits;
    };
    const result: Array<Record<string, unknown>> = parseTS(time).map((ts) => ({
      time: ts,
    }));
    const foo = columnNameIndexMap
      ?.entries()
      .reduce((acc, [columnName, colIdx]) => {
        const dataTypeIdx = columnIndex2TsBlockColumnIndexList.findIndex(
          (val) => val === colIdx
        );
        if (dataTypeIdx === -1) {
          throw new Error(`Column index not found for ${columnName}`);
        }
        const dataType = dataTypeList[dataTypeIdx];
        if (!dataType) {
          throw new Error(`Data type not found for index ${dataTypeIdx}`);
        }
        const valueBuf = valueList[colIdx];
        if (!valueBuf) {
          throw new Error(`Value buffer not found for index ${colIdx}`);
        }
        const bitmapBuf = bitmapList[colIdx];
        if (!bitmapBuf) {
          throw new Error(`Bitmap not found for index ${colIdx}`);
        }
        const bitmap = parseBitMap(bitmapBuf, acc.length);

        const parsedValue = parseValue(dataType, valueBuf, bitmap);

        acc.forEach((row, i) => {
          if (i >= parsedValue.length) {
            throw new Error(
              `Index out of bounds: ${i} >= ${parsedValue.length}`
            );
          }
          row[columnName] = parsedValue[i];
        });
        return acc;
      }, result);
    console.log("foo: ", foo);
    const queryDataSetToRow = (
      dataTypes: string[],
      queryDataSet: TSQueryDataSet
    ) => {
      const rows = [];

      const { time, valueList, bitmapList } = queryDataSet;
      const dataType = dataTypes[0];
    };
    // for (let i = 0; i < )
    console.log(
      "Execute statement response:",
      resp
      // resp.queryDataSet?.valueList[1]?.subarray(0, 8).readFloatBE(4)
      /* new Date(
        Number(resp.queryDataSet?.time.subarray(0, 8).readBigUInt64BE(0))
      ) */
    );
    /*
    const result = await client.fetchResults({
      fetchSize: 100,
      sessionId: session.sessionId,
      timeout: 30,
      isAlign: false,
      statement: "show databases",
      queryId: resp.queryId,
    });
    */
    await client.closeSession(session.sessionId);
    console.log("Session closed successfully", session.sessionId.toString());
  }
  client.closeConnection();
  console.log("Connection closed");
};

main();
