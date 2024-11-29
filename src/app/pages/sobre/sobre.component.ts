import { Component } from '@angular/core';
import { SobreMinImagemComponent } from "../../components/sobre-min/components/sobre-min-imagem/sobre-min-imagem.component";
import { SobreMinConteudoComponent } from "../../components/sobre-min/components/sobre-min-conteudo/sobre-min-conteudo.component";
import { SobreMinVideoApresentacaoComponent } from "../../components/sobre-min/components/sobre-min-video-apresentacao/sobre-min-video-apresentacao.component";
import { SobreMinComponent } from "../../components/sobre-min/sobre-min.component";

@Component({
  selector: 'app-sobre-page',
  standalone: true,
  imports: [SobreMinImagemComponent, SobreMinConteudoComponent, SobreMinVideoApresentacaoComponent, SobreMinComponent],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss'
})
export class SobreComponent {

}
