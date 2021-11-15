---
sidebar_position: 1
---

# First Steps

:::info We are here for you 🤗

First of all, we want you to know that we are here to support you in the development of your plugin, so any question that you have, don't hesitate to contact us at the [discord](https://discord.gg/TakYksUzzZ).

:::

## Basic integration

### Creating the repository

The first step to create your own plugin, is create a project using the [template for plugins](https://github.com/techmmunity/base-project-symbiosis-plugin) that we provide. We try to keep this project always updated.

### Configuring the repository

Replace all the mock names and links for the names and links of your plugin. Here are some of they:

<div align="center">

![Things to replace](/img/config-repo-plugin.png)

</div>

We also recommend change the content of `CONTRIBUTING.md` and `package.json`, so we don't take the credit for your work.

### Configuring the packages

Now, you need to install the libraries provided by the database that you are implementing. An example is `mongodb` for MongoDB, or `@aws-sdk/client-dynamodb` for DynamoDB.

These libs **must be installed as normal dependencies**, so the final user don't have to install then.

### Configuring the `Connection`

The connection is defined at `src/lib/connection/index.ts`. You can follow the guide in the file, and use [one of our plugins](https://github.com/techmmunity/symbiosis-dynamodb/blob/master/src/lib/connection/index.ts) as example.

:::danger

We extremely recommend that you keep the names `Repository` and `Connection` for the classes.

:::

### Configuring the `Repository`

The repository is defined at `src/lib/repository/index.ts`. You can follow the guide in the file, and use [one of our plugins](https://github.com/techmmunity/symbiosis-mongodb/blob/master/src/lib/repository/index.ts) as example.

:::danger

We extremely recommend that you keep the names `Repository` and `Connection` for the classes.

:::

#### Some tips for you:

- You **always** must call `this.before*` to get the parameters formatted, or also you will have to format they manually.
- You **always** must return `this.after*` to return the result formatted, or also you will have to format they manually.
- You can get the **entity** for the repository instance using `this.entity`, and can use `this.entityManager` to get the entity metadata (to get the **primary columns**, the **indexes** or the **extra metadata**).

## Advanced Features

To know more about advanced features, you will have to study about `@techmmunity/symbiosis` core, please read about it at [the first steps](../contributing/first-steps).
