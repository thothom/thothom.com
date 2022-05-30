---
sidebar_position: 1
---

# DynamoDB

O DynamoDB é o banco de dados NoSQl mais popular da AWS, sendo muito escalável e tendo um custo benefício atrativo.

## Installation

Com Yarn:

```
yarn add @thothom/dynamodb
```

Com NPM:

```
npm i @thothom/dynamodb
```

## Utilização

Esta biblioteca ainda está em desenvolvimento, para que possamos integrar completamente com `@thothom/core` e tirar aproveitar todas as suas funcionalidades.

É usada do mesmo modo que descrito [nos primeiros passos](../overview/first-steps).

## Examplos

- [Exemplo básico](https://github.com/thothom/example-dynamodb)

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
- `MoreThan` (com números)
- `MoreThanOrEqual` (com números)
- `StartsWith`

### Comportamentos especiais

#### `.delete()`

- Aceita deletar apenas um registro por vez.
- Aceita deletar registros recebendo apenas a chave primária.

#### `.upsert()`

- Aceita inserir apenas um registro por vez
- Aceita inserir registros recebendo apenas a chave primária.

#### `.find()`

- Para fazer queries com o operador `OR`, as condições devem possuir pelo menos UMA propriedade em comum.
