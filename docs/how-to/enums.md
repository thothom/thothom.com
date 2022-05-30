---
sidebar_position: 1
---

# Use enums

To use an enum as type with _Thoth_, you need to specify an option `enum`.

```ts
import { Entity, Column } from "@thothom/core";

import { RoleEnum } from "./role.enum";

@Entity()
export class ExampleEntity {
  // ...

  @Column({
    enum: RoleEnum,
  })
  public role: RoleEnum;

  // ...
}
```
