import { Component } from '@angular/core';
import { BotaoLinkedinComponent } from '../../../../shared/components/botoes/botao-linkedin/botao-linkedin.component';
import { BotaoGithubComponent } from '../../../../shared/components/botoes/botao-github/botao-github.component';

@Component({
  selector: 'app-header-apresentacao',
  standalone: true,
  imports: [BotaoLinkedinComponent, BotaoGithubComponent],
  templateUrl: './header-apresentacao.component.html',
  styleUrl: './header-apresentacao.component.scss'
})
export class HeaderApresentacaoComponent {

}
