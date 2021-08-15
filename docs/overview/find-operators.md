---
sidebar_position: 5
---

# Find Operators

Find operators are used standardize how complex queries are made, so developers only have to learn how to do an specific thing one time.

## Between

`Between` operator is used to find things between two values, it can includes dates, numbers and even strings, depending on the database.

:::info

Depending on the plugin, this operator accepts `string` (ISO dates), `number` and `Date`.

By default, we recommend to the plugin creators to accept at least `number` as parameter.

:::

Example:

```ts
import { Between } from "@techmmunity/compass";

import { exampleRepository } from "./example.repository";

// ...

exampleRepository.find({
  age: Between(1, 10),
});

// ...
```

## EndsWith

`EndsWith` operator is used to find columns where the value ends with a specific string.

Example:

```ts
import { EndsWith } from "@techmmunity/compass";

import { exampleRepository } from "./example.repository";

// ...

const people = await exampleRepository.find({
  fullName: EndsWith("Wayne"),
});

// people = ["Bruce Wayne", "Martha Wayne", "Thomas Wayne"]

// ...
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
import { Exist } from "@techmmunity/compass";

import { exampleRepository } from "./example.repository";

// ...

exampleRepository.find({
  age: Exist(),
});

// ...
```

## In

`In` operator allow you to specify a find to multiple values to a single column.

:::tip

Some plugins _may_ accept a combination of this decorator with other decorators, like this: `In([Not("foo"), Like("bar")])`.

Please check it at the plugin documentation.

:::

Example:

```ts
import { In } from "@techmmunity/compass";

import { exampleRepository } from "./example.repository";

// ...

exampleRepository.find({
  age: In([18, 21, 48]),
});

// ...
```

## IsNull

`IsNull` operator is used to find columns that have a `null` value.

Example:

```ts
import { IsNull } from "@techmmunity/compass";

import { exampleRepository } from "./example.repository";

// ...

exampleRepository.find({
  age: IsNull(),
});

// ...
```

## LessThan

`LessThan` operator is used to find columns that have a value less than a specific value.

:::danger

This operator **can't** be combined with the `Not` operator. Use the [`MoreThanOrEqual`](#morethanorequal) operator instead.

:::

Example:

```ts
import { LessThan } from "@techmmunity/compass";

import { exampleRepository } from "./example.repository";

// ...

exampleRepository.find({
  age: LessThan(35),
});

// ...
```

## LessThanOrEqual

`LessThanOrEqual` operator is used to find columns that have a value less than or equal to a specific value.

:::danger

This operator **can't** be combined with the `Not` operator. Use the [`MoreThan`](#morethan) operator instead.

:::

Example:

```ts
import { LessThanOrEqual } from "@techmmunity/compass";

import { exampleRepository } from "./example.repository";

// ...

exampleRepository.find({
  age: LessThanOrEqual(35),
});

// ...
```

## Like

`Like` operator is used to find columns where the value includes a specific string.

:::caution

The value is **case sensitive**!

:::

Example:

```ts
import { Like } from "@techmmunity/compass";

import { exampleRepository } from "./example.repository";

// ...

exampleRepository.find({
  fullName: Like("John"),
});

// ...
```

## MoreThan

`MoreThan` operator is used to find columns that have a value more than a specific value.

:::danger

This operator **can't** be combined with the `Not` operator. Use the [`LessThanOrEqual`](#lessthanorequal) operator instead.

:::

Example:

```ts
import { MoreThan } from "@techmmunity/compass";

import { exampleRepository } from "./example.repository";

// ...

exampleRepository.find({
  age: MoreThan(35),
});

// ...
```

## MoreThanOrEqual

`MoreThanOrEqual` operator is used to find columns that have a value more than or equal to a specific value.

:::danger

This operator **can't** be combined with the `Not` operator. Use the [`LessThan`](#lessthan) operator instead.

:::

Example:

```ts
import { MoreThanOrEqual } from "@techmmunity/compass";

import { exampleRepository } from "./example.repository";

// ...

exampleRepository.find({
  age: MoreThanOrEqual(35),
});

// ...
```

## Not

`Not` is the most versatile of the operators. It's used to negate values, and can be combined with almost all of the operators.

Example with simple value:

```ts
import { Not } from "@techmmunity/compass";

import { exampleRepository } from "./example.repository";

// ...

exampleRepository.find({
  age: Not(35),
});

// ...
```

Example combine with other operator:

```ts
import { Not, In } from "@techmmunity/compass";

import { exampleRepository } from "./example.repository";

// ...

exampleRepository.find({
  age: Not(In([35, 48, 52])),
});

// ...
```

## StartsWith

`StartsWith` operator is used to find columns where the value starts with a specific string.

Example:

```ts
import { StartsWith } from "@techmmunity/compass";

import { exampleRepository } from "./example.repository";

// ...

const people = await exampleRepository.find({
  fullName: StartsWith("Bruce"),
});

// people = ["Bruce Banner", "Bruce Wayne"]

// ...
```
