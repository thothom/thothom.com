---
sidebar_position: 1
---

# Utilizando arrays

O _Thoth_ requer um pouco mais de informações para trabalhar corretamente com arrays. Você deve identificar o tipo dos itens do array, e não deve haver arrays com multiplos tipos.

```ts
import { Entity, Column } from "@thothom/core";

@Entity()
export class ExampleEntity {
  // ...

  @Column(String)
  public roles: Array<string>;

  // OR

  @Column({
    type: String,
  })
  public roles: Array<string>;

  // ...
}
```
