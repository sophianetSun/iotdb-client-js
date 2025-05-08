import { TSProtocolVersion } from "@iotdb/client";
import { IoTDBClient } from "./common";
import type { Int64 } from "thrift";

export const getSession = async (
  client: IoTDBClient,
  username: string,
  password: string,
  zoneId: "UTC",
  clientProtocol: TSProtocolVersion = TSProtocolVersion.IOTDB_SERVICE_PROTOCOL_V3
) => {
  const session = await client.openSession({
    username,
    password,
    zoneId,
    client_protocol: clientProtocol,
  });
  if (session.status.code !== 200) {
    throw new Error(`Failed to open session: ${session.status.message}`);
  } else if (!session.sessionId) {
    throw new Error("Session ID is null");
  }

  return session.sessionId;
};

export const closeSession = async (client: IoTDBClient, sessionId: Int64) => {
  const resp = await client.closeSession(sessionId);
  if (resp.code !== 200) {
    throw new Error(`Failed to close session: ${resp.message}`);
  }
};

export const parseTS = (buf: Buffer<ArrayBufferLike>) => {
  const bufView = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
  const vals = [];

  for (let i = 0; i < bufView.byteLength; i += 8) {
    const timestamp = bufView.getBigInt64(i);
    vals.push(new Date(Number(timestamp)));
  }
  return vals;
};

export const parseValue = (
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

// bitmaplist 에서 bit를 읽어서 null인지 아닌지 판단
export const parseBitMap = (
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

export const getQuery = async (
  client: IoTDBClient,
  sessionId: Int64,
  sql: string,
  timeout: number = 30 * 1000,
  fetchSize: number = 1000
) => {
  const statementId = await client.requestStatementId(sessionId);
  const resp = await client.executeQueryStatement({
    sessionId,
    statement: sql,
    statementId,
    timeout,
    fetchSize,
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
  }
  if (!queryDataSet || !dataTypeList || !columnIndex2TsBlockColumnIndexList) {
    return [];
  }
  const { bitmapList, time, valueList } = queryDataSet;
  const times: Array<Record<string, unknown>> = parseTS(time).map((ts) => ({
    time: ts,
  }));
  const result = columnNameIndexMap
    ?.entries()
    .reduce((acc, [columnName, colIdx]) => {
      const column = columnName.split(".").at(-1) ?? columnName;
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
      const values = parseValue(dataType, valueBuf, bitmap);
      acc.forEach((item, idx) => {
        if (idx >= values.length) {
          throw new Error(`Index out of bounds: ${idx} >= ${values.length}`);
        }
        item[column] = values[idx];
      });
      return acc;
    }, times);

  return result;
};
