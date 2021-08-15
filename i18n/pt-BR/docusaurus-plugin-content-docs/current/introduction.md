---
sidebar_position: 0
---

# Introdução

Compass (Techmmunity Compass) é uma [ORM](https://en.wikipedia.org/wiki/Object-relational_mapping) feita em TypeScript e inspirada na [sintaxe do TypeORM](https://github.com/typeorm/typeorm) e [abordagem plugavel do ESLint](https://eslint.org/).

Nossa intenção aqui é padronizar a conexão e o uso de **todos os bancos de dados** com a melhor performance possível, e para isso, nós utilizamos uma abordagem plugavel, com isso mais pessoas podem contribuir e criar suas próprias integrações com diferentes tipos de bancos de dados. O foco desse pacote para o usuário final, é apenas fazer a tipagem, enquanto os plugin fazem o "trabalho sujo" por debaixo dos panos.

Atualmente ele funciona apenas com Node junto de Typescript (e também tranpilado para JavaScript), e nós planejamos manter assim.

## Motivação

Nos últimos anos, mais bancos de dados foram criados, e também mais dados foram gerados, armazenados e manipulados. Para providênciar o melhor produto possível para os clientes, as empresas estão mudando ou usando vários bancos de dados ao mesmo tempo e com uma frequência cada vez mais crescente.

Para lidar com todos esses bancos de dados, os desenvolvedores devem aprender do zero, como usar o provedor sdk, como fazer consultas, como configurar o banco de dados, e muitas outras informações sem conexão com o produto ou com o sistema que estão construindo, forçando-os a perder tempo e dinheiro.

Com esses problemas em mente, nós criamos a solução: Uma ORM que pode se comunicar com **TODOS** os bancos de dados, usando a mesma sintaxe, os mesmos métodos e as mesmas configurações.

Mas como fazer isso? É impossível para um time fazer isso sozinho. E sobre a complexidade e o tamanho do pacote? Seria insano e ineficaz. Então nós escolhemos fazer uma ORM **plugavel**, nós fazemos o básico e providênciamos todo o suporte que os criadores de plugin precisam, eles então podem focar no que importa: os detalhes dos bancos de dados.

Nossa meta aqui é ser a ponte entre os usuários e os desenvolvedores de plugin, fácilitando a comunicação e o entendimento entre si. Com isso, todos ganham, e o desenvolvimento de tudo pode ser dividido e acelerado.

## Nós precisamos da sua ajuda!

Nós estamos precisando de tradutores para todos os idiomas! Se você quer ser um voluntário, por favor entre em contato conosco pelo [discord](https://discord.gg/5hPnJzzAe2)!
