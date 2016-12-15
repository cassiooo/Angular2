import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { UsuarioComponent } from '../usuario/components/usuario.component';
import { JogadorXadrezComponent } from '../jogadorXadrez/components/jogadorXadrez.component';
import { JogadorXadrezComponentForm } from '../jogadorXadrez/components/jogadorXadrez.component.form';
import { LivroXadrezComponent } from '../livroXadrez/components/livroXadrez.component';
import { PerfilComponent } from '../perfil/components/perfil.component';
import { PerfilComponentForm } from '../perfil/components/perfil.component.form';
import { HomeComponent } from '../home/components/home.component'
import { FormsModule } from '@angular/forms';
import { AlunoComponent } from '../aluno/components/aluno.component';
import { HttpModule }    from '@angular/http';
import { routing } from './routes'

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
  //Adicionar essa linha
  declarations: [ AppComponent, UsuarioComponent, PerfilComponent, AlunoComponent, JogadorXadrezComponent, LivroXadrezComponent, HomeComponent, PerfilComponentForm, JogadorXadrezComponentForm ],
  //Adicionar essa linha
  bootstrap:    [ AppComponent ]
  
})
export class AppModule { }