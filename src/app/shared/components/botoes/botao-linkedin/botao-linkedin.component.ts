import { Component } from '@angular/core';

@Component({
  selector: 'app-botao-linkedin',
  standalone: true,
  imports: [],
  templateUrl: './botao-linkedin.component.html',
  styleUrl: './botao-linkedin.component.scss'
})
export class BotaoLinkedinComponent {
  link = 'https://www.linkedin.com/in/edson-sousa-b0769a181/';

  abrirLink() {
    window.open(this.link, '_blank');
  }

}
