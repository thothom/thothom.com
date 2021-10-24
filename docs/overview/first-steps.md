---
sidebar_position: 1
---

# First Steps

## Installation

With Yarn:

```
yarn add @techmmunity/symbiosis reflect-metadata
```

With NPM:

```
npm i @techmmunity/symbiosis reflect-metadata
```

:::danger

The installation is not over yet, you still need a plugin!

:::

Configure `tsconfig.json`:

```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

## Plugins

As mentioned in the introduction, _Symb_ works with plugins. You can find a complete list of official and recommended plugins [right here](../overview/plugins), or a list of all plugins [right here](https://www.npmjs.com/search?q=keywords:techmmunity-symbiosis).

## Usage

### Create your Entity And Repository Type

The `Repository` is imported **from the plugin**, so replace the `example-symbiosis-plugin` of this example, with the plugin that you choose to use.

```ts
// example.entity.ts

import {
  Entity,
  PrimaryColumn,
  Column,
  SaveDateColumn,
} from "@techmmunity/symbiosis";
import type { Repository } from "example-symbiosis-plugin";

@Entity()
export class ExampleEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  foo: number;

  @SaveDateColumn()
  createdAt: Date;
}

export type ExampleRepository = Repository<ExampleEntity>;
```

### Creating your Connection

The `Connection` is imported **from the plugin**, so replace the `example-symbiosis-plugin` of this example, with the plugin that you choose to use.

When creating a connection, you must import **all and only the main entities**, the sub-entities are automatically loaded, and put it into and array of the connection options, like in this example:

```ts
// database.connection.ts

!!! THIS IS AN EXAMPLE OF THE SYNTAX AND WILL NOT WORK !!!

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


export { connection };
```

### Creating your Repository

The repositories are made from a combination of `connection` + `entity`, like this:

```ts
// example.repository.ts

import { ExampleEntity } from "./example.entity";
import { connection } from "./database.connection";

export const exampleRepository = connection.getRepository(ExampleEntity);
```

### Using your Repository

```ts
// using.repository.ts

import { exampleRepository } from "./example.repository";

// More logic here

exampleRepository.save(data);
exampleRepository.findOneByPrimaryKey(data);
exampleRepository.findManyByPrimaryKey(data);
// And a lot more
```

You can see a full list of the repository methods [right here](./repositories).

## Done!

This is the basics of _Symb_! Now you are ready to start to explore and make your own crazy CRUDs!

:::tip After This

We **strongly** recommend that you keep reading the docs. _Symb_ has a lot of cool features that can save you a ton of time!

:::
