import BillSplitter_1 from '../src/images/projects/BillSplitter/BillSplitter_1.png'
import Calculator_1 from '../src/images/projects/Calculator/Calculator_1.png'
import QRCode_1 from '../src/images/projects/QRCode/QRCode_1.png'
import ToDo_1 from '../src/images/projects/ToDo/ToDo_1.png'
import ToDo_2 from '../src/images/projects/ToDo/ToDo_2.png'
import ToDo_3 from '../src/images/projects/ToDo/ToDo_3.png'
import Movies_1 from '../src/images/projects/Movies/Movies_1.png'
import Movies_2 from '../src/images/projects/Movies/Movies_2.png'
import Movies_3 from '../src/images/projects/Movies/Movies_3.png'
import Movies_4 from '../src/images/projects/Movies/Movies_4.png'
import Password_1 from '../src/images/projects/Password/Password_1.png'
import Password_2 from '../src/images/projects/Password/Password_2.png'
import Password_3 from '../src/images/projects/Password/Password_3.png'
import Password_4 from '../src/images/projects/Password/Password_4.png'
import Pokedex_1 from '../src/images/projects/Pokedex/Pokedex_1.png'
import Pokedex_2 from '../src/images/projects/Pokedex/Pokedex_2.png'
import Pokedex_3 from '../src/images/projects/Pokedex/Pokedex_3.png'
import Pokedex_4 from '../src/images/projects/Pokedex/Pokedex_4.png'
import Pokedex_5 from '../src/images/projects/Pokedex/Pokedex_5.png'
import Github_1 from '../src/images/projects/Github/Github_1.png'
import Github_2 from '../src/images/projects/Github/Github_2.png'
import SignInComponent_1 from '../src/images/projects/SignInComponent/SignInComponent_1.png'
import SignInComponent_2 from '../src/images/projects/SignInComponent/SignInComponent_2.png'
// import SignInComponent_3 from '../src/images/projects/SignInComponent/SignInComponent_3.png'
import SignInComponent_4 from '../src/images/projects/SignInComponent/SignInComponent_4.png'
import SignInComponent_5 from '../src/images/projects/SignInComponent/SignInComponent_5.png'
import SignInComponent_6 from '../src/images/projects/SignInComponent/SignInComponent_6.png'
import SignInComponent_7 from '../src/images/projects/SignInComponent/SignInComponent_7.png'

