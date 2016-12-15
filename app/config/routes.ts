import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from '../usuario/components/usuario.component';
import { HomeComponent } from '../home/components/home.component';
import { PerfilComponent } from '../perfil/components/perfil.component';
import { PerfilComponentForm } from '../perfil/components/perfil.component.form';
import { JogadorXadrezComponent } from '../jogadorXadrez/components/jogadorXadrez.component';
import { JogadorXadrezComponentForm } from '../jogadorXadrez/components/jogadorXadrez.component.form';
import { LivroXadrezComponent } from '../livroXadrez/components/livroXadrez.component';
import { LivroXadrezComponentForm } from '../livroXadrez/components/livroXadrez.component.form';


//Configurações da rota
export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'usuario', component: UsuarioComponent },
    { path: 'usuario/:id', component: UsuarioComponent },
    { path: 'home', component: HomeComponent },
    { path: 'perfil', component: PerfilComponent },
    { path: 'perfil-add', component: PerfilComponentForm },
    { path: 'perfil-edit/:id', component: PerfilComponentForm },
    { path: 'jogadorXadrez', component: JogadorXadrezComponent },
    { path: 'jogadorXadrez-add', component: JogadorXadrezComponentForm },
    { path: 'jogadorXadrez-edit/:id', component: JogadorXadrezComponentForm },
    { path: 'livroXadrez', component: LivroXadrezComponent },
    { path: 'livroXadrez-add', component: LivroXadrezComponentForm },
    { path: 'livroXadrez-edit/:id', component: LivroXadrezComponentForm }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);