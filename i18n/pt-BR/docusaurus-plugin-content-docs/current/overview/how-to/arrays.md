---
sidebar_position: 1
---

# Utilizando arrays

O _Symb_ requer um pouco mais de informações para trabalhar corretamente com matrizes. Você deve identificar o tipo dos itens do array, e não deve haver arrays com multiplos tipos.

```ts
import { Entity, Column } from "@techmmunity/symbiosis";

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
