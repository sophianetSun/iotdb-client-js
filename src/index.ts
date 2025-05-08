import { IoTDBClient } from "./common";
import {
  getSession,
  parseTS,
  parseValue,
  getQuery,
  closeSession,
} from "./session";

export const main = async () => {
  const client = new IoTDBClient("localhost", 6667);
  const sessionId = await getSession(client, "root", "root", "UTC");
  const result = await getQuery(
    client,
    sessionId,
    "select * from root.enerdot.ems.*"
  );
  console.log("Query result:", result);
  await closeSession(client, sessionId);
  console.log("Session closed successfully", sessionId.toString());
  await client.closeConnection();
  console.log("Connection closed");
};

main();
