# ReactJS - Desafio 3

[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/osvaldokalvaitir/reactjs-desafio3/blob/master/LICENSE)
![](https://img.shields.io/github/package-json/v/osvaldokalvaitir/reactjs-desafio3.svg)
![](https://img.shields.io/github/last-commit/osvaldokalvaitir/reactjs-desafio3.svg?color=red)
![](https://img.shields.io/github/languages/top/osvaldokalvaitir/reactjs-desafio3.svg?color=yellow)
![](https://img.shields.io/github/languages/count/osvaldokalvaitir/reactjs-desafio3.svg?color=lightgrey)
![](https://img.shields.io/github/languages/code-size/osvaldokalvaitir/reactjs-desafio3.svg)
![](https://img.shields.io/github/repo-size/osvaldokalvaitir/reactjs-desafio3.svg?color=blueviolet)
[![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)](https://code.visualstudio.com/)
![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)

Aplicação usando Redux, Redux-Saga, Ducks, React Router, react-map-gl, react-modal, react-toastify, Reactotron e Mapbox.

## Desafio 3

Configure uma estrutura com create-react-app. Além disso, utilize as ferramentas ESLint, EditorConfig e Prettier durante o desenvolvimento desse projeto.

Neste desafio você vai construir uma aplicação utilizando a biblioteca React Map GL da Uber. A aplicação se trata de um repositório de localização de desenvolvedores. O usuário poderá adicionar desenvolvedores ao mapa clicando sobre o mesmo e informando o username do Github do desenvolvedor, dessa forma, a aplicação irá captar os dados do dev via API e salvá-lo no estado do Redux.

### Utilize o seguinte layout na aplicação:

![Listagem](/assets/listagem.png)

![New](/assets/new.png)

Veja que na esquerda temos uma lista dos usuários cadastrados enquanto que no mapa temos os avatares do usuário indicando sua posição no mapa.

### Ponto de partida

Para você se basear para utilização do mapa e controle do clique deixei um projeto para você utilizar como exemplo: https://github.com/Rocketseat/goreact-exemplo-mapbox. Nesse projeto utilizamos a biblioteca [MapBox](http://mapbox.com/) para renderizar o mapa, **talvez seja necessário você criar uma conta gratuita** para obter um **access token**.

### Fluxo

1. O usuário acessa a aplicação;
2. O usuário clica sobre o mapa para adicionar um novo usuário à posição clicada;
3. Um modal abre sobre a tela com um único campo, o username do Github;
4. A aplicação busca informações como nome e avatar do usuário da API do Github e salva o usuário no store do Redux;
5. O usuário adicionado agora aparece no mapa e na lista lateral;
6. Caso o usuário digitado no input for inválido uma mensagem deve ser retornada, assim como se tudo ocorrer bem deve ser retornada uma mensagem de sucesso (você pode utilizar a lib https://github.com/fkhadra/react-toastify);
7. Deve ser possível excluir usuários da listagem clicando sobre o “x” na sidebar;

### Exemplo de URL da API

Usuário: http://api.github.com/users/diego3g

## Índice

- [Capturas de Tela](#capturas-de-tela)

  - [Principal](#principal)

  - [Novo Usuário](#novo-usuário)

- [Desenvolvimento](#desenvolvimento)

  - [Configurações Iniciais](#configurações-iniciais)

  - [Instalação do Projeto](#instalação-do-projeto)

  - [Execução do Projeto](#execução-do-projeto)

- [Utilizados no Projeto](#utilizados-no-projeto)

  - [Bibliotecas](#bibliotecas)
  
  - [APIs](#apis)

  - [Ferramentas](#ferramentas)

## Capturas de Tela

### Principal

![Main](/assets/main.png)
Nesta tela, encontra-se um mapa com todos os usuários do GitHub que foi adicionado pelo usuário, podendo também, adicionar novos usuários ou remover algum usuário da lista lateral esquerda.

### Novo Usuário

![New](/assets/new2.png)
Esta tela é responsável por adicionar um usuário que esteja cadastrado no GitHub, sendo obrigatório informar o nome para inserí-lo.

## Desenvolvimento

### Configurações Iniciais

Clique [aqui](https://github.com/osvaldokalvaitir/projects-settings/blob/master/README.md) e siga as Configurações Iniciais.

### Instalação do Projeto

Clique [aqui](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/nodejs.md) e siga a Instalação de Projeto.

### Execução do Projeto

Clique [aqui](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/nodejs.md) e siga a Execução de Projeto.

## Utilizados no Projeto

### Bibliotecas

- [Axios](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/axios.md)

- [Create React App](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/create-react-app.md)

- [dotenv](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/dotenv.md)

- [Ducks](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/ducks.md)

- [eslint-config-airbnb](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/eslint-config-airbnb.md)

- [eslint-plugin-import](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/eslint-plugin-import.md)

- [eslint-plugin-jsx-a11y](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/eslint-plugin-jsx-a11y.md)

- [eslint-plugin-react](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/eslint-plugin-react.md)

- [Font Awesome](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/font-awesome.md)

- [prop-types](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/prop-types.md)

- [React Redux](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-redux.md)

- [react-map-gl](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-map-gl.md)

- [react-modal](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-modal.md)

- [react-router-dom](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-router-dom.md)

- [react-toastify](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-toastify.md)

- [reactotron-react-js](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/reactotron-react-js.md)

- [reactotron-redux](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/reactotron-redux.md)

- [reactotron-redux-saga](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/reactotron-redux-saga.md)

- [Redux](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/redux.md)

- [Redux-Saga](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/redux-saga.md)

### APIs

- **[GitHub](https://api.github.com)**

  - **Rotas**

    - Usuários

      - Busca dados de um usuário do GitHub

### Ferramentas

- [Mapbox](https://github.com/osvaldokalvaitir/projects-settings/blob/master/map/mapbox.md)

- [Reactotron](https://github.com/osvaldokalvaitir/projects-settings/blob/master/inspector/reactotron.md)
