import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { UsuarioComponent } from '../usuario/components/usuario.component';
import { JogadorXadrezComponent } from '../jogadorXadrez/components/jogadorXadrez.component';
import { LivroXadrezComponent } from '../livroXadrez/components/livroXadrez.component';
import { PerfilComponent } from '../perfil/components/perfil.component';
import { FormsModule } from '@angular/forms';
import { AlunoComponent } from '../aluno/components/aluno.component';
import { HttpModule }    from '@angular/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  //Adicionar essa linha
  declarations: [ AppComponent, UsuarioComponent, PerfilComponent, AlunoComponent, JogadorXadrezComponent, LivroXadrezComponent ],
  //Adicionar essa linha
  bootstrap:    [ AppComponent ]
  
})
export class AppModule { }