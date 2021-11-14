---
sidebar_position: 1
---

# Use sub-entities

```ts
import { Entity, SubEntity, Column } from "@techmmunity/symbiosis";

@SubEntity()
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

You don't need to pass sub-entities to the `entities` array of the connection config. They are automatically detected.

:::