export const projects = [
    {
        id: 1,
        src: [ToDo_1, ToDo_2, ToDo_3],
        title: 'To Do List',
        description: 'To Do List é uma aplicação de gerenciamento de tarefas desenvolvida em React com TypeScript, proporcionando uma interface intuitiva e dinâmica para organizar suas atividades diárias. O projeto implementa funcionalidades essenciais como adicionar, editar e excluir tarefas, além de marcar itens como concluídos. Com o uso de TypeScript, a aplicação oferece uma tipagem forte, garantindo maior segurança e escalabilidade no desenvolvimento. A aplicação também faz uso do localStorage para salvar as tarefas, permitindo que elas persistam mesmo após o fechamento do navegador.',
        page: 'https://pedromarcelino7.github.io/ToDoTypescript',
        technologies: ['React', 'TypeScript', 'CRUD', 'HTML5', 'CSS3']
    },
    {
        id: 2,
        src: [QRCode_1],
        title: 'QR Code Generator',
        description: 'Este projeto é um gerador de QR Code desenvolvido em ReactJS, utilizando a biblioteca QRious para criar códigos QR personalizados. Originalmente criado com VUE, o projeto foi migrado para ReactJS para melhorar a experiência de desenvolvimento e explorar as capacidades do React. O gerador permite a criação rápida e fácil de QR Codes.',
        page: 'https://pedromarcelino7.github.io/QRCodeGenerator',
        technologies: ['React', 'JavaScript', 'QRious', 'Vue', 'HTML5', 'CSS3']
    },
    {
        id: 3,
        src: [BillSplitter_1],
        title: 'Bill Splitter',
        description: 'Este projeto é um aplicativo de divisão de contas desenvolvido em ReactJS, projetado para facilitar o cálculo e a distribuição de despesas entre várias pessoas. Com uma interface intuitiva, o Bill Splitter permite que os usuários insiram os valores das despesas, definam quantas pessoas irão compartilhar o custo e dividam o valor total de maneira justa. O projeto combina a flexibilidade do JavaScript com o poder do React para criar uma solução ágil e eficiente, ideal para situações sociais ou eventos onde a divisão de despesas é necessária.',
        page: 'https://pedromarcelino7.github.io/BillSplitter',
        technologies: ['React', 'JavaScript', 'HTML5', 'CSS3']
    },
    {
        id: 4,
        src: [Calculator_1],
        title: 'Calculator',
        description: 'Uma calculadora simples e interativa desenvolvida em TypeScript, que realiza operações matemáticas básicas com precisão. Aproveita a tipagem forte do TypeScript para garantir uma experiência de uso robusta, sendo ideal para integrar em aplicações web que necessitam de cálculos confiáveis.',
        page: 'https://pedromarcelino7.github.io/Calculator',
        technologies: ['React', 'TypeScript', 'HTML5', 'CSS3']
    },
    {
        id: 5,
        src: [Movies_1, Movies_2, Movies_3, Movies_4],
        title: 'Movies API',
        description: 'Uma aplicação de catálogo de filmes desenvolvida em ReactJS, consumindo dados de uma API de filmes. Com uma interface intuitiva, permite aos usuários buscar e visualizar informações detalhadas sobre filmes, incluindo sinopse, elenco, e avaliações, além de fazer buscas por filmes específicos. Ideal para explorar o consumo de APIs e exibir conteúdos dinâmicos de maneira eficiente.',
        page: 'https://pedromarcelino7.github.io/MoviesAPI',
        technologies: ['React', 'JavaScript', 'API', 'MaterialUI', 'React Router', 'HTML5', 'CSS3']
    },
    {
        id: 6,
        src: [Password_1, Password_2, Password_3, Password_4],
        title: 'Password Generator',
        description: 'Um gerador de senhas desenvolvido em ReactJS, projetado para criar senhas seguras e aleatórias. Com opções de personalização, como comprimento e tipos de caracteres, o projeto garante a criação de senhas fortes, atendendo às melhores práticas de segurança. Ideal para uso em aplicações que exigem geração de senhas robustas e personalizadas.',
        page: 'https://pedromarcelino7.github.io/PasswordGenerator',
        technologies: ['React', 'JavaScript', 'HTML5', 'CSS3']
    },
    {
        id: 7,
        src: [Pokedex_1, Pokedex_2, Pokedex_3, Pokedex_4, Pokedex_5],
        title: 'Pokedex API',
        description: 'Uma Pokédex interativa desenvolvida em ReactJS, que consome dados de uma API de Pokémon. A aplicação permite que os usuários pesquisem e visualizem informações detalhadas sobre diversos Pokémon, incluindo suas habilidades, tipos e estatísticas, além de poder rotacionar a imagem e visualizar o pokémon em sua forma brilhante.',
        page: 'https://pedromarcelino7.github.io/Pokedex',
        technologies: ['React', 'JavaScript', 'API', 'React Router']
    },
    {
        id: 8,
        src: [],
        title: 'Secret Word',
        description: 'Um jogo de adivinhação de palavras desenvolvido em ReactJS. Os jogadores tentam descobrir uma palavra secreta com base em dicas e tentativas limitadas. A aplicação oferece uma interface simples e interativa, permitindo uma experiência de jogo divertida e desafiadora. Ideal para quem busca uma implementação prática de lógica de jogo e manipulação de estados em React.',
        page: '',
        technologies: ['React', 'JavaScript', 'HTML5', 'CSS3']
    },
    {
        id: 9,
        src: [Github_1, Github_2],
        title: 'Github API',
        description: 'Uma aplicação desenvolvida em ReactJS que consome a API do GitHub para exibir informações sobre repositórios, usuários e organizações. Permite aos usuários pesquisar e visualizar dados detalhados do GitHub, como perfil de usuários, atividades em repositórios e estatísticas. Ideal para explorar a integração com APIs e criar interfaces dinâmicas e informativas.',
        page: '',
        technologies: ['React', 'JavaScript', 'API', 'HTML5', 'CSS3']
    },
    {
        id: 10,
        src: [SignInComponent_1, SignInComponent_2, SignInComponent_4, SignInComponent_5, SignInComponent_6, SignInComponent_7],
        title: 'User Registration',
        description: 'Uma aplicação desenvolvida em ReactJS que consome a API do GitHub para exibir informações sobre repositórios, usuários e organizações. Permite aos usuários pesquisar e visualizar dados detalhados do GitHub, como perfil de usuários, atividades em repositórios e estatísticas. Ideal para explorar a integração com APIs e criar interfaces dinâmicas e informativas.',
        page: '',
        technologies: ['React', 'TypeScript', 'API', 'HTML5', 'CSS3']
    }
]

// ---

import technology1 from './images/technologies/React.png'
import technology2 from './images/technologies/Typescript.png'
import technology3 from './images/technologies/Javascript.png'
import technology4 from './images/technologies/MaterialUI.png'
import technology5 from './images/technologies/HTML.png'
import technology6 from './images/technologies/CSS.png'
import technology7 from './images/technologies/Sass.png'
import technology8 from './images/technologies/Bootstrap.png'
import technology9 from './images/technologies/Java.png'
import technology10 from './images/technologies/Python.png'
import technology11 from './images/technologies/MySQL.png'
import technology12 from './images/technologies/Vue.png'
import technology13 from './images/technologies/PHP.png'
import technology14 from './images/technologies/Git.png'

export const technologies = [
    { image: technology1 },
    { image: technology2 },
    { image: technology3 },
    { image: technology4 },
    { image: technology5 },
    { image: technology6 },
    { image: technology7 },
    { image: technology8 },
    { image: technology9 },
    { image: technology10 },
    { image: technology11 },
    { image: technology12 },
    { image: technology13 },
    { image: technology14 },
]