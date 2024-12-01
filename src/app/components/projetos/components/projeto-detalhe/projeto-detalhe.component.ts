import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Projeto } from '../../projeto-interface';
import { mockProjetos } from '../../mock-projetos';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ImagemModalComponent } from "./components/imagem-modal/imagem-modal.component";
import { BotaoMaisProjetosComponent } from "../botao-mais-projetos/botao-mais-projetos.component";

@Component({
  selector: 'app-projeto-detalhe',
  standalone: true,
  imports: [CommonModule, ImagemModalComponent, BotaoMaisProjetosComponent],
  templateUrl: './projeto-detalhe.component.html',
  styleUrls: ['./projeto-detalhe.component.scss'],
})
export class ProjetoDetalheComponent implements OnInit {
  clickImagem(imagem: string) {
    console.log('clickImagem: ', imagem);
  }
  projeto: Projeto | undefined;
  videoSeguroLista: SafeResourceUrl[] = [];
  videoSeguro: SafeResourceUrl | undefined;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.projeto = mockProjetos.find((p) => p.id === id);

    if (this.projeto?.videoLista) {
      this.videoSeguroLista = this.projeto.videoLista.map((video) =>
        this.sanitizer.bypassSecurityTrustResourceUrl(video)
      );
    }

    if (this.projeto?.videoPrincipal) {
      this.videoSeguro = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.projeto.videoPrincipal
      );
    }

  }

  // Controlar o modal
  modalAberto = false;
  imagemAtual = '';

  abrirModal(imagem: string) {
    this.imagemAtual = imagem;
    this.modalAberto = true;
  }

  fecharModal() {
    this.modalAberto = false;
  }
}
