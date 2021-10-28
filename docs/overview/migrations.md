---
sidebar_position: 9
---

# Migrations

Migrations are used to prepare your database to handle your code operations.

You cannot perform a `fooRepository.save()` operation if the `foo` table don't exists, so you need to create your table BEFORE the operation.

With migrations, you can prepare your database, create the tables, the columns, the indexes, the enums, and everything that it needs before start your application.

## Generation or creating your migrations

### Create

To create the migration manually, you can use the [`create:migration`](./cli#createmigration) command of the [CLI](./cli).

### Generate

To automatically generate your migration, you can use the [`gen:migration`](./cli#genmigration) command of the [CLI](./cli).

## Example Migration

```ts
/**
 * Migration 1635290056331-UserEntity
 *
 * UserEntity Migration
 *
 * @plugin @techmmunity/symbiosis-dynamodb
 * @symbVersion 0.0.21
 */
import { BaseMigration, BaseQueryRunner } from "@techmmunity/symbiosis-cli";

export class Migration implements BaseMigration {
  public code = "1635290056331-UserEntity";

  public description = "UserEntity Migration";

  public async up(queryRunner: BaseQueryRunner) {
    queryRunner.createEntity({
      databaseName: "user",
    });
    queryRunner.createColumn({
      entityDatabaseName: "user",
      columnDatabaseName: "id",
      primary: true,
      type: "string",
    });
    queryRunner.createColumn({
      entityDatabaseName: "user",
      columnDatabaseName: "username",
      type: "string",
    });
    queryRunner.createColumn({
      entityDatabaseName: "user",
      columnDatabaseName: "createdAt",
      comment: "ISO Date",
      type: "string",
    });
    queryRunner.createColumn({
      entityDatabaseName: "user",
      columnDatabaseName: "updatedAt",
      comment: "ISO Date",
      type: "string",
    });
    queryRunner.createIndex({
      entityDatabaseName: "user",
      indexDatabaseName: "username_index",
      columnsDatabaseNames: ["username"],
    });

    await queryRunner.run();
  }

  public async down(queryRunner: BaseQueryRunner) {}
}
```
