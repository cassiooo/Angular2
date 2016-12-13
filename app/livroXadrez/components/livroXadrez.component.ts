import { Component, OnInit } from '@angular/core';
import { LivroXadrez } from '../class/livroXadrez';
import { LivroXadrezService } from '../services/livroXadrez.service';

@Component({
    selector: 'livroXadrez',
    templateUrl: 'app/livroXadrez/templates/livroXadrez.template.html',
    providers: [LivroXadrezService]
})

export class LivroXadrezComponent implements OnInit {
    livrosXadrez: LivroXadrez[];
    livroXadrezObject = new LivroXadrez();
    edit = false;
    errorMessage: string;
    i: number;

    constructor(private livroXadrezService: LivroXadrezService) {
    }

    listar(): void {
        this.livroXadrezService.getListLivroXadrez()
            .subscribe(
            livroXadrez => this.livrosXadrez = livroXadrez,
            error => this.errorMessage = <any>error);
    }

    deletarLivroXadrez(id, i): void {
        this.i = i;
        this.livroXadrezService.deletarLivroXadrez(id)
            .subscribe(
            success => this.livrosXadrez.splice(this.i, 1),
            error => this.errorMessage = <any>error);
    }

    salvarLivroXadrez(livroXadrez: LivroXadrez) {
        if (!livroXadrez.titulo) { return; }
        this.livroXadrezService.salvarLivroXadrez(livroXadrez)
            .subscribe(
            livroXadrez => this.popularLista(livroXadrez),
            error => this.errorMessage = <any>error
            );
    }

    popularLista(livroXadrez: LivroXadrez) {
        this.livrosXadrez.push(livroXadrez);
        this.livroXadrezObject = new LivroXadrez();
    }

    editarLivroXadrez(livroXadrez: LivroXadrez, persistir = false): void {
        this.edit = true;
        this.livroXadrezObject = livroXadrez;
        if (persistir) {
            if (!livroXadrez.titulo) { return; }
            this.livroXadrezService.salvarLivroXadrez(livroXadrez)
                .subscribe(
                livroXadrez => this.atualizarFormulario(),
                error => this.errorMessage = <any>error
                );
        }
    }

    atualizarFormulario(): void {
        this.livroXadrezObject = new LivroXadrez();
        this.edit = false;
    }

    ngOnInit(): void {
        this.listar();
    }

}

