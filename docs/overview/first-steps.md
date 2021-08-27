---
sidebar_position: 1
---

# First Steps

## Installation

With Yarn:

```
yarn add @techmmunity/symbiosis
```

With NPM:

```
npm i --save @techmmunity/symbiosis
```

:::danger

The installation is not over yet, you still need a plugin!

:::

## Plugins

As mentioned in the introduction, Techmmunity Symbiosis works with plugins. You can find a complete list of official and recommended plugins [right here](../plugins/plugins-list).

## Use

### Create your Entity

```ts
// example.entity.ts

import {
  Entity,
  PrimaryColumn,
  Column,
  SaveDateColumn,
} from "@techmmunity/symbiosis";

@Entity()
export class ExampleEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  foo: number;

  @SaveDateColumn()
  createdAt: Date;
}
```

### Creating your Connection

The connections are imported **from the plugins**, so replace the `example-symbiosis-plugin` of this example, with the plugin that you choose to use.

When creating a connection, you must import all the entities and put it into and array of the connection options, like in this example:

```ts
// database.connection.ts

import { ExampleConnection } from "example-symbiosis-plugin";
import { ExampleEntity } from "./example.entity";

export const connection = new ExampleConnection({
  entities: [ExampleEntity], // All your entities should be here
  // Put the extra connection options here
});
```

### Creating your Repository

The repositories are made from a combination of `connection` + `entity`, like this:

```ts
// example.repository.ts

import { ExampleEntity } from "./example.entity";
import { connection } from "./database.connection";

export const ExampleRepository = connection.getRepository(ExampleEntity);
```

### Using your Repository

```ts
// using.repository.ts

import { ExampleRepository } from "./example.repository";

// More logic here

ExampleRepository.save(data);
ExampleRepository.findOneByPrimaryKey(data);
ExampleRepository.findManyByPrimaryKey(data);
// And a lot more
```

You can see a full list of the repository methods [right here](./repositories).

## Done!

This is the basics of Techmmunity Symbiosis! Now you are ready to start to explore and make your crazy CRUDs!

:::tip After This

We **strongly** recommend that you keep reading the docs. Techmmunity Symbiosis has a lot of cool features that can save you a ton of time!

:::
