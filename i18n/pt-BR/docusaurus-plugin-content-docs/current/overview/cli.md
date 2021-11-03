---
sidebar_position: 10
---

# CLI

O _Symb_ tem um pacote separado, o CLI, então o pacote principal é mais leve e encapsulável.

O CLI é muito útil para gerar migrações e entidades automaticamente.

## Instalação

Migrações são criadas ou geradas sando o pacote `@techmmunity/symbiosis-cli`, então antes de mais nada, nós precisamos instalar o pacote.

```sh
yarn add -D @techmmunity/symbiosis-cli
```

## Preparação

Adicione um alias para o comando `symb`.

```json
// package.json

{
  //...
  "scripts": {
    //...
    "symb": "symb"
  }
}
```

Cria um arquivo `symbiosis.config.js` na pasta root do seu projeto, ou gere uma com o comando [`gen:config`](#genconfig).

```js
module.exports = {
  migrationsDir: "migrations/dir",
  entitiesDir: ["entities/**/dir/*.ts"],
  databaseConfig: {
    // ...
  },
};
```

## Comandos

### `gen:config`

Automáticamente gera um arquivo de configuração na pasta root do seu aplicativo.

As opções do `symbiosis.config.js` são as mesma que da classe [`Connection`](./connections#options).

```sh
yarn symb gen:config
```

### `gen:migration`

Esse comando vai gerar todas as migrações para atualizar o seu banco de dados de acordo com o seu código.

Para usar esse comando, você precisa criar um arquivo `symbiosis.config.js`. Se você não tiver um, você pode gerar um em branco usando o comando [`gen:config`](#genconfig).

```sh
yarn symb gen:migration
```

### `create:migration`

Cria uma migração vazia, então você pode escrevê-la manualmente.

```sh
yarn symb create:migration
```
