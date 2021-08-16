---
sidebar_position: 4
---

# Repositories

Repositories are the translator between code and database, they are used to do all the queries.

All the repositories are created from the [connection](./connections) and the [schema](./schemas), so you need they both to get your repository.

## Creating a Repository

With your connection and schema, you simply need to do this:

```ts
import { connection } from "./database.connection";
import { ExampleEntity } from "./example.entity";

const exampleRepository = connection.getRepository(ExampleEntity);
```

<!-- ################################ -->
<!-- ################################ -->
<!-- ################################ -->

## Insert

<!-- ################################ -->
<!-- ################################ -->
<!-- ################################ -->

### `save`

The save methods makes an **"upsert"** query, that is:

- If a record with the same primary keys **doesn't exist**, it will be created
- If a record with the same primary keys **exist**, it will be updated

:::tip

In the most of the databases, this is the most performative query to create / update, so if you don't want to **specifically** insert or update, we always recommend to use this method.

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

### `insert`

Inserts a new record to the table. If a record with the same primary keys already exist, throw an error.

```ts
import { ExampleEntity } from "./example.entity";
import { exampleRepository } from "./example.repository";

const createExample = async (data: ExampleEntity) => {
  try {
    const example = await exampleRepository.insert(data);

    return example;
  } catch (err) {
    // If the record already exist
  }
};

createExample({
  foo: "bar",
});
```

### `update`

Updates many records of the table based on a query condition.

:::caution

Always try to make queries by primary keys, otherwise the queries will be **extremely** unperformative.

**Obs:** This is a limitation from the databases, not from Compass, ok? :wink:

:::

```ts
import { ExampleEntity } from "./example.entity";
import { exampleRepository } from "./example.repository";

const updateExamples = async (data: ExampleEntity) => {
  const examples = await exampleRepository.update(conditions, data);

  return examples;
};

updateExamples(
  {
    bar: 1,
  },
  {
    foo: "bar",
  }
);
```

### `upsert`

Insert or update a specific record of the table based on it's primary key.

```ts
import { ExampleEntity } from "./example.entity";
import { exampleRepository } from "./example.repository";

const crateOrUpdateExample = async (data: ExampleEntity) => {
  try {
    const example = await exampleRepository.upsert(data);

    return example;
  } catch (err) {
    // If the record doesn't exist
  }
};

updateExample({
  id: 123,
  foo: "bar",
});
```

<!-- ################################ -->
<!-- ################################ -->
<!-- ################################ -->

## Find

<!-- ################################ -->
<!-- ################################ -->
<!-- ################################ -->

### `find`

Find multiple records by a query condition.

:::caution

Always try to make queries by primary keys, otherwise the queries will be **extremely** unperformative.

**Obs:** This is a limitation from the databases, not from Compass, ok? :wink:

:::

```ts
import { ExampleEntity } from "./example.entity";
import { exampleRepository } from "./example.repository";

const findExamples = async (condition: Partial<ExampleEntity>) => {
  const examples = await exampleRepository.find(condition);

  return examples;
};

findExamples({
  age: 25,
});

// Or

import { FindOptions } from "@techmmunity/compass";

const findExamples = async (findOptions: FindOptions) => {
  const examples = await exampleRepository.find(findOptions);

  return examples;
};

findExamples({
  where: {
    age: 25,
  },
});
```

### `findOne`

Find one record by a query condition.

:::caution

Always try to make queries by primary keys, otherwise the queries will be **extremely** unperformative.

**Obs:** This is a limitation from the databases, not from Compass, ok? :wink:

:::

```ts
import { ExampleEntity } from "./example.entity";
import { exampleRepository } from "./example.repository";

const findExample = async (condition: Partial<ExampleEntity>) => {
  const example = await exampleRepository.findOne(condition);

  return example;
};

findExample({
  age: 25,
});

// Or

import { FindOptions } from "@techmmunity/compass";

const findExample = async (findOptions: FindOptions) => {
  const example = await exampleRepository.find(findOptions);

  return example;
};

findExample({
  where: {
    age: 25,
  },
});
```

<!-- ################################ -->
<!-- ################################ -->
<!-- ################################ -->

## Delete

<!-- ################################ -->
<!-- ################################ -->
<!-- ################################ -->

### `delete`

Delete multiple records by a query condition.

:::caution

Always try to make queries by primary keys, otherwise the queries will be **extremely** unperformative.

**Obs:** This is a limitation from the databases, not from Compass, ok? :wink:

:::

```ts
import { ExampleEntity } from "./example.entity";
import { exampleRepository } from "./example.repository";

const deleteExamples = async (condition: Partial<ExampleEntity>) => {
  const examples = await exampleRepository.delete(condition);

  return examples;
};

deleteExamples({
  id: 123,
});

// Or

import { FindOptions } from "@techmmunity/compass";

const deleteExamples = async (findOptions: FindOptions) => {
  const examples = await exampleRepository.delete(findOptions);

  return examples;
};

deleteExamples({
  where: {
    age: 25,
  },
});
```

### `softDelete`

Soft delete multiple records by a query condition.

:::caution

