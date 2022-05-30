---
sidebar_position: 1
---

# Utilizando enums

Para usar um enum como tipo com o _Thoth_, você precisa especificar uma opção `enum`.

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
