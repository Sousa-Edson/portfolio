import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ContatoComponent } from './pages/contato/contato.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'projetos', component: ProjetosComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'contato', component: ContatoComponent },
];
