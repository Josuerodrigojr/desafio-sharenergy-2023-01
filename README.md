<h1 align="center">Desafio Sharenergy</h1>

# Frontend

O objeto tem como intuito a verificação dos conhecimentos teóricos e prático dos participantes. Sendo solicitação uma API de ponta a ponta. 

## Primeira página

<p>A primeira página é somente o login do usuário, podendo fazer de duas formas. Utilizando o email (userName) e a senha. Ou podendo acessar somente com o número do CPF.</p>

## Segunda página

<p>A segunda página é a solicitação da api RandomUsers, em que, o usuário pode fazer a pesquisa por email, username ou nome. Tendo que digitar no campo de busca e apertando a tecla enter.</p>

## Terceira página

<p>A página dos gatos, é voltado a imagem quando o usuário digitar o http na caixa de texto. Caso o http não exista, é direcionado para uma página de erro.</p>

## Quarta página
<p>A página dos cachorros, é mostrado uma imagem de algum cachorro, sempre que o usuário clicar em atualizar.</p>

## Quinta página

<p>A última página, mostra todos os usuários que estão cadastrados no banco de dados.</p>

# Backend

<p>Para a conexão com o banco de dados foi utilizado o mongoose. Para gerenciar as requisições foi utilizado o express.</p>

## Pasta utils

<p>Na pasta utils, é visto o hash, utilizado para a criptografia da senha no registro e na solicitação para ver os dados do usuário</p>

## Arquivo routes.ts

<p>Apresenta todas as rotas da aplicação no backend, tendo como destino o arquivo controller. Apresenta duas rotas get, três post, uma delete e uma patch.</p>

<p>Nas rotas get, temos uma para visualizar todos os usuários e outra para verificar as informações de um usuário utilizando somento o id.</p>

<p>Nas rotas post, temos uma para criação do usuário na aplicação, outra para a verificação do login e senha e a última para o login utilizando somente o cpf.</p>

<p>Na rota delete, podemos deletar usando como busca somente o id do usuário.</p>


<p>Na rota patch, podemos alterar todas as informações do usuário, usando somente o id.</p>

## Pasta controller

<p>Na controller é obtida os dados do corpo da requisição ou do parâmetro e feito uma solicitação para a service e retorna para o usuário o status e a resposta obtida.</p>

## Pasta service

<p>Na service é solicitado para o repository e feito o tratamento de erro, verificando se o usuário já está cadastrado no sistema, se o login e a senha são compativéis para o login do usuário, entre outros.</p>

## Pasta repository

<p>Responsável pela solicitação das informações ao banco de dados e retornar para a service.</p>






# Tecnologias
<p display="inline-block" align="center">
  <img width="48" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="express-logo" />
  <img width="48" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="mongodb-logo" />
    <img width="48" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="typescript-logo" />
  <img width="48" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react-logo" />
    <img width="48" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="node-logo" />
  <img width="48" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="html-logo" />
    <img width="48" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="css-logo" />

</p>
                                                                                                  
# Ferramenta de desenvolvimento

<p display="inline-block" align="center">
  <img width="48" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" alt="vscode-logo"/>
   <img width="48" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png" alt="postman-logo"/>
</p>

# Funcionamento
## Backend:

### Pacotes

``` 
npm init 

``` 

### Funcionamento da aplicação


``` 
npm run dev 

``` 

## Frontend:

### Pacotes


``` 
npm init 

``` 

### Funcionamento da aplicação


``` 
npm start 

``` 

## Video do youtube

[Desafio - Sharenergy](https://youtu.be/c5_FwE_MTKI)



## Referências
[Utilização do mongoose](https://blog.debugeverything.com/pt/como-usar-mongodb-com-node-js/)

[Configurando o react com typescript](https://medium.com/@willmorimm/criando-um-projeto-web-com-reactjs-e-typescript-10b3604e2c33)

[Configuração das rotas no frontend](https://blog.webdevsimplified.com/2022-07/react-router/)

[Cards nas páginas do frontend](https://mui.com/material-ui/react-card/)

[Páginação](https://www.freecodecamp.org/portuguese/news/como-criar-uma-paginacao-personalizada-em-react/)
