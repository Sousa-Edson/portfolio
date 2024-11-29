import { Component } from '@angular/core';
import { ContatoComponent as contato } from "../../components/contato/contato.component";

@Component({
  selector: 'app-contato-page',
  standalone: true,
  imports: [contato],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss'
})
export class ContatoComponent {

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

  abrirInstagram() {
    const usuarioInstagram = 'edson3711.es/';
    window.open(`https://www.instagram.com/${usuarioInstagram}`, '_blank');
  }

  abrirEmail() {
    const email = 'edson3711.es@gmail.com';
    window.location.href = `mailto:${email}`;
  }
}
