import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Projeto } from '../../../components/projetos/projeto-interface';
import { mockProjetos } from '../../../components/projetos/mock-projetos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projeto-detalhe',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './projeto-detalhe.component.html',
  styleUrl: './projeto-detalhe.component.scss'
})
export class ProjetoDetalheComponent implements OnInit {
  projeto: Projeto | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.projeto = mockProjetos.find(p => p.id === id);
  }
}