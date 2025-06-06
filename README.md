<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## 1. Installation Steps

### 1.1 Clone the Repository

Clone the API repository using the command below:

```bash
git clone https://github.com/matheushb/crud-rpg.git
```

Then, enter the project directory:

```bash
cd crud-rpg
```

### 1.2 Install Dependencies

```bash
npm install
```

### 1.3 Configure Environment Variables

Copy the .env.example file to a new file called .env:

```bash
cp .env.example .env
```

### 1.4 Initialize Docker

Make sure Docker is running, then run the command

```bash
docker-compose up -d
```

### 1.5 Migrate database

To apply migrations on database, execute the command:

```bash
npx prisma migrate dev
```

## 2. Starting the API

To run the API execute:

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## 3. Swagger documentation

```bash
GET /api
```

## 4. Features

### 1. Cadastrar Personagem

```bash
POST /character
```

### 2. Cadastrar Item Mágico

```bash
POST /magic-item
```

### 3. Listar Personagem

```bash
GET /character
```

### 4. Buscar Personagem por Identificador

```bash
GET /character/:id
```

### 5. Atualizar Nome Aventureiro por Identificador

```bash
PATCH /character/:id { "nickname" : "John Doe" }
```

### 6. Remover Personagem

```bash
DELETE /character/:id
```

### 7. Listar Itens Mágicos

```bash
GET /magic-item
```

### 8. Buscar Item Mágico por Identificador

```bash
GET /magic-item/:id
```

### 9. Adicionar Item Mágico ao Personagem

```bash
PATCH /magic-item/:id { "character_id" : "id" }
```

### 10. Listar Itens Mágicos por Personagem

```bash
GET /magic-item?character_id=:id
```

### 11. Remover Item Mágico do Personagem

```bash
PATCH /magic-item/:id { "character_id" : null }
```

### 12. Buscar Amuleto do Personagem

```bash
GET /magic-item?character_id=:id&type=AMULET
```
