---
sidebar_position: 1
---

# Use arrays

_Thoth_ requires a bit more of information to work properly with arrays. You must specify the type of the items of the array, and cannot have arrays with multiples types.

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
