import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-botao-mais-projetos',
  standalone: true,
  imports: [],
  templateUrl: './botao-mais-projetos.component.html',
  styleUrl: './botao-mais-projetos.component.scss'
})
export class BotaoMaisProjetosComponent {
  constructor(private router: Router) { }
  chamaProjetos() {
    this.router.navigate(['projetos']);


  }

}
