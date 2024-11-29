import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { ProjetosComponent } from "./components/projetos/projetos.component";
import { SobreMinComponent } from "./components/sobre-min/sobre-min.component";
import { TecnologiasComponent } from "./components/tecnologias/tecnologias.component";
import { BotaoTemaComponent } from "./shared/components/botoes/botao-tema/botao-tema.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent, TecnologiasComponent, ProjetosComponent, BotaoTemaComponent, SobreMinComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

}
