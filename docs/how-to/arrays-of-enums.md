---
sidebar_position: 1
---

# Use arrays of enums

You can combine arrays with enums, this way:

```ts
import { Entity, Column } from "@techmmunity/symbiosis";

import { RoleEnum } from "./role.enum";

@Entity()
export class ExampleEntity {
  // ...

  @Column({
    type: String,
    enum: RoleEnum,
  })
  public roles: Array<RoleEnum>;

  // ...
}
```
