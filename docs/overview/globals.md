---
sidebar_position: 2
---

# Globals

By default, symbiosis focus on keep all it's data encapsulated in the connection and repositories instances. It may be a problem depending on the architecture and the frameworks that you are using.

To facilitate this, you can define the connection instance globally, so you will have access to this in all parts of your system.

## Methods

### `setGlobalConnection`

The method used to define a global connection instance. You can define one or many connections instances globally.

```ts
// database.connection.ts

!!! THIS IS AN EXAMPLE OF THE SYNTAX AND WILL NOT WORK !!!

import { setGlobalConnection } from "@techmmunity/symbiosis";
import { Connection } from "example-symbiosis-plugin";

import { ExampleEntity } from "./example.entity";

const connection = new Connection({
  // ... Put the extra connection options here
  entities: [ExampleEntity], // All your entities should be here
  databaseConfig: {
    // The config to connect to the database
  },
});

// You always must call the connect method!
await connection.connect();

setGlobalConnection(connection);
```

### `getGlobalConnection`

The method is used to get a global connection. You must define the connection globally before call this method.

This method accepts a optional parameter, the connection name, that will be used to get the specific connection. By default, if any parameter is passed, it will return the default connection.

```ts
// database.connection.ts

import { getGlobalConnection } from "@techmmunity/symbiosis";

// ... Same example above

setGlobalConnection(connection);

getGlobalConnection(); // Will get the default connection
```

### `getGlobalRepository`

The method is used to get a repository from a global connection. You must define the connection globally before call this method.

This method accepts a second optional parameter, the connection name, that will be used to get the specific connection. By default, if this parameter isn't passed, it will return the default connection.

```ts
// database.connection.ts

import { getGlobalRepository } from "@techmmunity/symbiosis";

// ... Same example above

getGlobalRepository(ExampleEntity); // Will get a repository from the default connection

getGlobalRepository(ExampleEntity, "ConnectionName");
```
