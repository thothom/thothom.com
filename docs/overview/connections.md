---
sidebar_position: 4
---

# Connections

Connections are the classes used to create the **database connection**, and handle all the things related to it.

**All** of the connections are managed by the plugins, and in the most of the cases, it will be one of the only things that you should import from a plugin.

:::caution

_Symb_ doesn't have a connection class to be imported by the user!

The `Connection` will **ALWAYS** be exported by the plugin!

:::

:::info

All the plugins will always follow the naming pattern of **Connection**.

:::

## Options

_Symb_ provides some basic config for the connections, that are present and can be used by any plugin.

Example where to use it:

```ts
// database.connection.ts

import { Connection } from "example-symbiosis-plugin";

export const connection = new Connection({
  // <- HERE this are the connection options
});
```

### `name`

This is the connection name. It mostly used for logs and will not interfere in the OM functioning, **it's only cosmetic**, and because of it, you can have multiple connections with the same name, but we recommend to name each connection differently.

```ts
// database.connection.ts

import { Connection } from "example-symbiosis-plugin";

export const connection = new Connection({
  name: "Default",
});
```

### `entities`

This field specifies your entities, and you must put **only your main entities here**. The sub-entities are recognized automatically, so you don't have to specify them here.

We are currently working to accept paths to the entities, like TypeORM does, but right now it isn't available.

```ts
// database.connection.ts

import { Connection } from "example-symbiosis-plugin";
import { ExampleEntity } from "./example.entity";

export const connection = new Connection({
  entities: [ExampleEntity], // All your entities should be here
});
```

### `logging`

This options specifies the logging level of the connection.

| DEFAULT | value            | error | warn | log | info | debug |
| :-----: | ---------------- | :---: | :--: | :-: | :--: | :---: |
|         | `"MINIMUM"`      |   X   |      |     |      |       |
|    X    | `"ALL"`          |   X   |  X   |  X  |      |       |
|         | `"ALL_INTERNAL"` |   X   |  X   |  X  |  X   |   X   |
|         | `["ERROR"]`      |   X   |      |     |      |       |
|         | `["WARN"]`       |       |  X   |     |      |       |
|         | `["LOG"]`        |       |      |  X  |      |       |
|         | `["INFO"]`       |       |      |     |  X   |       |
|         | `["DEBUG"]`      |       |      |     |      |   X   |

| level   | description                                                                 |
| ------- | --------------------------------------------------------------------------- |
| `error` | Database errors, invalid parameters, general errors                         |
| `warn`  | Alerts that _may_ be a error or something to worry about                    |
| `info`  | General info about symbiosis and it's process                               |
| `log`   | Info about the data used to connect with the database, like the operations  |
| `debug` | A **LOT** of logs, about **EVERYTHING** that symbiosis does. Do not use it. |

```ts
// database.connection.ts

import { Connection } from "example-symbiosis-plugin";
import { ExampleEntity } from "./example.entity";

export const connection = new Connection({
  logging: "ALL",
});
```

### `timeout`

The time **in seconds** that a query has before it be considered a fail.

```ts
// database.connection.ts

import { Connection } from "example-symbiosis-plugin";
import { ExampleEntity } from "./example.entity";

export const connection = new Connection({
  timeout: 10,
});
```

### `namingStrategy`

This is were _Symb_ starts to bright! This config will format every name of your entities, columns and in the future, indexes and more!

**Accepted values**

- `"camelCase"`
- `"PascalCase"`
- `"snake_case"`
- `"kebab-case"`
- `"UPPER_CASE"`
- And a custom function, like `(name: string) => string`.

```ts
// database.connection.ts

import { Connection } from "example-symbiosis-plugin";
import { ExampleEntity } from "./example.entity";

export const connection = new Connection({
  namingStrategy: {
    entity: "snake_case",
    column: "UPPER_CASE",
  },
});
```

```ts
// example.entity.ts

import { Entity, PrimaryColumn, Column } from "@techmmunity/symbiosis";

@Entity()
export class ExampleEntity {
  @PrimaryColumn()
  public id: string;

  @Column()
  public fooBar: string;
}
```

```yml
# In the database will be:
TABLE: example_entity
COLUMNS: ID, FOO_BAR
```

### `prefix` and `suffix`

Prefix / Suffix to be added / removed from entities, columns, etc, names.

Works **FROM code TO database**. Ex: An class `ExampleClass` with prefix `Prefix` will be `PrefixExampleClass` in the database.

**Execution order:** Remove -> Add

:::caution

The prefixes **are** affected by the _namingStrategy_ config! They are applied **BEFORE** the _namingStrategy_ conversion, so be careful with which naming strategy you use in this config!

:::

```ts
// database.connection.ts

import { Connection } from "example-symbiosis-plugin";
import { ExampleEntity } from "./example.entity";

export const connection = new Connection({
  prefix: {
    entity: {
      add: "Foo",
    },
    column: {
      add: "Bar",
    },
  },
  suffix: {
    entity: {
      remove: "Entity",
    },
    column: {
      remove: "Column",
    },
  },
});
```

```ts
// example.entity.ts

import { Entity, PrimaryColumn, Column } from "@techmmunity/symbiosis";

@Entity()
export class ExampleEntity {
  @PrimaryColumn()
  public id: string;

  @Column()
  public exampleColumn: string;
}
```

```yml
# In the database will be:
TABLE: foo_example
COLUMNS: ID, BAR_EXAMPLE
```

### `timeZone`

Time Zone used to format the dates before be saved in the database, and for the auto-generated columns.

[List with all time zones available](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

**DEFAULT:** `"UTC"`

```ts
// database.connection.ts

import { Connection } from "example-symbiosis-plugin";
import { ExampleEntity } from "./example.entity";

export const connection = new Connection({
  timeZone: "UTC",
});
```

### `databaseConfig`

Config used by the plugins to connect to the database.

```ts
// database.connection.ts

import { Connection } from "example-symbiosis-plugin";
import { ExampleEntity } from "./example.entity";

export const connection = new Connection({
  databaseConfig: {
    // ...Who knows?
  },
});
```
