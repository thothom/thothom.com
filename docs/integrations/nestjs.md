---
sidebar_position: 1
---

# NestJs

_Symb_ has a integration with NestJs, so you can work with the framework without worry about the integration with the database.

## Installation

With Yarn:

```
yarn add @techmmunity/symbiosis-nestjs
```

With NPM:

```
npm i @techmmunity/symbiosis-nestjs
```

## Usage (example with DynamoDB)

Regardless the integration syntax, it works exactly as the normal _Symb_, so you can use the repositories as always, and the parameters will receive the same values as always.

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
    SymbiosisModule.forRoot<DynamoDbConnectionOptions>({
      class: Connection,
      options: {
        // ...
        entities: [UserEntity],
        databaseConfig: {
          // ...
        },
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

The `SymbiosisModule` is the main connection between NestJs and _Symb_. It has 2 methods that allow you to integrate the symbiosis in the most performative way possible.

### `.forRoot()`

The `.forRoot()` method should be used at your main Module (like `AppModule`). It will link you code with the database.

The method receive two parameters, the first one is the class that you want to use to connect to the database (the one you import from the plugin), and the second one is the connection config.

At this config, you must specify **all** of your entities.

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
    SymbiosisModule.forRoot<DynamoDbConnectionOptions>({
      class: Connection,
      options: {
        // ...
        entities: [UserEntity],
        databaseConfig: {
          // ...
        },
      },
    }),
  ],
})
export class AppModule {}
```

### `.forFeature()`

The `.forFeature()` method should be used at your domain Module (like `UserModule`). It will load and inject all the repositories that you will need.

The method receive two parameters, the first one is an array of entities (only the ones that you need in this Module), and the second one (optional) is the connection name.

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

Injects a repository.

Receives the entity as first parameter and optionally the connection name as second parameter. If no connection name is passed, will get the default connection.

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

Injects a connection.

Receives the connection name as optional parameter. If no connection name is passed, will get the default connection.

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

## Extra Usage Examples

### Multiple Connections

```ts
// app.module.ts

import { Module } from "@nestjs/common";
import { SymbiosisModule } from "@techmmunity/symbiosis-nestjs";
import {
  Connection: DynamoDbConnection,
  DynamoDbConnectionOptions,
} from "@techmmunity/symbiosis-dynamodb";
import {
  Connection: MongodbConnection,
  MongodbConnectionOptions,
} from "@techmmunity/symbiosis-mongodb";

import { UserEntity } from "./user.entity";

@Module({
  imports: [
    SymbiosisModule.forRoot<DynamoDbConnectionOptions | MongodbConnectionOptions>([
      {
        class: DynamoDbConnection,
        options: {
          name: "dynamo"
          entities: [UserEntity],
          databaseConfig: {
            // ...
          },
        }
      } as DynamoDbConnectionOptions, // To get the correct types
      {
        class: MongodbConnection,
        options: {
          name: "mongo"
          entities: [UserEntity],
          databaseConfig: {
            // ...
          },
        }
      } as MongodbConnectionOptions, // To get the correct types
    ]),
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
  imports: [SymbiosisModule.forFeature([UserEntity], "dynamo")],
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
    @InjectRepository(UserEntity, "dynamo")
    private userRepository: Repository<UserEntity>,
    @InjectConnection("dynamo")
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
