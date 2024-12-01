export interface Projeto {
    id: number;
    titulo: string;
    link?: string;
    web?: string;
    descricaoResumida: string;
    descricaoCompleta: string[];
    imagemPrincipal: string;
    imagemLista?: string[];
    tecnologias: string[];
    videoPrincipal?: string;
    videoLista?: string[];
}
