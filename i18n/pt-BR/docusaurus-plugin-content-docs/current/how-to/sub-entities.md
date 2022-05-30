---
sidebar_position: 1
---

# Utilizando sub-entidades

```ts
import { Entity, Column } from "@thothom/core";

@Entity({
  isSubEntity: true,
})
export class SubExampleEntity {
  // ...

  @Column()
  public foo: string;

  // ...
}

@Entity()
export class ExampleEntity {
  // ...

  @Column(SubExampleEntity)
  public subEntity: SubExampleEntity;

  // ...
}
```

:::info

Você não precisa passar sub-entidades para o array `entities` das opções de configuração da conexão. Elas são detectadas automaticamente.

:::
