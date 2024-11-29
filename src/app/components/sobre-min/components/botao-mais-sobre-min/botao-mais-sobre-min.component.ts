import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-botao-mais-sobre-min',
  standalone: true,
  imports: [],
  templateUrl: './botao-mais-sobre-min.component.html',
  styleUrl: './botao-mais-sobre-min.component.scss'
})
export class BotaoMaisSobreMinComponent {
  constructor(private router: Router) { }
  chamaSobreMin() {
    this.router.navigate(['sobre']);


  }
}
