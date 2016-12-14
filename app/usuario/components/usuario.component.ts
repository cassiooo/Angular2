import { Component, OnInit } from '@angular/core';
import { Usuario } from '../class/usuario';
import { Perfil } from '../../perfil/class/perfil';
import { UsuarioService } from '../services/usuario.service';
import { PerfilService } from '../../perfil/services/perfil.service';
import { CorreiosService } from '../../correios/service/correios.service';

@Component({
    selector: 'usuario',
    templateUrl: 'app/usuario/templates/formulario.template.html',
    providers: [UsuarioService, PerfilService, CorreiosService]
})

export class UsuarioComponent implements OnInit {
    usuarios: Usuario[];
    usuarioObject = new Usuario();
    edit = false;
    errorMessage: string;
    i: number;
    perfis: Perfil[];

    constructor(private usuarioService: UsuarioService,
        private perfilService: PerfilService,
        private correiosService: CorreiosService) {
    }

    listar(): void {
        this.usuarioService.getListUsuario()
            .subscribe(
            usuarios => this.usuarios = usuarios,
            error => this.errorMessage = <any>error);
    }

    listarPerfil(): void {
        this.perfilService.getListPerfil()
            .subscribe(
            response => this.popularPerfis(response),
            error => this.errorMessage = <any>error);
    }

    popularPerfis(perfis): void {
        this.perfis = perfis;
        this.usuarioObject.perfil = this.perfis[0];
    }


    deletarUsuario(id, i): void {
        this.i = i;
        this.usuarioService.deletarUsuario(id)
            .subscribe(
            success => this.usuarios.splice(this.i, 1),
            error => this.errorMessage = <any>error);
    }

    salvarUsuario(usuario: Usuario) {
        if (!usuario.nome) { return; }
        this.usuarioService.salvarUsuario(usuario)
            .subscribe(
            usuario => this.popularLista(usuario),
            error => this.errorMessage = <any>error
            );
    }

    popularLista(usuario: Usuario) {
        this.usuarios.push(usuario);
        this.usuarioObject = new Usuario();
        this.usuarioObject.perfil = this.perfis[0];
    }

    editarUsuario(usuario: Usuario, persistir = false): void {
        this.edit = true;

        for (var p in this.perfis) {
            if (usuario.perfil.nome === this.perfis[p].nome)
                usuario.perfil = this.perfis[p];
        }

        this.usuarioObject = usuario;
        if (persistir) {
            if (!usuario.nome) { return; }
            this.usuarioService.salvarUsuario(usuario)
                .subscribe(
                usuario => this.atualizarFormulario(),
                error => this.errorMessage = <any>error
                );
        }
    }

    atualizarFormulario(): void {
        this.usuarioObject = new Usuario();
        this.usuarioObject.perfil = this.perfis[0];
        this.edit = false;
    }

    onChange(cep): void {
        if (cep != null) {
            if (cep.toString().length === 8) {
                this.correiosService.getCep(cep).subscribe(response => this.popularLogradouro(response));
            }
        }
    }
    
    popularLogradouro(response){
        this.usuarioObject.endereco = response.logradouro;
    }

    ngOnInit(): void {
        this.listar();
        this.listarPerfil();
    }

}

