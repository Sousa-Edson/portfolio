import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-formacao',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './formacao.component.html',
  styleUrl: './formacao.component.scss'
})
export class FormacaoComponent {
  formacoes = [
    {
      endereco: 'R. Interna Grupo Bandeirante, 138',
      bairro: 'Jardim Belval',
      cidade: 'Barueri - SP',
      titulo: 'Técnico de Informática',
      descricao: 'Pelo Instituto Técnico de Barueri - BRASÍLIO FLORES DE AZEVEDO.'
    },
    {
      endereco: 'R. Tomé de Souza, 259',
      bairro: 'Parque Imperial',
      cidade: 'Barueri - SP',
      titulo: 'Técnico de Logística',
      descricao: 'Pelo Instituto Técnico de Barueri - PROF. MOACYR DOMINGOS SÁVIO VERONEZI.'
    }
  ];
}
