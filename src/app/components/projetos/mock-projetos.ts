import { Projeto } from "./projeto-interface";

export const mockProjetos: Projeto[] = [
    {
        id: 1,
        titulo: "Projeto 1",
        descricao: "Este projeto é um exemplo de como criar algo incrível usando Angular.",
        imagem: "https://picsum.photos/300",
        tecnologias: ["Angular", "TypeScript", "JavaScript"],
    },
    {
        id: 2,
        titulo: "Projeto 2",
        descricao: "Um sistema completo para gerenciamento de clientes, desenvolvido com Java e Spring.",
        imagem: "https://picsum.photos/300",
        tecnologias: ["Java", "Spring", "PostgreSQL"],
    },
    {
        id: 3,
        titulo: "Projeto 3",
        descricao: "Plataforma para análise de dados, criada com Python e ferramentas de visualização.",
        imagem: "https://picsum.photos/300",
        tecnologias: ["Python", "Pandas", "Matplotlib"],
    },
    {
        id: 4,
        titulo: "Projeto 4",
        descricao: "Aplicação para gestão de tarefas, desenvolvida com React e Firebase.",
        imagem: "https://picsum.photos/300",
        tecnologias: ["React", "JavaScript", "Firebase"],
    },
    {
        id: 5,
        titulo: "Projeto 5",
        descricao: "Sistema de controle de estoque com integração de API RESTful, utilizando Node.js e MongoDB.",
        imagem: "https://picsum.photos/300",
        tecnologias: ["Node.js", "Express", "MongoDB"],
    },
];
