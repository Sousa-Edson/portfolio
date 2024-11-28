import { Component, Input } from '@angular/core';
import { Projeto } from '../../projeto-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-projeto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-projeto.component.html',
  styleUrl: './card-projeto.component.scss'
})
export class CardProjetoComponent {
  @Input() projeto: Projeto | null = null;
  constructor() { }
}
