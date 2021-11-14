---
sidebar_position: 1
---

# NestJs

O _Symb_ faz integração com NestJS, então você pode trabalhar com o framework sem se preocupar com a ligação com o banco de dados.

## Instalação

Com Yarn:

```
yarn add @techmmunity/symbiosis-nestjs
```

Com NPM:

```
npm i @techmmunity/symbiosis-nestjs
```

## Como usar (exemplo com DynamoDB)

O _Symb_ vai funcionar normalmente, com a unica exceção sendo a integração com o Nest, então você vai poder usar os repositórios como sempre, e os parâmetros recebidos serão os mesmos valores de sempre.

```ts
// app.module.ts

import { Module } from "@nestjs/common";
import { SymbiosisModule } from "@techmmunity/symbiosis-nestjs";
import {
  Connection,
  DynamoDbConnectionOptions,
} from "@techmmunity/symbiosis-dynamodb";

import { UserEntity } from "./user.entity";

@Module({
  imports: [
    SymbiosisModule.forRoot<DynamoDbConnectionOptions>(Connection, {
      // ...
      entities: [UserEntity],
      databaseConfig: {
        // ...
      },
    }),
  ],
})
export class AppModule {}
```

```ts
// user.module.ts

import { Module } from "@nestjs/common";
import { SymbiosisModule } from "@techmmunity/symbiosis-nestjs";

import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { UserEntity } from "./user.entity";

@Module({
  imports: [SymbiosisModule.forFeature([UserEntity])],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
```

```ts
// user.service.ts

import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@techmmunity/symbiosis-nestjs";
import { Repository, Connection } from "@techmmunity/symbiosis-dynamodb";

import { UserEntity } from "./user.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @InjectConnection()
    private connection: Connection
  ) {}

  findOne(id: string): Promise<User> {
    return this.userRepository.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: string): Promise<void> {
    await this.userRepository.delete({
      id,
    });
  }
}
```

## `SymbiosisModule`

O `SymbiosisModule` é a conexão principal entre NestJs e o _Symb_. Ele possui dois métodos que te permitem fazer a integração com o Symbiosis da maneira mais performática possível.

### `.forRoot()`

O método `.forRoot()` deve ser usado no seu Module principal (como `AppModule`). Isso permite você linkar o seu código com o banco de dados.

O método recebe dois parâmetros, o primeiro é a classe que você quer usar para conectar ao banco de dados (aquela que você importa do plugin), e o segundo é a configuração da conexão.

Nessa configuração, você deve especificar **todas** as suas entidades.

```ts
// app.module.ts

import { Module } from "@nestjs/common";
import { SymbiosisModule } from "@techmmunity/symbiosis-nestjs";
import {
  Connection,
  DynamoDbConnectionOptions,
} from "@techmmunity/symbiosis-dynamodb";

import { UserEntity } from "./user.entity";

@Module({
  imports: [
    SymbiosisModule.forRoot<DynamoDbConnectionOptions>(Connection, {
      // ...
      entities: [UserEntity],
      databaseConfig: {
        // ...
      },
    }),
  ],
})
export class AppModule {}
```

### `.forFeature()`

O método `.forFeature()` deve ser usado no seu Modulo de domínio (como `UserModule`). Isso vai carregar e injetar todos os repositórios que você irá usar nesse dominio.

O método recebe dois parâmetros, o primeiro é um array de entidades (apenas aquelas que você vai precisa nesse Modulo), e a segunda (opcional) é o nome da conexão.

```ts
// user.module.ts

import { Module } from "@nestjs/common";
import { SymbiosisModule } from "@techmmunity/symbiosis-nestjs";

import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { UserEntity } from "./user.entity";

@Module({
  imports: [SymbiosisModule.forFeature([UserEntity])],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
```

## Decorators

### `@InjectRepository()`

Injeta um repositório.

Recebe a entidade como primeiro parâmetro e opcionalmente o nome da conexão como segundo parâmetro. Se nenhum nome de conexão for passado, usará a conexão padrão.

```ts
// user.service.ts

import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@techmmunity/symbiosis-nestjs";
import { Repository } from "@techmmunity/symbiosis-dynamodb";

import { UserEntity } from "./user.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity, "connection_x")
    private userRepository: Repository<UserEntity>
  ) {}
}
```

### `@InjectConnection()`

Injeta uma conexão.

Recebe o nome da conexão como parâmetro opcional. Se nenhum nome de conexão for passado, usará a conexão padrão.

```ts
// user.service.ts

import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@techmmunity/symbiosis-nestjs";
import { Repository } from "@techmmunity/symbiosis-dynamodb";

import { UserEntity } from "./user.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity, "connection_x")
    private userRepository: Repository<UserEntity>
  ) {}
}
```
