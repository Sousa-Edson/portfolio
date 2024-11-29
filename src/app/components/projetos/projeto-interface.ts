export interface Projeto {
    id: number;
    titulo: string;
    descricaoResumida: string;
    descricaoCompleta: string[];
    imagemPrincipal: string;
    imagemLista?: string[];
    tecnologias: string[];
    videoPrincipal?: string;
    videoLista?: string[];
}
