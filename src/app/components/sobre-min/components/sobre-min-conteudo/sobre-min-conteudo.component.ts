import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-min-conteudo',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './sobre-min-conteudo.component.html',
  styleUrl: './sobre-min-conteudo.component.scss'
})
export class SobreMinConteudoComponent {
  abrirWhatsApp() {
    const numeroWhatsApp = '5511998232603';
    const isMobile = /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);

    if (isMobile) {
      // Se for móvel, usar o link que detecta o app ou a versão web
      window.open(`https://wa.me/${numeroWhatsApp}`, '_blank');
    } else {
      // Se for desktop, usar a versão web do WhatsApp
      window.open(`https://web.whatsapp.com/send?phone=${numeroWhatsApp}`, '_blank');
    }
  }
}
