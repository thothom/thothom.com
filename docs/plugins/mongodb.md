---
sidebar_position: 2
---

# MongoDB

MongoDB is the most popular NoSQL database. It is very flexible with it's queries, and allow you to do almost anything.

## Installation

With Yarn:

```
yarn add @thothom/mongodb
```

With NPM:

```
npm i @thothom/mongodb
```

## Usage

This lib is currently under work, so we can complete integrate `@thothom/core` and take advantage of all it's features.

It's use is exactly like described in [the first steps](../overview/first-steps).

## Examples

- [Basic example](https://github.com/thothom/example-mongodb)

## Advices and alerts

### Methods NOT implemented

- `.insert()`
- `.update()`
- `.upsert()`
- `.softDelete()`
- `.recover()`
- `.count()`
- `.performativeCount()`

### SaveOperators NOT supported

- `IfNotExists`

### FindOperators

100% supported and implemented 🤩

## Special behavior

### Entities

- All entities can have **only one** `@PrimaryColumn` ( or `@PrimaryGeneratedColumn`), and it's name **must** be `_id`

Example:

```ts
@Entity()
class ExampleEntity {
  @PrimaryColumn({
    name: "_id", // REQUIRED!!!
  })
  id: string;
}
```

- The type of the primary column can be `string` or `number`
- Primary column **can be** an `uuid`

### `Pop`

- Only works using values `-1` (first item) or `1` (last item).
