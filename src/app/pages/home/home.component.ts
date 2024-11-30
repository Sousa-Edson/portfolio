import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { TecnologiasComponent } from "../../components/tecnologias/tecnologias.component";
import { ProjetosComponent } from "../../components/projetos/projetos.component";
import { SobreMinComponent } from "../../components/sobre-min/sobre-min.component";
import { ContatoComponent } from "../../components/contato/contato.component";
import { FormacaoComponent } from "../../components/formacao/formacao.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, TecnologiasComponent, ProjetosComponent, SobreMinComponent, ContatoComponent, FormacaoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
