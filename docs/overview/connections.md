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

export const connect = async () => {
  const connection = await new Connection({
    // <- HERE this are the connection options
  }).load();

  await connection.connect();
};
```

:::info

The options are **optional**. You can (and we recommend) that you use an `symbiosis.config.js` file.

:::

### `name` (optional)

This is the connection name. It's used to identify your connection, so **each connection MUST have an unique name**.

```ts
// database.connection.ts

import { Connection } from "example-symbiosis-plugin";

export const connect = async () => {
  const connection = await new Connection({
    name: "Default",
  }).load();

  await connection.connect();
};
```

### `entities` (optional)

This field specifies your entities, and you must put **only your main entities here**. The sub-entities are recognized automatically, so you don't have to specify them here.

```ts
// database.connection.ts

import { Connection } from "example-symbiosis-plugin";

import { ExampleEntity } from "./example.entity";

export const connect = async () => {
  const connection = await new Connection({
    entities: [ExampleEntity], // All your entities should be here
  }).load();

  await connection.connect();
};
```

### `entitiesDir` (optional)

If you don't want to import all your entities, you can use this option to specify the entities paths, and they will be automatically loaded.

```ts
// database.connection.ts

import { Connection } from "example-symbiosis-plugin";

export const connect = async () => {
  const connection = await new Connection({
    entitiesDir: ["entities/**/dir/*.ts"], // All your entities paths should be here
  }).load();

  await connection.connect();
};
```

### `logging` (optional)

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

export const connect = async () => {
  const connection = await new Connection({
    logging: "ALL",
  }).load();

  await connection.connect();
};
```

### `timeout` (optional)

The time **in seconds** that a query has before it be considered a fail.

```ts
// database.connection.ts

import { Connection } from "example-symbiosis-plugin";

export const connect = async () => {
  const connection = await new Connection({
    timeout: 10,
  }).load();

  await connection.connect();
};
```

### `namingStrategy` (optional)

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

export const connect = async () => {
  const connection = await new Connection({
    namingStrategy: {
      entity: "snake_case",
      column: "UPPER_CASE",
    },
  }).load();

  await connection.connect();
};
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

### `prefix` and `suffix` (optional)

Prefix / Suffix to be added / removed from entities, columns, etc, names.

Works **FROM code TO database**. Ex: An class `ExampleClass` with prefix `Prefix` will be `PrefixExampleClass` in the database.

**Execution order:** Remove -> Add

:::caution

The prefixes **are** affected by the _namingStrategy_ config! They are applied **BEFORE** the _namingStrategy_ conversion, so be careful with which naming strategy you use in this config!

:::

```ts
// database.connection.ts

import { Connection } from "example-symbiosis-plugin";

export const connect = async () => {
  const connection = await new Connection({
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
  }).load();

  await connection.connect();
};
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

### `timeZone` (optional)

Time Zone used to format the dates before be saved in the database, and for the auto-generated columns.

[List with all time zones available](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

**DEFAULT:** `"UTC"`

```ts
// database.connection.ts

import { Connection } from "example-symbiosis-plugin";

export const connect = async () => {
  const connection = await new Connection({
    timeZone: "UTC",
  }).load();

  await connection.connect();
};
```

### `databaseConfig` (required)

Config used by the plugins to connect to the database.

```ts
// database.connection.ts

import { Connection } from "example-symbiosis-plugin";

export const connect = async () => {
  const connection = await new Connection({
    databaseConfig: {
      // ...Who knows?
    },
  }).load();

  await connection.connect();
};
```

## Methods

The connection has some very important methods that you will use to develop your app.

### `load`

This method loads all your entities information, so the plugin can work properly.

:::caution

`load` is an **async** method!

:::

```ts
// database.connection.ts

import { Connection } from "example-symbiosis-plugin";

export const connect = async () => {
  const connection = await new Connection().load(); // <- Here!!!

  await connection.connect();
};
```

### `connect`

This is the method that will truly connect with the database.

:::caution

`connect` must be called **AFTER** the `load` method!

:::

```ts
// database.connection.ts

import { Connection } from "example-symbiosis-plugin";

export const connect = async () => {
  const connection = await new Connection().load();

  await connection.connect(); // <- Here!!!
};
```

### `getRepository`

This method generates a new [repository](./repositories) to your entity.

:::caution

`getRepository` must be called **AFTER** the `connect` method!

:::

```ts
// database.connection.ts

import { Connection } from "example-symbiosis-plugin";

import { ExampleEntity } from "./example.entity";

export const connect = async () => {
  const connection = await new Connection().load();

  await connection.connect();

  connection.getRepository<ExampleEntity>(ExampleEntity); // <- Here!!!
};
```
