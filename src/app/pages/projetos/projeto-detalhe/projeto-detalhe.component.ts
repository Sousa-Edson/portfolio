import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Projeto } from '../../../components/projetos/projeto-interface';
import { mockProjetos } from '../../../components/projetos/mock-projetos';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-projeto-detalhe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projeto-detalhe.component.html',
  styleUrls: ['./projeto-detalhe.component.scss'],
})
export class ProjetoDetalheComponent implements OnInit {
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
}
