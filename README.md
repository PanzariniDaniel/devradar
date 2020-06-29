<h1 align="center">
    DevRadar
</h1>

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-usar">Como Usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)

## 💻 Projeto

Projeto resultado da Semana Omnistack #10 <br>
DevRadar é um projeto que visa facilitar a busca por desenvolvedores que residem próximo a você.


## :fire: Como usar

- ### **Pré-requisitos**

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)**
  - É **necessário** possuir o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.
  - É **necessário** possuir o **[Expo](https://expo.io/)**

1. Faça um clone :

```sh
  $ git clone https://github.com/PanzariniDaniel/devradar.git
```

2. Executando a Aplicação:

- ## Server

  - É necessário criar um arquivo na raiz do projeto chamado .env, o conteudo do arquivo deve conter a MONGO_CONN que é a string de conexão com o cluster do **[MongoDB Atlas](https://www.mongodb.com/)** e também a PORT que é a porta que será usada. Exemplo de conteúdo do .env:

  ```sh
    MONGO_CONN=Minha string de conexão
    PORT=3333
  ```  

```sh
  # Instale as dependências
  $ cd server
  $ npm install / yarn install

  # Inicie a API
  $ npm run dev / yarn dev
```

- ## Web
```sh
  # Instale as dependências
  $ cd web
  $ npm install / yarn install

  # Inicie  o projeto web
  $ npm start / yarn start
```

- ## Mobile
```sh
  # Instale as dependências
  $ cd mobile
  $ npm install / yarn install

  # Inicie  o projeto mobile
  $ npm start / yarn start
```

## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---
