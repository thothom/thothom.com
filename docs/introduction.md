---
sidebar_position: 1
---

# Introduction

Compass (Techmmunity Compass) is an [ORM](https://en.wikipedia.org/wiki/Object-relational_mapping) built in TypeScript and inspired on [TypeORM syntax](https://github.com/typeorm/typeorm) and [ESLint plugable approach](https://eslint.org/).

Our intention here is standardize the connection and implementation of **every database** with the best performance possible, and for this, we use an plugable approach, so more people can contribute and create their own integration. This package alone can't do anything besides typing, the plugins do all the "dirt work".

Currently it only works on Node with TypeScript (and transpiled JavaScript), and we plan to keep this way.

## Motivation

In recent years, a lot of new databases are being created and a lot more of data is being generated, stored and manipulated. To provide the more perfect product possible to their clients, the companies are changing or using multiples databases at the same time with a increasingly frequency.

To handle all this databases, the developers must learn from the scratch how to use the provided sdk, how to make queries, how to setup the database, and a bunch of information non-related to the product or to the systems that they are building, forcing then to wast precious time and money.

With these problems in mind, we come with the solution: A ORM that can communicate with **ALL** databases, using the same syntax, the same methods, and the same configuration.

But how to do this? It's impossible to only one team do this alone. And what about the complexity and the package size? It would be insanity inefficient. So we choose to make an **plugable** ORM, we handle the basics and provide all the support that the plugin creators need, so they can focus on what is really important: the database stuff.

Our goal here is to be the bridge from user to plugin-developer, making easy to then to communicate and understand each other. With this, everyone wins, and the development of everything can be spliced and accelerated.

## We need your help!

We are needing translators for all languages! If you want to be a volunteer, please contact us on the [discord](https://discord.gg/5hPnJzzAe2)!
