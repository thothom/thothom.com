---
sidebar_position: 2
---

# Connections

Connections are the classes used to create the **database connection**, and handle all the things related to it.

**All** of the connections are managed by the plugins, and in the most of the cases, it will be the **only thing** that you should import from a plugin.

:::caution

Techmmunity Symbiosis doesn't have a connection class to be imported by the user!

The `Connection` exported from `@techmmunity/symbiosis` is an **abstract class** to be used by the plugins!

:::

## Options

Techmmunity Symbiosis provides some basic config for the connections, that are present and can be used by any plugin.

Example where to use it:

```ts
// database.connection.ts

import { ExampleConnection } from "example-symbiosis-plugin";

export const connection = new ExampleConnection({
  // <- HERE this are the connection options
});
```

### `name`

This is the connection name. It mostly used for logs and will not interfere with the OM functioning, **it's only cosmetic**, and because of it, you can have multiple connections with the same name, but we recommend to name each connection with it's own name.

```ts
// database.connection.ts

import { ExampleConnection } from "example-symbiosis-plugin";

export const connection = new ExampleConnection({
  name: "Default",
});
```

### `entities`

This field specifies your entities, and you must put **all of your entities here**. The sub-entities are recognized automatically, so you don't have to specify them.

We are currently working to accept paths to the entities, like TypeORM does, but right now it isn't available.

```ts
// database.connection.ts

import { ExampleConnection } from "example-symbiosis-plugin";
import { ExampleEntity } from "./example.entity";

export const connection = new ExampleConnection({
  entities: [ExampleEntity], // All your entities should be here
});
```

### `logging`

This options specifies the logging level of the connection.

| DEFAULT | value            | error | warn | info | log | debug |
| :-----: | ---------------- | :---: | :--: | :--: | :-: | :---: |
|         | `"MINIMUM"`      |   X   |      |      |     |       |
|    X    | `"ALL"`          |   X   |  X   |      |  X  |       |
|         | `"ALL_INTERNAL"` |   X   |  X   |  X   |  X  |   X   |
|         | `["ERROR"]`      |   X   |      |      |     |       |
|         | `["WARN"]`       |       |  X   |      |     |       |
|         | `["INFO"]`       |       |      |  X   |     |       |
|         | `["LOG"]`        |       |      |      |  X  |       |
|         | `["DEBUG"]`      |       |      |      |     |   X   |

### `timeout`

The time **in seconds** that a query has before it be considered a fail.

### `namingStrategy`

This is were Techmmunity Symbiosis starts to bright! This config will format every name of your entities, columns and in the future, indexes and more!

Accepted values: `"camelCase"`, `"PascalCase"`, `"snake_case"`, `"kebab-case"`, `"UPPER_CASE"`, and a custom function, like this: `(name: string) => string`.

Example:

```ts
// If you have the class:
class ExampleEntity {}

// And the config are:
{
  namingStrategy: {
    entity: "snake_case",
  },
}

// In the database will be:
"example_entity"
```

### `prefix` and `suffix`

Prefix / Suffix to be added / removed from entities, columns, etc, names.

Works **FROM code TO database**. Ex: An class `ExampleClass` with prefix `Prefix` will be `PrefixExampleClass` in the database.

**Execution order:** Remove -> Add

:::caution

The prefixes aren't affected by the namingStrategy config! They are applied **AFTER** the namingStrategy formatting, so be careful with which naming strategy you use in this config!

:::

:::caution

The naming strategy are applied **BEFORE** the prefix and suffix, so in some cases, your column names maybe don't follow it, like in this example:

```ts
// If you have the entity:
@Entity()
class ExampleEntity {
	@Column()
	fooBar: string;
}

// And your connection options are like this:
{
  namingStrategy: {
    column: "camelCase",
  },
  prefix: {
    column: {
      remove: "foo",
    },
  },
}

// The name of the column `fooBar` in the database will be:
"Bar"
```

:::

### `timeZone`

Time Zone used to format the dates before be saved in the database, and for the auto-generated columns.

[List with all time zones available](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

**DEFAULT:** `"UTC"`
