---
sidebar_position: 4
---

# Repositories

Repositories are the translator between code and database, they are used to do all the queries.

All the repositories are created from the [connection](./connections) and the [schema](./schema), so you need they both to get your repository.

## Creating a Repository

With your connection and schema, you simply need to do this:

```ts
import { connection } from "./database.connection";
import { ExampleEntity } from "./example.entity";

const exampleRepository = connection.getRepository(ExampleEntity);
```

## Repository Methods

### `save`

The save methods makes an **"upsert"** query, that is:

- If a record with the same primary keys **doesn't exist**, it will be created
- If a record with the same primary keys **exist**, it will be updated

:::tip

In the most of the databases, this is the most performative query, so if you don't want to **specifically** insert or update, we always recommend to use this method.

:::

```ts
import { ExampleEntity } from "./example.entity";
import { exampleRepository } from "./example.repository";

const createExample = async (data: ExampleEntity) => {
  const example = await exampleRepository.save(data);

  return example;
};

createExample({
  foo: "bar",
});
```

### `findOneByPrimaryKey`

This methods find one record by it's primary key.

:::tip

In the most of NoSQL databases, this is the most performative way to find a record.

:::

```ts
import { ExampleEntity } from "./example.entity";
import { exampleRepository } from "./example.repository";

const findExample = async (primaryKey: string) => {
  const example = await exampleRepository.findOneByPrimaryKey(primaryKey);

  return example;
};

findExample("foo");

// Or

interface CompositePrimaryKeys {
  foo: string;
  bar: number;
}

const findExample = async (compositePrimaryKey: CompositePrimaryKeys) => {
  const example = await exampleRepository.findOneByPrimaryKey(
    compositePrimaryKey
  );

  return example;
};

findExample({
  foo: "foo",
  bar: 1,
});
```

### `findManyByPrimaryKey`

This methods find multiple records by the primary keys.

:::tip

In the most of NoSQL databases, this is the most performative way to find a record.

:::

```ts
import { ExampleEntity } from "./example.entity";
import { exampleRepository } from "./example.repository";

const findManyExamples = async (primaryKeys: Array<string>) => {
  const example = await exampleRepository.findManyByPrimaryKey(primaryKeys);

  return example;
};

findExample(["foo", "bar"]);

// Or

interface CompositePrimaryKeys {
  foo: string;
  bar: number;
}

const findExample = async (
  compositePrimaryKey: Array<CompositePrimaryKeys>
) => {
  const example = await exampleRepository.findManyByPrimaryKey(
    compositePrimaryKey
  );

  return example;
};

findExample([
  {
    foo: "foo",
    bar: 1,
  },
  {
    foo: "foo-foo",
    bar: 2,
  },
]);
```
