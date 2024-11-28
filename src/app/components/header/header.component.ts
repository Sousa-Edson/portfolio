import { Component } from '@angular/core';
import { HeaderApresentacaoComponent } from "./header-apresentacao/header-apresentacao.component";
import { HeaderImagemComponent } from "./header-imagem/header-imagem.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderApresentacaoComponent, HeaderImagemComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
