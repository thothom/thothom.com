---
sidebar_position: 2
---

# MongoDB

MongoDB is the most popular NoSQL database. It is very flexible with it's queries, and allow you to do almost anything.

## Installation

With Yarn:

```
yarn add @techmmunity/symbiosis-mongodb
```

With NPM:

```
npm i @techmmunity/symbiosis-mongodb
```

## Usage

This lib is currently under work, so we can complete integrate `@techmmunity/symbiosis` and take advantage of all it's features.

It's use is exactly like described in [the first steps](../overview/first-steps).

## Examples

- [Basic example](https://github.com/techmmunity-examples/symbiosis-mongodb)

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

### Special behavior

#### `Pop`

- Only works using values `-1` (first item) or `1` (last item).