To use this method, the entity must have a column decorated with [`@DeleteDateColumn`](./schemas#deletedatecolumn)

:::

:::caution

Always try to make queries by primary keys, otherwise the queries will be **extremely** unperformative.

**Obs:** This is a limitation from the databases, not from Compass, ok? :wink:

:::

```ts
import { ExampleEntity } from "./example.entity";
import { exampleRepository } from "./example.repository";

const deleteExamples = async (condition: Partial<ExampleEntity>) => {
  const examples = await exampleRepository.softDelete(condition);

  return examples;
};

deleteExamples({
  id: 123,
});

// Or

import { FindOptions } from "@techmmunity/compass";

const deleteExamples = async (findOptions: FindOptions) => {
  const examples = await exampleRepository.softDelete(findOptions);

  return examples;
};

deleteExamples({
  where: {
    age: 25,
  },
});
```

### `recover`

Recover records that were soft deleted, filtering by a query condition.

:::caution

To use this method, the entity must have a column decorated with [`@DeleteDateColumn`](./schemas#deletedatecolumn)

:::

:::caution

Always try to make queries by primary keys, otherwise the queries will be **extremely** unperformative.

**Obs:** This is a limitation from the databases, not from Compass, ok? :wink:

:::

```ts
import { ExampleEntity } from "./example.entity";
import { exampleRepository } from "./example.repository";

const recoverExamples = async (condition: Partial<ExampleEntity>) => {
  const examples = await exampleRepository.recover(condition);

  return examples;
};

recoverExamples({
  id: 123,
});

// Or

import { FindOptions } from "@techmmunity/compass";

const recoverExamples = async (findOptions: FindOptions) => {
  const examples = await exampleRepository.recover(findOptions);

  return examples;
};

recoverExamples({
  where: {
    age: 25,
  },
});
```

<!-- ################################ -->
<!-- ################################ -->
<!-- ################################ -->

## Count

<!-- ################################ -->
<!-- ################################ -->
<!-- ################################ -->

### `count`

Count the records returned by a query condition.

:::caution

Always try to make queries by primary keys, otherwise the queries will be **extremely** unperformative.

**Obs:** This is a limitation from the databases, not from Compass, ok? :wink:

:::

```ts
import { ExampleEntity } from "./example.entity";
import { exampleRepository } from "./example.repository";

const countExamples = async (condition: Partial<ExampleEntity>) => {
  const examples = await exampleRepository.count(condition);

  return examples;
};

countExamples({
  id: 123,
});

// Or

import { FindOptions } from "@techmmunity/compass";

const countExamples = async (findOptions: FindOptions) => {
  const examples = await exampleRepository.count(findOptions);

  return examples;
};

countExamples({
  where: {
    age: 25,
  },
});
```

### `performativeCount`

Count the records returned by a query condition.

:::caution

Depending on the plugin, the result of this query **may not be precise**.

:::

:::tip

In some database, like PostgreSQL, this is a way to perform a count operation that values more **PERFORMANCE** than **PRECISION**, so if you doesn't need to know **exactly** how many records, you should use this methods, because it will be much more performative.

:::

```ts
import { ExampleEntity } from "./example.entity";
import { exampleRepository } from "./example.repository";

const countExamples = async (condition: Partial<ExampleEntity>) => {
  const examples = await exampleRepository.performativeCount(condition);

  return examples;
};

countExamples({
  id: 123,
});

// Or

import { FindOptions } from "@techmmunity/compass";

const countExamples = async (findOptions: FindOptions) => {
  const examples = await exampleRepository.performativeCount(findOptions);

  return examples;
};

countExamples({
  where: {
    age: 25,
  },
});
```

<!-- ################################ -->
<!-- ################################ -->
<!-- ################################ -->

## Find Options

<!-- ################################ -->
<!-- ################################ -->
<!-- ################################ -->

### `select`

Array of columns that you want to get from the database.

:::info

Columns of sub-entities must be specified separated by dots (`.`).

Ex: `"entityColumn.subEntityColumn"`

:::

```ts
const conditions = {
  select: ["id", "age"];
}
```

### `where`

The conditions to filter the records.

```ts
const conditions = {
  where: {
    id: 1,
    age: MoreThan(25),
  },
};

// Or

const conditions = {
  // This makes an OR conditions, and will bring
  // records that have id = 1 and
  // records that have an age greater than 25
  where: [
    {
      id: 1,
    },
    {
      age: MoreThan(25),
    },
  ],
};
```

### `order`

The order that the results should be queried.

:::caution

Some databases may not support this, or if does, this may be very unperformative, if the order column ins't an index or a primary key.

:::

```ts
const conditions = {
  order: {
    age: "ASC", // Also supports "DESC"
  },
};
```

### `withDeleted`

If the query should bring soft-deleted records.

```ts
const conditions = {
  withDeleted: true,
};
```

### `skip`

Used to make paginated queries, tells how many records should be ignored from the query result.

:::caution

This option is only available on "find many" queries.

:::

:::caution

This option may isn't available for the most of the NoSql databases, use the [`fromRecord`](#fromrecord) option instead.

:::

:::caution

This options is **extremely** unperformative, we recommend the use of [`fromRecord`](#fromrecord) option instead.

:::

```ts
const conditions = {
  skip: 10,
};
```

### `fromRecord`

Used to make paginated queries, tells from which record the query should be made.

:::tip

In the most of the databases, this is the most performative way to make a paginated query!

:::

```ts
const conditions = {
  fromRecord: "record-primary-key",
};
```

### `take`

Used to make paginated queries, tells how many records should be retrieved from que result.

```ts
const conditions = {
  take: 10,
};
```

<!-- ################################ -->
<!-- ################################ -->
<!-- ################################ -->

## Options

<!-- ################################ -->
<!-- ################################ -->
<!-- ################################ -->

Every method receives a second (or third, it will be always the last one) parameter `options`. This options can configure some behaviors of the ORM, and can make the developers life more smooth.

### `retries`

The quantity of retries that should be done if the query fail.

```ts
exampleRepository.save(data, {
  retries: 1,
});
```

### `timeout`

The time **in seconds** that the plugin should await before the query fails.

```ts
exampleRepository.save(data, {
  timeout: 2,
});
```

### `extras`

Extra data that can be used by plugins

```ts
exampleRepository.save(data, {
  extras: {
    foo: "bar",
  },
});
```
