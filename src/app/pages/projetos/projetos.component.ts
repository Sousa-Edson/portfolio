import { Component } from '@angular/core';
import { CardProjetoComponent } from "../../components/projetos/components/card-projeto/card-projeto.component";
import { BotaoMaisProjetosComponent } from "../../components/projetos/components/botao-mais-projetos/botao-mais-projetos.component";
import { CommonModule } from '@angular/common';
import { Projeto } from '../../components/projetos/projeto-interface';
import { mockProjetos } from '../../components/projetos/mock-projetos';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CommonModule, CardProjetoComponent, BotaoMaisProjetosComponent],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss'
})
export class ProjetosComponent {
  projetos: Projeto[] = mockProjetos;
}
