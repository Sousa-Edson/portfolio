import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-certificacao',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './certificacao.component.html',
  styleUrl: './certificacao.component.scss'
})
export class CertificacaoComponent {
  certificacoes = [
    {
      caminho: 'assets/img/certificacao/aws-re-start-graduate.png',
      titulo: 'AWS Certified Solutions Start'
    },
    {
      caminho: 'assets/img/certificacao/aws-certified-cloud-practitioner.png',
      titulo: 'AWS Certified Cloud Practitioner'
    },
  ]
}
