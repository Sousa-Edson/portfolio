import { Component } from '@angular/core';
import { TemaService } from '../../../services/tema.service';

@Component({
  selector: 'app-botao-tema',
  standalone: true,
  imports: [],
  templateUrl: './botao-tema.component.html',
  styleUrl: './botao-tema.component.scss'
})
export class BotaoTemaComponent {
  constructor(public temaService: TemaService) { }
  toggleTheme(): void {
    this.temaService.toggleTheme();
  }

  get isDarkMode(): boolean {
    return this.temaService.isDark();
  }
}
