import { Component } from '@angular/core';
import { SobreMinImagemComponent } from "./components/sobre-min-imagem/sobre-min-imagem.component";
import { SobreMinConteudoComponent } from "./components/sobre-min-conteudo/sobre-min-conteudo.component";
import { SobreMinVideoApresentacaoComponent } from "./components/sobre-min-video-apresentacao/sobre-min-video-apresentacao.component";

@Component({
  selector: 'app-sobre-min',
  standalone: true,
  imports: [SobreMinImagemComponent, SobreMinConteudoComponent, SobreMinVideoApresentacaoComponent],
  templateUrl: './sobre-min.component.html',
  styleUrl: './sobre-min.component.scss'
})
export class SobreMinComponent {

}
