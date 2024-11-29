import { Component, Input, OnInit } from '@angular/core';
import { BotaoGithubComponent } from "../../shared/components/botoes/botao-github/botao-github.component";
import { BotaoMaisProjetosComponent } from "./components/botao-mais-projetos/botao-mais-projetos.component";
import { CardProjetoComponent } from "./components/card-projeto/card-projeto.component";
import { Projeto } from './projeto-interface';
import { mockProjetos } from './mock-projetos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CommonModule, BotaoMaisProjetosComponent, CardProjetoComponent],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss'
})
export class ProjetosComponent implements OnInit {
  @Input() modoHome = false;
  projetos: Projeto[] = mockProjetos;

  ngOnInit(): void {
    if (this.modoHome) {
      this.projetos = this.projetos.slice(0, 3);
    } else {
      this.projetos = mockProjetos;
    }
  }
}
