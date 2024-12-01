import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-imagem-modal',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './imagem-modal.component.html',
  styleUrl: './imagem-modal.component.scss'
})
export class ImagemModalComponent {
  // Controlar o modal
  @Input() modalAberto = false;
  @Input() imagemAtual = '';
  @Output() modalFecha = new EventEmitter();

  abrirModal(imagem: string) {
    this.imagemAtual = imagem;
    this.modalAberto = true;
  }

  fecharModal() {
    this.modalAberto = false;
    this.modalFecha.emit();
  }
}
