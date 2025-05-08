# Apache IoTDB Client For NodeJS

## Overview

This is the NodeJS client of Apache IoTDB.

Apache IoTDB website: https://iotdb.apache.org Apache IoTDB GitHub: https://github.com/apache/iotdb

## Installation

Install from NPM

```shell
bun add iotdb-client-nodejs
```

## Prerequisites

Only upper IoTDB 2.0 support

```
IoTDB Version >= 2.X.X
```

## How to Use the Client (Quick Start)

```typescript
import { IoTDBClient, getSession, getQuery, closeSession } from 'iotdb-client-nodejs'

const client = new IoTDBClient("localhost", 6667);
const sessionId = await getSession(client, "root", "root", "Asia/Seoul");
const result = await getQuery(client, sessionId,
    "select * from root.enerdot.ems.*"
);
await closeSession(client, sessionId);
/*
    Return
    [
        {
            time: 2025-05-08T12:13:00Z,
            key: value,
        },
        {
            time: 2025-05-08T12:12:00Z,
            key: value,
        },
        ...
    ]
*/
```