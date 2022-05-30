---
sidebar_position: 2
---

# Globals

By default, ThothOM focus on keep all it's data encapsulated in the connection and repositories instances. It may be a problem depending on the architecture and the frameworks that you are using.

To facilitate this, you can define the connection instance globally, so you will have access to this in all parts of your system.

## Methods

### `setGlobalConnection`

The method used to define a global connection instance. You can define one or many connections instances globally.

```ts
// database.connection.ts

import { setGlobalConnection } from "@thothom/core";
import { Connection } from "example-thothom-plugin";

import { ExampleEntity } from "./example.entity";

const bootstrap = async () => {
  const connection = await new Connection({
    // ... Put the extra connection options here
    entities: [ExampleEntity], // All your entities should be here
    databaseConfig: {
      // The config to connect to the database
    },
  }).load();

  // You always must call the `connect` method!
  await connection.connect();

  setGlobalConnection<Connection>(connection);
};

bootstrap();
```

### `getGlobalConnection`

The method is used to get a global connection. You must define the connection globally before call this method.

This method accepts a optional parameter, the connection name, that will be used to get the specific connection. By default, if any parameter is passed, it will return the default connection.

```ts
// database.connection.ts

import { getGlobalConnection } from "@thothom/core";
import type { Connection } from "example-thothom-plugin";

// ... Same example above

setGlobalConnection<Connection>(connection);

// Will get the default connection
getGlobalConnection<Connection>();

// Will get the specific connection
getGlobalConnection<Connection>("ConnectionName");
```

### `getGlobalRepository`

The method is used to get a repository from a global connection. You must define the connection globally before call this method.

This method accepts a second optional parameter, the connection name, that will be used to get the specific connection. By default, if this parameter isn't passed, it will return the default connection.

```ts
// database.connection.ts

import { getGlobalRepository } from "@thothom/core";

// ... Same example above

// Will get a repository from the default connection
getGlobalRepository<ExampleEntity>(ExampleEntity);

// Will get a repository from the specific connection
getGlobalRepository<ExampleEntity>(ExampleEntity, "ConnectionName");
```
