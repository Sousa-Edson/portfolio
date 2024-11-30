import { Projeto } from "./projeto-interface";

export const mockProjetos: Projeto[] = [
    {
        id: 1,
        titulo: "Adote Fácil",
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
        imagemLista: ["https://picsum.photos/300/200", "https://picsum.photos/300/201"],
        tecnologias: ["Spring Boot", "Spring JPA", "Spring Security", "Thymeleaf", "SQL"],
    }
,    
    {
        id: 2,
        titulo: "Projeto 2",
        descricaoResumida: "Um sistema completo para gerenciamento de clientes, desenvolvido com Java e Spring.",
        descricaoCompleta: [
            "O Projeto 2 é um sistema robusto para gerenciamento de clientes.",
            "Construído com Java e Spring Framework, suporta integração com bancos de dados SQL.",
            "Oferece autenticação segura e escalabilidade para grandes volumes de dados."
        ],
        imagemPrincipal: "https://picsum.photos/300",
        imagemLista: ["https://picsum.photos/300/202", "https://picsum.photos/300/203"],
        tecnologias: ["Java", "Spring", "PostgreSQL"],
        videoPrincipal: "https://www.youtube.com/embed/1_CmuiKie0o?si=C_VQRGxR7-874CX-",
        videoLista: [
            "https://www.youtube.com/embed/1_CmuiKie0o?si=C_VQRGxR7-874CX-",
            "https://www.youtube.com/embed/dQw4w9WgXcQ"
        ]
    },
    {
        id: 3,
        titulo: "Projeto 3",
        descricaoResumida: "Plataforma para análise de dados, criada com Python e ferramentas de visualização.",
        descricaoCompleta: [
            "O Projeto 3 é uma plataforma de análise de dados que utiliza Python.",
            "Com Pandas e Matplotlib, processa e visualiza grandes conjuntos de dados.",
            "É uma ferramenta poderosa para análises interativas e relatórios visuais."
        ],
        imagemPrincipal: "https://picsum.photos/300",
        imagemLista: ["https://picsum.photos/300/204", "https://picsum.photos/300/205"],
        tecnologias: ["Python", "Pandas", "Matplotlib"],
        videoPrincipal: "https://www.youtube.com/embed/1_CmuiKie0o?si=C_VQRGxR7-874CX-"
    },
    {
        id: 4,
        titulo: "Projeto 4",
        descricaoResumida: "Aplicação para gestão de tarefas, desenvolvida com React e Firebase.",
        descricaoCompleta: [
            "O Projeto 4 é uma ferramenta de produtividade para gestão de tarefas.",
            "Utiliza React para uma interface moderna e Firebase para dados em tempo real.",
            "Permite colaboração em equipe com sincronização instantânea."
        ],
        imagemPrincipal: "https://picsum.photos/300",
        imagemLista: ["https://picsum.photos/300/206", "https://picsum.photos/300/207"],
        tecnologias: ["React", "JavaScript", "Firebase"]
    },
    {
        id: 5,
        titulo: "Projeto 5",
        descricaoResumida: "Sistema de controle de estoque com integração de API RESTful, utilizando Node.js e MongoDB.",
        descricaoCompleta: [
            "O Projeto 5 é um sistema de controle de estoque baseado em Node.js.",
            "Integra APIs RESTful para operações rápidas e escaláveis.",
            "Utiliza MongoDB como banco de dados e autenticação JWT para segurança."
        ],
        imagemPrincipal: "https://picsum.photos/300",
        imagemLista: ["https://picsum.photos/300/208", "https://picsum.photos/300/209"],
        tecnologias: ["Node.js", "Express", "MongoDB"],
        videoPrincipal: "https://www.youtube.com/embed/1_CmuiKie0o?si=C_VQRGxR7-874CX-",
        videoLista: [
            "https://www.youtube.com/embed/1_CmuiKie0o?si=C_VQRGxR7-874CX-",
            "https://www.youtube.com/embed/1_CmuiKie0o?si=C_VQRGxR7-874CX-"
        ]
    }
];
