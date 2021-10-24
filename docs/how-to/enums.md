---
sidebar_position: 1
---

# Use enums

To use an enum as type with _Symb_, you need to specify an option `enum`.

```ts
import { Entity, Column } from "@techmmunity/symbiosis";

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
