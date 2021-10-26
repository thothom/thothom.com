---
sidebar_position: 0
---

# Introduction

Techmmunity Symbiosis _(or Symb, for the close friends)_ is an **Object Mapper** ([ORM + ODM](https://medium.com/spidernitt/orm-and-odm-a-brief-introduction-369046ec57eb)), built in TypeScript and inspired on [TypeORM syntax](https://github.com/typeorm/typeorm) and [ESLint plugable approach](https://eslint.org/).

Our intention here is standardize the connection and implementation of **every database** with the best performance possible, and for this, we use an plugable approach, so more people can contribute and create their own integration. This package alone can't do much, the plugins do the work of connect and handle the database.

Currently it only works on Node with TypeScript (and transpiled JavaScript), and we plan to keep this way.

## Motivation

In recent years, a lot of new databases are being created and a lot more of data is being generated, stored and manipulated. To provide the more perfect product possible to their clients, the companies are changing or using multiples databases at the same time with a increasingly frequency.

To handle all this databases, the developers must learn from the scratch how to use the provided SDK, how to make queries, how to setup the database, and a bunch of information non-related to the product or to the systems that they are building, forcing then to wast precious time and money.

With these problems in mind, we come with the solution: A OM that can communicate with **ALL** databases, using the same syntax, the same methods, and the same configuration.

But how to do this? It's impossible to only one team do this alone. And what about the complexity and the package size? It would be insanely inefficient. So we choose to make an **plugable** OM, we handle the basics and provide all the support that the plugin creators need, so they can focus on what is really important: the database stuff.

Our goal here is to be the bridge from user to plugin-developer, making easy to then to communicate and understand each other. With this, everyone wins, and the development of everything can be spliced and accelerated.

## Goal

- Easy to use
- Easy to code plugins
- Well documented
- Focus on microservices and serverless applications
- Extremely specific features are not supported, but a large enough number of features that will do the job for 90% of the projects.

## We need your help!

We are needing translators for all languages! If you want to be a volunteer, please contact us on the [Discord](https://discord.gg/5hPnJzzAe2) or create a [pull request](https://github.com/techmmunity/symbiosis.techmmunity.com)!
