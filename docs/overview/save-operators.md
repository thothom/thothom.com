---
sidebar_position: 8
---

# Save Operators

Save operators are used standardize how complex queries are made, so developers only have to learn how to do an specific thing one time.

The support of it's operators depends **of the plugins**, so you **must** see their docs to confirm **if** you can use this operators, and **how exactly** they work. Some of then will only accept certain types of values, ou values that are referring to something specific, like indexes in an array.

## Append

`Append` operator is used to add items to the end of an list.

Example:

```ts
import { Append } from "@techmmunity/symbiosis";

import { exampleRepository } from "./example.repository";

const tags = ["tag1", "tag2"];

await exampleRepository.update(
  {
    id: 1,
  },
  {
    roles: Append("admin", "moderator"),
    tags: Append(...tags),
  }
);

// Before
{
  roles: ["foo"],
  tags: ["bar"]
}

// After
{
  roles: ["foo", "admin", "moderator"],
  tags: ["bar", "tag1", "tag2"]
}
```

## IfNotExists

`IfNotExists` operator is used to create a value only if the column doesn't exists before.

Example:

```ts
import { IfNotExists } from "@techmmunity/symbiosis";

import { exampleRepository } from "./example.repository";

await exampleRepository.upsert(
  {
    id: 1,
  },
  {
    createdAt: IfNotExists("01/01/2020"),
  }
);
```

## Max

`Max` operator is used to update the value of the column ONLY IF it's lower than the value specified.

Example:

If the database value is `5`, and you use `Max(7)`, it will update the database value to `7`, but if the database value is `10`, and you use `Max(7)`, the database value will continue `10`.

```ts
import { Max } from "@techmmunity/symbiosis";

import { exampleRepository } from "./example.repository";

await exampleRepository.update(
  {
    id: 1,
  },
  {
    count: Max(5),
  }
);
```

## Min

`Min` operator is used to update the value of the column ONLY IF it's greater than the value specified.

Example:

If the database value is `7`, and you use `Min(5)`, it will update the database value to `5`, but if the database value is `7`, and you use `Min(10)`, the database value will continue `7`.

```ts
import { Min } from "@techmmunity/symbiosis";

import { exampleRepository } from "./example.repository";

await exampleRepository.update(
  {
    id: 1,
  },
  {
    count: Min(5),
  }
);
```

## Minus

`Minus` operator update the value of a column as itself `-` the value passed as param

Example:

If the database value is `10`, and you use `Minus(5)`, the database value will be updated to `5`.

```ts
import { Minus } from "@techmmunity/symbiosis";

import { exampleRepository } from "./example.repository";

await exampleRepository.update(
  {
    id: 1,
  },
  {
    count: Minus(5),
  }
);
```

## Plus

`Plus` operator update the value of a column as itself `+` the value passed as param

Example:

If the database value is `10`, and you use `Plus(5)`, the database value will be updated to `15`.

```ts
import { Plus } from "@techmmunity/symbiosis";

import { exampleRepository } from "./example.repository";

await exampleRepository.update(
  {
    id: 1,
  },
  {
    count: Plus(5),
  }
);
```

## Pop

`Pop` operator is used to remove items from a list.

Example:

```ts
import { Pop } from "@techmmunity/symbiosis";

import { exampleRepository } from "./example.repository";

await exampleRepository.update(
  {
    id: 1,
  },
  {
    roles: Pop("admin", "moderator"),
  }
);
```

## Remove

`Remove` operator is used to remove a column from a record.

Example:

```ts
import { Remove } from "@techmmunity/symbiosis";

import { exampleRepository } from "./example.repository";

await exampleRepository.update(
  {
    id: 1,
  },
  {
    deletedAt: Remove(),
  }
);
```
