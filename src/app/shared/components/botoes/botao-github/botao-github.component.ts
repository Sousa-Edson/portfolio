import { Component } from '@angular/core';

@Component({
  selector: 'app-botao-github',
  standalone: true,
  imports: [],
  templateUrl: './botao-github.component.html',
  styleUrl: './botao-github.component.scss'
})
export class BotaoGithubComponent {
  link = 'https://github.com/Sousa-Edson/';

  abrirLink() {
    window.open(this.link, '_blank');
  }
}
