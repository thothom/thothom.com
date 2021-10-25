---
sidebar_position: 1
---

# Utilizando arrays de enums

Você pode combinar arrays com enums, deste modo:

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
