---
sidebar_position: 10
---

# CLI

_Thoth_ has a separate package to it's CLI, so the core package can be more lightweight and encapsulated.

The CLI is very useful to generate migrations and entities automatically.

## Installation

Migrations are created or generated using the `@thothom/cli` package, so first of all, we need to install the package.

```sh
yarn add -D @thothom/cli
```

## Preparation

Add a alias to the `thothom` command.

```json
// package.json

{
  //...
  "scripts": {
    //...
    "thothom": "thothom"
  }
}
```

Create a `thothom.config.js` file in the root dir of your app, or generate one using the [`gen:config`](#genconfig) command.

```js
module.exports = {
  migrationsDir: "migrations/dir",
  entitiesDir: ["entities/**/dir/*.ts"],
  databaseConfig: {
    // ...
  },
};
```

## Commands

### `gen:config`

Automatically generates a config file at the root dir of your app.

The options of `thothom.config.js` are the same of the [`Connection`](./connections#options) class.

```sh
yarn thothom gen:config
```

### `gen:migration`

This command will generate all migrations to update you database according to your code.

To use this command, you need to create a `thothom.config.js` file. You you don't have one, you can generate a empty one using the [`gen:config`](#genconfig) command.

```sh
yarn thothom gen:migration
```

### `create:migration`

Create an empty migration, so you can write the migration by your own.

```sh
yarn thothom create:migration
```
