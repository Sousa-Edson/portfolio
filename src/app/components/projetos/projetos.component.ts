import { Component } from '@angular/core';
import { BotaoGithubComponent } from "../../shared/botao/botao-github/botao-github.component";
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
export class ProjetosComponent {
  projetos: Projeto[] = mockProjetos;
}
