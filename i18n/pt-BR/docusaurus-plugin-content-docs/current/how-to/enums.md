---
sidebar_position: 1
---

# Utilizando enums

Para usar um enum como tipo com o _Symb_, você precisa especificar uma opção `enum`.

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
