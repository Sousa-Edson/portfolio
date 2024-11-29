import { Component, Input } from '@angular/core';
import { CardProjetoComponent } from "../../components/projetos/components/card-projeto/card-projeto.component";
import { BotaoMaisProjetosComponent } from "../../components/projetos/components/botao-mais-projetos/botao-mais-projetos.component";
import { CommonModule } from '@angular/common';
import { Projeto } from '../../components/projetos/projeto-interface';
import { mockProjetos } from '../../components/projetos/mock-projetos';
import { ProjetosComponent as pro } from "../../components/projetos/projetos.component";

@Component({
  selector: 'app-projetos-page',
  standalone: true,
  imports: [CommonModule, CardProjetoComponent, BotaoMaisProjetosComponent, pro],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss'
})
export class ProjetosComponent {
  modoHome = false;
  projetos: Projeto[] = mockProjetos;
  constructor() {

    console.log('perojetos')
  }
}
