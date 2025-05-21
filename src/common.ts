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

interface OpenSessionConfig {
  username: string;
  password: string;
  zoneId?: string;
  client_protocol?: TSProtocolVersion;
}

export class IoTDBClient {
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
