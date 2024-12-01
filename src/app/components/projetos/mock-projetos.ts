import { Projeto } from "./projeto-interface";

export const mockProjetos: Projeto[] = [
    {
        id: 1,
        titulo: "Adote Fácil",
        link: "https://github.com/Sousa-Edson/adocao-animais",
        descricaoResumida: "Este projeto foi feito como TCC na FIEB.",
        descricaoCompleta: [
            "O projeto é uma aplicação web desenvolvida como Trabalho de Conclusão de Curso (TCC) na FIEB.",
            "Utilizamos os recursos disponíveis na escola para criar o projeto.",
            "O sistema foi desenvolvido usando Spring Boot, Spring JPA e Spring Security para a segurança e persistência de dados.",
            "As telas foram renderizadas utilizando o Thymeleaf, proporcionando uma interface amigável e funcional.",
            "Foi implementado um banco de dados SQL na nuvem, permitindo que os mesmos dados fossem compartilhados tanto na versão web quanto na versão mobile.",
            "Este projeto visa tratar a adoção de animais abandonados, ajudando pessoas a encontrar animais que realmente precisam de um lar."
        ],
        imagemPrincipal: "./../../assets/img/projeto/1/Adota-Facil.png",
        imagemLista: ["./../../assets/img/projeto/1/adocao-1.png", "./../../assets/img/projeto/1/adocao-2.png", "./../../assets/img/projeto/1/adocao-3.png"],
        tecnologias: ["Spring Boot", "Spring JPA", "Spring Security", "Thymeleaf", "SQL"],
        videoPrincipal: "https://www.youtube.com/embed/RXEyIZptA48?si=Zfl2XqmW1Aiu0Pw0",
    }
    ,
    {
        id: 2,
        titulo: "Meu portfólio",
        link: "https://github.com/Sousa-Edson/portfolio",
        descricaoResumida: "Um portfólio interativo e moderno desenvolvido com Angular e Tailwind CSS, para exibir meus projetos .",
        descricaoCompleta: [
            "Este projeto é o meu portfólio pessoal, criado para exibir os sistemas e soluções que desenvolvi ao longo da minha jornada como programador.",
            "O portfólio foi construído com Angular e Tailwind CSS, destacando a combinação de tecnologias modernas para criar uma interface responsiva, intuitiva e visualmente atraente.",
            "Ainda está em desenvolvimento, mas já conta com espaço para apresentação detalhada de projetos, tecnologias utilizadas e vídeos demonstrativos de cada trabalho.",
            "Planejo expandir o portfólio com mais projetos, conteúdos informativos e integrações que mostrem minha evolução e capacidades como desenvolvedor."
        ]
        ,
        imagemPrincipal: "./../../assets/img/projeto/2/imagem-1.png",
        imagemLista: [
            "./../../assets/img/projeto/2/imagem-2.png",
            "./../../assets/img/projeto/2/imagem-3.png",
            "./../../assets/img/projeto/2/imagem-4.png",
            "./../../assets/img/projeto/2/imagem-5.png",
            "./../../assets/img/projeto/2/imagem-6.png",
            "./../../assets/img/projeto/2/imagem-7.png"],
        tecnologias: ["HTML", "Tailwind CSS", "Angular"],
        videoPrincipal: "https://www.youtube.com/embed/KwUZwG5_Kd4?si=C30TAo_JqwqGI5QQ",
        videoLista: [
            "https://www.youtube.com/embed/KwUZwG5_Kd4?si=C30TAo_JqwqGI5QQ",
            "https://www.youtube.com/embed/itLxp_E8NCQ?si=QjMPB_tn_PDsbh9c"
        ]
    },
    {
        id: 3,
        titulo: "Sys Estoque Lite",
        link: "https://github.com/Sousa-Edson/SysEstoque_Lite",
        descricaoResumida: "Um projeto feito para atender a necessidade da empresa que trabalho.",
        descricaoCompleta: [
            "O Sys Estoque Lite é uma aplicação de desktop desenvolvida em Java 1.8, utilizando a biblioteca gráfica Swing para criar uma interface de usuário intuitiva e eficiente. ",
            "O sistema foi projetado para atender a uma necessidade específica da empresa onde o projeto foi implementado, com foco no gerenciamento de estoque de produtos. ",
            "O banco de dados utilizado é o PostgreSQL 9.6, garantindo robustez e confiabilidade para o armazenamento e consulta de dados. ",
            "Todo o código foi escrito sem o uso de frameworks ORM como Hibernate, com consultas SQL sendo gerenciadas diretamente pela aplicação.",
            "O projeto foi desenvolvido na IDE NetBeans 8.2, conhecida por seu suporte sólido ao desenvolvimento Swing e Java."
        ]
        ,
        imagemPrincipal: "./../../assets/img/projeto/3/imagem-1.png",
        imagemLista: [
            "./../../assets/img/projeto/3/imagem-2.png",
            "./../../assets/img/projeto/3/imagem-3.png",
            "./../../assets/img/projeto/3/imagem-4.png",
            "./../../assets/img/projeto/3/imagem-5.png",
            "./../../assets/img/projeto/3/imagem-6.png",
            "./../../assets/img/projeto/3/imagem-7.png",
            "./../../assets/img/projeto/3/imagem-8.png",
            "./../../assets/img/projeto/3/imagem-9.png"
        ],
        tecnologias: ["Java", "PostgreSql", "NetBeans"],
        videoPrincipal: "https://www.youtube.com/embed/xj0BrPkDEJA?si=qe-EZ3n30nTDGUmb",
        videoLista: [
            "https://www.youtube.com/embed/xj0BrPkDEJA?si=qe-EZ3n30nTDGUmb",
        ]
    },
    {
        id: 4,
        titulo: "Academico Login",
        link: "https://github.com/Sousa-Edson/academicologin",
        descricaoResumida: "Projeto desenvolvido durante as aulas do professor Rogério, com o objetivo de praticar o uso do Spring Security e JWT para autenticação e autorização.",
        descricaoCompleta: [
            "O projeto 'Academico Login' é uma aplicação desenvolvida utilizando Spring Boot, com foco na implementação de autenticação e autorização usando o Spring Security e JWT (JSON Web Tokens).",
            "O sistema foi projetado para permitir a segurança na gestão de usuários, onde as requisições à API são autenticadas com tokens JWT, proporcionando uma abordagem moderna e escalável para controle de acesso.",
            "A aplicação foi construída utilizando o Spring Security para gerenciar as permissões de acesso de maneira granular, e o Spring Data JPA para interagir com o banco de dados de forma eficiente.",
            "O banco de dados utilizado foi o PostgreSQL 9.6, que garante robustez e confiabilidade no armazenamento e consulta dos dados. A integração entre o Spring Data JPA e o PostgreSQL permite que o sistema opere de maneira rápida e com boa performance.",
            "Todo o código foi desenvolvido na IDE NetBeans 8.2, que oferece um excelente suporte ao desenvolvimento com Spring, facilitando a integração de dependências e o gerenciamento do projeto.",
            "Além da implementação de Spring Security e JWT, o projeto também utiliza a arquitetura RESTful, com endpoints que fornecem acesso a dados sensíveis de forma segura e eficiente."
        ],
        imagemPrincipal: "./../../assets/img/projeto/4/imagem-1.png",
        imagemLista: [
            "./../../assets/img/projeto/4/imagem-2.png",
            "./../../assets/img/projeto/4/imagem-3.png",
            "./../../assets/img/projeto/4/imagem-4.png"
        ],
        tecnologias: ["Java", "Sql Server", "Spring Data", "Spring Security", "JWT"],
        videoPrincipal: "https://www.youtube.com/embed/yYnqJ-psjCI?si=Df__g3rRwz2zPsQC",
        videoLista: [
            "https://www.youtube.com/embed/yYnqJ-psjCI?si=Df__g3rRwz2zPsQC"
        ]
    },
    {
        id: 5,
        titulo: "InDecor",
        link: "https://github.com/Sousa-Edson/InDecor",
        web: "https://sousa-edson.github.io/InDecor/",
        descricaoResumida: "InDecor é um projeto de site de decoração desenvolvido com HTML e CSS puro.",
        descricaoCompleta: [
            "InDecor é um site de decoração simples e funcional, desenvolvido utilizando HTML e CSS puro, com foco em um design limpo e elegante.",
            "O projeto foi criado para ser uma plataforma de inspiração para quem busca ideias de decoração, com um layout visualmente atraente e uma navegação fácil.",
            "Utilizando apenas HTML e CSS, o site foi projetado para ser responsivo, garantindo uma boa experiência de uso em diferentes dispositivos, como desktops, tablets e smartphones.",
            "A interface foi desenvolvida de forma intuitiva, com a intenção de proporcionar uma navegação agradável e sem complexidade para os usuários.",
            "O código foi escrito e estruturado de maneira simples e eficiente, utilizando práticas recomendadas para desenvolvimento de sites com HTML e CSS, sem a necessidade de frameworks ou bibliotecas externas.",
            "O projeto foi feito como parte de um aprendizado prático durante as aulas de Matheus Battisti, proporcionando uma experiência valiosa para quem deseja entender os fundamentos do design de sites com HTML e CSS."
        ],
        imagemPrincipal: "./../../assets/img/projeto/5/imagem-1.png",
        imagemLista: [
            "./../../assets/img/projeto/5/imagem-1.png",
            "./../../assets/img/projeto/5/imagem-2.png",
            "./../../assets/img/projeto/5/imagem-3.png",
            "./../../assets/img/projeto/5/imagem-4.png"
        ],
        tecnologias: ["HTML", "CSS", "Visual Studio Code"],
        videoPrincipal: "https://www.youtube.com/embed/p6DBoreUUiE?si=t4TPzjOxTf1-jwSj",
        videoLista: [
            "https://www.youtube.com/embed/p6DBoreUUiE?si=t4TPzjOxTf1-jwSj"
        ]
    }


];
