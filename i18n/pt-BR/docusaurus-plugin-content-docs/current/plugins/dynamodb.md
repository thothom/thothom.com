---
sidebar_position: 1
---

# DynamoDB

O DynamoDB é o banco de dados NoSQl mais popular da AWS. É o mais escalável e tem um atrativo custo benefício.

## Installation

Com Yarn:

```
yarn add @techmmunity/symbiosis-dynamodb
```

Com NPM:

```
npm i @techmmunity/symbiosis-dynamodb
```

## Utilização

Esta biblioteca ainda está em desenvolvimento, então nós podemos integrar completamente com `@techmmunity/symbiosis` e tira vantagem de todas as atualizações.

É usada do mesmo modo que descrito em [the first steps](../overview/first-steps).

## Examplos

- [Basic example](https://github.com/techmmunity-education/symbiosis-dynamodb-example)

## Avisos e alertas

### Metodos NÃO implementados

- `.insert()`
- `.update()`
- `.softDelete()`
- `.recover()`
- `.count()`
- `.performativeCount()`

### SaveOperators

DynamoDB suporta apenas os seguintes SaveOperators:

- `IfNotExists`
- `Plus`
- `Minus`
- `Append`
- `Remove`
- `Pop` (por index do item)

### FindOperators

DynamoDB suporta apenas os seguintes FindOperators:

- `Between` (com números)
- `LessThan` (com números)
- `LessThanOrEqual` (com números)
- `MoreThan` (with números)
- `MoreThanOrEqual` (with números)
- `StartsWith`

### Comportamentos especiais

#### `.delete()`

- Apenas aceita deletar um registro por vez.
- Apenas aceita deletar uma registros recebendo a chave primária.

#### `.upsert()`

- Apenas aceita inserir um registro por vez
- Apenas aceita inserir um registro recebendo a chave primária.

#### `.find()`

- Para fazer queries com o operador `OR`, as condições devem possuir pelo menos UMA propriedade em comum.
