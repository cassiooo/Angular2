import { Component, OnInit } from '@angular/core';
import { JogadorXadrez } from '../class/jogadorXadrez';
import { JogadorXadrezService } from '../services/jogadorXadrez.service';

@Component({
    selector: 'jogadorXadrez',
    templateUrl: 'app/jogadorXadrez/templates/formulario.template.html',
    providers: [JogadorXadrezService]
})

export class JogadorXadrezComponent implements OnInit {
    jogadoresXadrez: JogadorXadrez[];
    jogadorXadrezObject = new JogadorXadrez();
    edit = false;
    errorMessage: string;
    i: number;

    constructor(private jogadorXadrezService: JogadorXadrezService) {
    }

    listar(): void {
        this.jogadorXadrezService.getListJogadorXadrez()
            .subscribe(
            jogadorXadrez => this.jogadoresXadrez = jogadorXadrez,
            error => this.errorMessage = <any>error);
    }

    deletarJogadorXadrez(id, i): void {
        this.i = i;
        this.jogadorXadrezService.deletarJogadorXadrez(id)
            .subscribe(
            success => this.jogadoresXadrez.splice(this.i, 1),
            error => this.errorMessage = <any>error);
    }

    salvarJogadorXadrez(jogadorXadrez: JogadorXadrez) {
        if (!jogadorXadrez.nome) { return; }
        this.jogadorXadrezService.salvarJogadorXadrez(jogadorXadrez)
            .subscribe(
            jogadorXadrez => this.popularLista(jogadorXadrez),
            error => this.errorMessage = <any>error
            );
    }

    popularLista(jogadorXadrez: JogadorXadrez) {
        this.jogadoresXadrez.push(jogadorXadrez);
        this.jogadorXadrezObject = new JogadorXadrez();
    }

    editarJogadorXadrez(jogadorXadrez: JogadorXadrez, persistir = false): void {
        this.edit = true;
        this.jogadorXadrezObject = jogadorXadrez;
        if (persistir) {
            if (!jogadorXadrez.nome) { return; }
            this.jogadorXadrezService.salvarJogadorXadrez(jogadorXadrez)
                .subscribe(
                jogadorXadrez => this.atualizarFormulario(),
                error => this.errorMessage = <any>error
                );
        }
    }

    atualizarFormulario(): void {
        this.jogadorXadrezObject = new JogadorXadrez();
        this.edit = false;
    }

    ngOnInit(): void {
        this.listar();
    }

}

