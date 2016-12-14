import { Component, OnInit } from '@angular/core';
import { Perfil } from '../class/perfil';
import { PerfilService } from '../services/perfil.service';

@Component({
    selector: 'perfil',
    templateUrl: 'app/perfil/templates/perfil.template.html',
    providers: [PerfilService]
})

export class PerfilComponent implements OnInit {
    perfis: Perfil[];
    perfilObject = new Perfil();
    errorMessage: string;
    
    constructor(private perfilService: PerfilService) {
    }

    listar(): void {
        this.perfilService.getListPerfil()
            .subscribe(
            perfis => this.perfis = perfis,
            error => this.errorMessage = <any>error);
    }

    ngOnInit(): void {
        this.listar();
    }
}