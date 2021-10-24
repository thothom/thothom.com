---
sidebar_position: 100
---

# Limitations And Warnings

As all that exists, symbiosis is too good to be perfect. It has it's limitations and some warns that we have to alert you.

## Limitations

- You cannot have two class entities with the same name, or it will cause malfunctioning

## Warnings

- It's **NOT** our focus to ensure that this is a lightweight lib, so if it's necessary, we will add more things that increase the package size, **BUT** we will try our best to keep the size smallest as possible
- The data used to identify the entities are **stored in memory**, so be careful to not have a memory overload (More entities = More memory required), but relax, it's not that much, you can safely have dozens of entities with no significantly memory usage increase. This package is designed to work with micro-services and serverless applications, so you will only have trouble if you use it in a monolithic application.
