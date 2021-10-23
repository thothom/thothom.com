---
sidebar_position: 6
---

# Find Operators

Find operators are used standardize how complex queries are made, so developers only have to learn how to do an specific thing one time.

The support of it's operators depends **of the plugins**, so you **must** see their docs to confirm **if** you can use this operators, and **how exactly** they work. Some of then will only accept certain types of values, ou values that are referring to something specific, like indexes in an array.

## Between

`Between` operator is used to find things between two values, it can includes dates, numbers and even strings, depending on the plugin and the database.

:::info

Depending on the plugin, this operator accepts `string` (ISO dates), `number` and `Date`.

By default, we recommend to the plugin creators to accept at least `number` as parameter.

:::

Example:

```ts
import { Between } from "@techmmunity/symbiosis";

import { exampleRepository } from "./example.repository";

const products = await exampleRepository.find({
  price: Between(1, 25),
});

// products = [{ id: 1, price: 2 }, { id: 2, price: 20 }]
```

## EndsWith

`EndsWith` operator is used to find columns where the value ends with a specific string.

Example:

```ts
import { EndsWith } from "@techmmunity/symbiosis";

import { exampleRepository } from "./example.repository";

const people = await exampleRepository.find({
  fullName: EndsWith("Wayne"),
});

// people = ["Bruce Wayne", "Martha Wayne", "Thomas Wayne"]
```

## Exist

`Exist` operator is used to find entities where some field **exist**, regardless it's value.

:::info

In most cases, this operator will be used by NoSQL databases

:::

:::caution

Some databases don't accept this kind of query, so check it at the plugin documentation.

:::

Example:

```ts
import { Exist } from "@techmmunity/symbiosis";

import { exampleRepository } from "./example.repository";

const tasks = exampleRepository.find({
  deletedAt: Exist(),
});

// tasks = [{ name: "Foo", deletedAt: "01/01/2020" }, { name: "Bar", deletedAt: true }]
```

## In

`In` operator allow you to query multiple values to the same column.

:::tip

Some plugins _may_ accept a combination of this decorator with other decorators, like this: `In([Not("foo"), Like("bar")])`.

Please check it at the plugin documentation.

:::

Example:

```ts
import { In } from "@techmmunity/symbiosis";

import { exampleRepository } from "./example.repository";

const people = await exampleRepository.find({
  age: In([18, 21, 48]),
});

// people = [{ name: "Marcus", age: 48 }]
```

## Includes

`Includes` operator allow you to query values inside a list.

Example:

```ts
import { Includes } from "@techmmunity/symbiosis";

import { exampleRepository } from "./example.repository";

const staff = await exampleRepository.find({
  roles: Includes(["admin", "mod"]),
});

// staff = [{ name: "Marcus", roles: ["default", "admin"] }]
```

## IsNull

`IsNull` operator is used to find columns that have a `null` value.

Example:

```ts
import { IsNull } from "@techmmunity/symbiosis";

import { exampleRepository } from "./example.repository";

const tasks = await exampleRepository.find({
  deletedAt: IsNull(),
});

// tasks = [{ name: "Foo", deletedAt: null }, { name: "Bar", deletedAt: null }]
```

## LessThan

`LessThan` operator is used to find columns that have a value less than a specific value.

:::danger

This operator **can't** be combined with the `Not` operator. Use the [`MoreThanOrEqual`](#morethanorequal) operator instead.

:::

Example:

```ts
import { LessThan } from "@techmmunity/symbiosis";

import { exampleRepository } from "./example.repository";

const people = await exampleRepository.find({
  age: LessThan(35),
});

// people = [{ name: "Marcus", age: 20 }]
```

## LessThanOrEqual

`LessThanOrEqual` operator is used to find columns that have a value less than or equal to a specific value.

:::danger

This operator **can't** be combined with the `Not` operator. Use the [`MoreThan`](#morethan) operator instead.

:::

Example:

```ts
import { LessThanOrEqual } from "@techmmunity/symbiosis";

import { exampleRepository } from "./example.repository";

const people = await exampleRepository.find({
  age: LessThanOrEqual(35),
});

// people = [{ name: "Marcus", age: 35 }]
```

## Like

`Like` operator is used to find columns where the value includes a specific string.

:::caution

The value is **case sensitive**!

:::

Example:

```ts
import { Like } from "@techmmunity/symbiosis";

import { exampleRepository } from "./example.repository";

const people = await exampleRepository.find({
  fullName: Like("John"),
});

// people = [{ fullName: "Paul John Marcus" }, { fullName: "John Hancock" }]
```

## MoreThan

`MoreThan` operator is used to find columns that have a value more than a specific value.

:::danger

This operator **can't** be combined with the `Not` operator. Use the [`LessThanOrEqual`](#lessthanorequal) operator instead.

:::

Example:

```ts
import { MoreThan } from "@techmmunity/symbiosis";

import { exampleRepository } from "./example.repository";

const people = await exampleRepository.find({
  age: MoreThan(35),
});

// people = [{ name: "Marcus", age: 40 }]
```

## MoreThanOrEqual

`MoreThanOrEqual` operator is used to find columns that have a value more than or equal to a specific value.

:::danger

This operator **can't** be combined with the `Not` operator. Use the [`LessThan`](#lessthan) operator instead.

:::

Example:

```ts
import { MoreThanOrEqual } from "@techmmunity/symbiosis";

import { exampleRepository } from "./example.repository";

const people = await exampleRepository.find({
  age: MoreThanOrEqual(35),
});

// people = [{ name: "Marcus", age: 35 }]
```

## Not

`Not` is the most versatile of the operators. It's used to negate values, and can be combined with almost all of the operators.

Example with simple value:

```ts
import { Not } from "@techmmunity/symbiosis";

import { exampleRepository } from "./example.repository";

const people = await exampleRepository.find({
  age: Not(35),
});

// people = [{ name: "Marcus", age: 40 }, { name: "Kate", age: 26 }]
```

Example combine with other operator:

```ts
import { Not, In } from "@techmmunity/symbiosis";

import { exampleRepository } from "./example.repository";

const people = await exampleRepository.find({
  age: Not(In([35, 48, 52])),
});

// people = [{ name: "Marcus", age: 40 }, { name: "Kate", age: 26 }]
```

## StartsWith

`StartsWith` operator is used to find columns where the value starts with a specific string.

Example:

```ts
import { StartsWith } from "@techmmunity/symbiosis";

import { exampleRepository } from "./example.repository";

// ...

const people = await exampleRepository.find({
  fullName: StartsWith("Bruce"),
});

// people = ["Bruce Banner", "Bruce Wayne"]

// ...
```
