# DESAFIO TECNICO BLITZ DE CARREIRA!

<br/>


## Descricao do Projeto

Desenvolvimento de um CRUD de uma aplicação Frontend e Backend para organização de tarefas diárias utilizando a stack: React, NodeJS, Express e MySql, atendendo aos requisitos e funcionalidades elencadas neste documento.

<br/>

## Tecnologias utilizadas

- Docker;
- NodeJs;
- Express;
- MySql;
- JsonWebToken;
- Eslint;
- React;
- MUI;
- Heroku: Deploy.

<br/>


## Orientações Gerais

<br/>

- Para este projeto você precisa ter o MySql disponível.

<br/>


## Clone o repositorio

<br/>

- Clone o repositorio utilizando o seguinte comando no seu terminal:

`git clone git@github.com:Ro-padoin/desafio-tecnico-ebytr-blitz.git`

<br/>

- Entre na pasta do repositório que você acabou de clonar:
`cd desafio-tecnico-ebytr-blitz.git`

<br/>


## Instale as dependências

<br/>

Este projeto possui duas pastas:

- client: desenvolvimento Frontend e,

 - server: desenvolvimento Backend. 

Para instalar as dependencias necessárias para executar a aplicação, você precisará acessar cada pasta e rodar o comando abaixo em cada uma delas:

`npm install`

<br/>


## Crie um arquivo de variaveis de ambientes

<br/>

Em cada pasta há um arquivo chamado `.env.example`, renomeie para `.env` e preencha com os seus dados.

<br/>


## Execute a aplicação Frontend e rode o servidor Backend

<br/>

Para executar a aplicação no Frontend:

`npm start`


Para rodar o servidor Backend:

`npm run dev`

<br/>


## Rode os testes

<br/>

Para executar os testes é necessário executar o comando abaixo em cada uma das pastas:

`npm test`

Para verificar a cobertura de testes, estando disponivel somente em Backend, execute o comando abaixo na pasta server:

OBS: importante salientar que os  testes devem ser rodados com o servidor rodando.

`npm run test:coverage`

<br/>


## Deploy da aplicação

<br/>

Foi utilizado o Heroku para realizar o deploy desta aplicação. Há um servidor para o Banco de Dados, um para o Frontend e outro para o Backend. 

A aplicação pode ser acessada no link abaixo:
[Link Aplicação.](https://blitz-ebytr-frontend.herokuapp.com/)

Após o deploy feito, a cada alteração faz-se necessário executar a sequencia de comandos: git add . | git commit -m "texto commit" | git push heroku "sua_branch":"branch_heroku" (geralmente será git push heroku main:main).

OBS: o Heroku utilizado para este projeto pertence a minha conta pessoal, e com isso não é possível a realização de deploys de terceiros. 

<br/>


## Requisitos

<br/>

### 1 - Front-End em React

---

### 2 - Back-End em NodeJS, com MySQL

---

### 3 - Arquitetura em camadas

---

<br/>


## Funcionalidades

<br/>

### 1 - Visualizar a lista de tarefas

---

### 2 - Inserir uma nova tarefa na lista

---

### 3 - Atualizar uma tarefa da lista

---

### 4 - Remover uma tarefa da lista

---

### 5 - Status editável: pendente, em andamento ou concluído - não finalizado

---

### 6 - deve ser ordenável por ordem alfabética, data de criação ou por status - não finalizado.

---
