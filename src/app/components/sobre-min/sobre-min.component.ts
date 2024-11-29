import { Component, Input, OnInit } from '@angular/core';
import { SobreMinImagemComponent } from "./components/sobre-min-imagem/sobre-min-imagem.component";
import { SobreMinConteudoComponent } from "./components/sobre-min-conteudo/sobre-min-conteudo.component";
import { SobreMinVideoApresentacaoComponent } from "./components/sobre-min-video-apresentacao/sobre-min-video-apresentacao.component";
import { BotaoMaisSobreMinComponent } from "./components/botao-mais-sobre-min/botao-mais-sobre-min.component";

@Component({
  selector: 'app-sobre-min',
  standalone: true,
  imports: [SobreMinImagemComponent, SobreMinConteudoComponent, SobreMinVideoApresentacaoComponent, BotaoMaisSobreMinComponent],
  templateUrl: './sobre-min.component.html',
  styleUrl: './sobre-min.component.scss'
})
export class SobreMinComponent implements OnInit {
  @Input() modoHome = false;

  ngOnInit(): void {

  }
}