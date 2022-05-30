---
sidebar_position: 10
---

# CLI

O _Thoth_ tem um pacote separado para a cli, assim seu pacote principal fica mais leve e encapsulado.

A CLI é muito útil para gerar migrações e entidades automaticamente.

## Instalação

Migrações são criadas ou geradas sando o pacote `@thothom/cli`, então antes de mais nada, nós precisamos instalar o pacote.

```sh
yarn add -D @thothom/cli
```

## Preparação

Adicione um alias para o comando `thothom`.

```json
// package.json

{
  //...
  "scripts": {
    //...
    "thothom": "thothom"
  }
}
```

Cria um arquivo `thothom.config.js` na pasta root do seu projeto, ou gere uma com o comando [`gen:config`](#genconfig).

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

As opções do `thothom.config.js` são as mesma que da classe [`Connection`](./connections#options).

```sh
yarn thothom gen:config
```

### `gen:migration`

Esse comando vai gerar todas as migrações para atualizar o seu banco de dados de acordo com o seu código.

Para usar esse comando, você precisa criar um arquivo `thothom.config.js`. Se você não tiver um, você pode gerar um em branco usando o comando [`gen:config`](#genconfig).

```sh
yarn thothom gen:migration
```

### `create:migration`

Cria uma migração vazia, então você pode escrevê-la manualmente.

```sh
yarn thothom create:migration
```
