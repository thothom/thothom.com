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
- If a record with the same primary keys **exist**, it will be updated (or **replaced**, depending on the plugin)

:::tip

In the most of the databases, this is the most performative query to create / update / replace, so if you don't want to **specifically** insert or update, we always recommend to use this method.

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

:::caution

This may will do to 2 queries internally instead of 1.

**Obs:** This is a limitation from the databases, not from Symbiosis, ok? :wink:

:::

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

Updates one or many records of the table based on a query condition.

:::caution

Always try to make queries by primary keys, otherwise the queries will be **very unperformative**.

**Obs:** This is a limitation from the databases, not from Symbiosis, ok? :wink:

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
  const example = await exampleRepository.upsert(data);

  return example;
};

crateOrUpdateExample({
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

Always try to make queries by primary keys, otherwise the queries will be **extremely unperformative**.

**Obs:** This is a limitation from the databases, not from Symbiosis, ok? :wink:

:::

```ts
import { FindOptions } from "@techmmunity/symbiosis";
import { ExampleEntity } from "./example.entity";

const findExamples = async (findOptions: FindOptions<ExampleEntity>) => {
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

Always try to make queries by primary keys, otherwise the queries will be **extremely unperformative**.

**Obs:** This is a limitation from the databases, not from Symbiosis, ok? :wink:

:::

```ts
import { FindOneOptions } from "@techmmunity/symbiosis";
import { ExampleEntity } from "./example.entity";
import { exampleRepository } from "./example.repository";

const findExample = async (condition: FindOneOptions<ExampleEntity>) => {
  const example = await exampleRepository.findOne(condition);

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

Delete one or many records by a query condition.

:::caution

Always try to make queries by primary keys, otherwise the queries will be **extremely unperformative**.

**Obs:** This is a limitation from the databases, not from Symbiosis, ok? :wink:

:::

```ts
import { FindConditions } from "@techmmunity/symbiosis";
import { ExampleEntity } from "./example.entity";
import { exampleRepository } from "./example.repository";

const deleteExamples = async (condition: FindConditions<ExampleEntity>) => {
  const examples = await exampleRepository.delete(condition);

  return examples;
};

deleteExamples({
  id: 123,
});
```

### `softDelete`

Soft delete one or many records by a query condition.

:::caution

To use this method, the entity must have a column decorated with [`@DeleteDateColumn`](./schemas#deletedatecolumn)

:::

:::caution

Always try to make queries by primary keys, otherwise the queries will be **extremely unperformative**.

**Obs:** This is a limitation from the databases, not from Symbiosis, ok? :wink:

:::

```ts
import { FindConditions } from "@techmmunity/symbiosis";
import { ExampleEntity } from "./example.entity";
import { exampleRepository } from "./example.repository";

const deleteExamples = async (condition: FindConditions<ExampleEntity>) => {
  const examples = await exampleRepository.softDelete(condition);

  return examples;
};

deleteExamples({
  id: 123,
});
```

### `recover`

Recover records that was soft deleted, filtering by a query condition.

:::caution

To use this method, the entity must have a column decorated with [`@DeleteDateColumn`](./schemas#deletedatecolumn)

:::

:::caution

Always try to make queries by primary keys, otherwise the queries will be **very unperformative**.

**Obs:** This is a limitation from the databases, not from Symbiosis, ok? :wink:

:::

```ts
import { FindConditions } from "@techmmunity/symbiosis";
import { ExampleEntity } from "./example.entity";
import { exampleRepository } from "./example.repository";

const recoverExamples = async (condition: FindConditions<ExampleEntity>) => {
  const examples = await exampleRepository.recover(condition);

  return examples;
};

recoverExamples({
  id: 123,
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

Always try to make queries by primary keys, otherwise the queries will be **extremely unperformative**.

**Obs:** This is a limitation from the databases, not from Symbiosis, ok? :wink:

:::

```ts
import { FindConditions } from "@techmmunity/symbiosis";
import { ExampleEntity } from "./example.entity";
import { exampleRepository } from "./example.repository";

const countExamples = async (condition: FindConditions<ExampleEntity>) => {
  const examples = await exampleRepository.count(condition);

  return examples;
};

countExamples({
  id: 123,
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
import { FindConditions } from "@techmmunity/symbiosis";
import { ExampleEntity } from "./example.entity";
import { exampleRepository } from "./example.repository";

const countExamples = async (condition: FindConditions<ExampleEntity>) => {
  const examples = await exampleRepository.performativeCount(condition);

  return examples;
};

countExamples({
  id: 123,
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

:::info

Array values doesn't need any special character, just pass they normally, like you do with nested values.

Ex: `"entityArrayColumn.subEntityColumn"`

:::

```ts
const conditions = {
  select: ["id", "fullName"];
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

### `index`

The index to use to query.

```ts
const conditions = {
  index: "email_index,
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

This option is only available on `.find()` queries.

:::

:::caution

This option may isn't available for the most of the NoSql databases, use the [`startFrom`](#startfrom) option instead.

:::

:::caution

This options is **extremely** unperformative, we recommend the use of [`startFrom`](#startfrom) option instead.

:::

```ts
const conditions = {
  skip: 10,
};
```

### `startFrom`

Used to make paginated queries, tells from which record the query should be made.

:::tip

In the most of the databases, this is the most performative way to make a paginated query! 🤩

:::

```ts
const conditions = {
  fromRecord: {
    id: 100,
  },
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

Every method receives a second (or third, it will be always the last one) parameter `options`. These options can configure some behaviors of the query, and can make the developers life easier.

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
