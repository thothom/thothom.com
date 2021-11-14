---
sidebar_position: 1
---

# DynamoDB

DynamoDB is the most popular NoSQL database of AWS. It is very scalable and has a very attractive cost benefice.

## Installation

With Yarn:

```
yarn add @techmmunity/symbiosis-dynamodb
```

With NPM:

```
npm i @techmmunity/symbiosis-dynamodb
```

## Usage

This lib is currently under work, so we can complete integrate `@techmmunity/symbiosis` and take advantage of all it's features.

It's use is exactly like described in [the first steps](../overview/first-steps).

## Examples

- [Basic example](https://github.com/techmmunity-education/symbiosis-dynamodb-example)

## Advices and alerts

### Methods NOT implemented

- `.insert()`
- `.update()`
- `.softDelete()`
- `.recover()`
- `.count()`
- `.performativeCount()`

### SaveOperators

DynamoDB only supports the following SaveOperators:

- `IfNotExists`
- `Plus`
- `Minus`
- `Append`
- `Remove`
- `Pop` (by item index)

### FindOperators

DynamoDB only supports the following FindOperators:

- `Between` (with numbers)
- `LessThan` (with numbers)
- `LessThanOrEqual` (with numbers)
- `MoreThan` (with numbers)
- `MoreThanOrEqual` (with numbers)
- `StartsWith`

### Special behavior

#### `.save()`

- Unlike others plugins, `.save()` doesn't **update** a record that already exists, but **replaces** it.
- Does **not** support SaveOperators (use `.upsert()` instead)

#### `.delete()`

- Only supports delete one record at time
- Only supports dele record by primary keys

#### `.upsert()`

- Only supports upsert one record at time
- Only supports upsert record by primary keys

#### `.find()`

- To make queries with `OR` operator, the conditions must have at least ONE property in common.
