import type { Int64 } from "thrift";
import type { TSProtocolVersion } from "../codegen/org/apache/iotdb/service/rpc/thrift";

interface OpenSessionConfig {
  username: string;
  password: string;
  zoneId?: string;
  client_protocol?: TSProtocolVersion;
}

declare class IoTDBClient {
  constructor(host: string, port: number);

  closeConnection(): Promise<void>;
}

interface SessionConfig {
  client: IoTDBClient;
  username: string;
  password: string;
  zoneId?: string;
  clientProtocol?: TSProtocolVersion;
}

declare function getSession(
  client: IoTDBClient,
  username: string,
  password: string,
  zoneId?: string,
  clientProtocol?: TSProtocolVersion
): Promise<Int64>;

declare function closeSession(
  client: IoTDBClient,
  sessionId: Int64
): Promise<void>;

declare function getQuery(
  client: IoTDBClient,
  sessionId: Int64,
  sql: string,
  timeout?: number,
  fetchSize?: number
): Promise<any>;
