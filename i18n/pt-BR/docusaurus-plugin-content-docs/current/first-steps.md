---
sidebar_position: 1
---

# Primeiros passos

## Instalação

Com Yarn:

```
yarn add @techmmunity/symbiosis reflect-metadata
```

Com NPM:

```
npm i @techmmunity/symbiosis reflect-metadata
```

:::danger atenção

A instalação não acabou, você ainda precisa de um plugin!

:::

Configure o `tsconfig.json`:

```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

## Plugins

Como mencionado na introdução, o _Symb_ funciona com plugins. Você pode encontrar a lista completa dos plugins oficiais e recomendados [bem aqui](../overview/plugins), ou uma lista de todos os plugins [aqui](https://www.npmjs.com/search?q=keywords:techmmunity-symbiosis).

## Uso

### Crie sua Entidade e Tipo de Repositório

O `Repository` é importado **do plugin**, então substitua `example-symbiosis-plugin` deste exemplo com o plugin que você escolheu usar.

```ts
// example.entity.ts

import {
  Entity,
  PrimaryColumn,
  Column,
  SaveDateColumn,
} from "@techmmunity/symbiosis";
import type { Repository } from "example-symbiosis-plugin";

@Entity()
export class ExampleEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  foo: number;

  @SaveDateColumn()
  createdAt: Date;
}

export type ExampleRepository = Repository<ExampleEntity>;
```

### Criando a sua Conexão

A `Connection` é importada **do plugin**, então substitua o `example-symbiosis-plugin` deste exemplo com o plugin que você escolheu usar.

Quando estiver criando a conexão, você deve importar **todas e somente as entidades principais**, as sub-entitidades são carregadas automaticamente, e coloque-as dentro do array de opções de conexão, como neste exemplo:

```ts
// database.connection.ts

!!! ESTE É UM EXEMPLO DA SINTAXE E NÃO VAI FUNCIONAR !!!

import { Connection } from "example-symbiosis-plugin";
import { ExampleEntity } from "./example.entity";

const connection = new Connection({
  // ... Coloque as opções extras de conexão aqui
  entities: [ExampleEntity], // Todas as suas entidades devem estar aqui
  databaseConfig: {
    // A configuração para conectar ao banco de dados
  },
});

// Você sempre deve chamar um método connect!
await connection.connect();


export { connection };
```

### Criando seu Repositório

Os Repositórios são feitos de uma combinação de `connection` + `entity`, deste jeito:

```ts
// example.repository.ts

import { ExampleEntity } from "./example.entity";
import { connection } from "./database.connection";

export const exampleRepository = connection.getRepository<ExampleEntity>(ExampleEntity);

```

### Usando seu Repositório

```ts
// using.repository.ts

import { exampleRepository } from "./example.repository";

// Mais lógica aqui

exampleRepository.save(data);
exampleRepository.findOneByPrimaryKey(data);
exampleRepository.findManyByPrimaryKey(data);
// E mais um monte
```

Você pode ver uma lista completa dos métodos de um Repositório [aqui](./repositories).

## Pronto!

Este é o básico do _Symb_! Agora você está pronto pra começar a explorar e fazer seus CRUDs malucos!

:::tip Depois disso

Nós recomendamos **fortemente** que você continue lendo a documentação. O _Symb_ tem muitas funcionalidades legais que podem te poupar bastante de tempo!

:::
