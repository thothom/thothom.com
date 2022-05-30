---
sidebar_position: 11
---

# Types

_Thoth_ exports some types to help you to type your application without have to worry so much.

## `EntityType`

`EntityType` is a type to help you to type your entity. It automatically omits some fields, and allow you to omit more fields if necessary.

### Omitted Fields

- `runAfterDelete`
- `runAfterFind`
- `runAfterInsert`
- `runAfterUpdate`
- `runAfterUpsert`
- `runBeforeDelete`
- `runBeforeFind`
- `runBeforeInsert`
- `runBeforeUpdate`
- `runBeforeUpsert`

### Example

```ts
import { Entity, PrimaryGeneratedColumn, createdAtHash, EntityType } from "@thothom/core";

@Entity()
class ExampleEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  createdAtHash: string;
}

export ExampleType = EntityType<ExampleEntity, "createdAtHash">;
```
