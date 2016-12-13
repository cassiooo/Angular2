import { Component } from '@angular/core';
import { Perfil } from '../class/perfil';
import { PerfilInterface } from '../interfaces/perfil.interface';

@Component({
  selector: 'perfil',
  templateUrl: 'app/perfil/templates/perfil.template.html'
})

export class PerfilComponent implements PerfilInterface{
    perfis = this.listar();
    
    listar(): Perfil[]{
        return [
            {nome:'Analista de Requisitos'}
        ];
    }
}