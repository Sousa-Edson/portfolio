import { Component } from '@angular/core';
import { BotaoTemaComponent } from "../../shared/components/botoes/botao-tema/botao-tema.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BotaoTemaComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  alternarTema() {
    const body = document.body;
    body.classList.toggle('dark'); // Alterna a classe 'dark' para ativar o modo escuro
  }
}
