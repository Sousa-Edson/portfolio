import { Component, Input } from '@angular/core';
import { Projeto } from '../../projeto-interface';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-projeto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-projeto.component.html',
  styleUrl: './card-projeto.component.scss'
})
export class CardProjetoComponent {
  @Input() projeto: Projeto | null = null;

  constructor(private router: Router) { }

  private cores: Record<string, string> = {
    Angular: 'bg-red-100 text-red-600',
    TypeScript: 'bg-blue-100 text-blue-600',
    JavaScript: 'bg-yellow-100 text-yellow-600',
    TailwindCSS: 'bg-teal-100 text-teal-600',
    HTML: 'bg-orange-100 text-orange-600',
    CSS: 'bg-blue-200 text-blue-800',
    Java: 'bg-red-200 text-blue-800',
    Spring: 'bg-green-200 text-blue-800'
  };

  getTecnologiaClasse(tecnologia: string): string {
    return this.cores[tecnologia] || 'bg-gray-100 text-gray-600'; // Classe padrão
  }

  irParaDetalhe(id: number | undefined): void {
    if (id) {
      this.router.navigate(['/projetos', id]);
    }
  }

}
