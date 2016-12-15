import { Component } from '@angular/core';
import { JogadorXadrez } from '../class/jogadorXadrez';
import { JogadorXadrezService } from '../services/jogadorXadrez.service';
import { Router, ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';


@Component({
    selector: 'jogadorXadrez-form',
    templateUrl: 'app/jogadorXadrez/templates/jogadorXadrez.template.form.html',
    providers: [JogadorXadrezService]    
})
export class JogadorXadrezComponentForm implements OnInit {
    errorMessage: string;
    jogadorXadrezObject: JogadorXadrez;
    private sub: any;

    constructor(private jogadorXadrezService: JogadorXadrezService,
        private router: Router,
        private routeActivated: ActivatedRoute) { }


    salvar(jogadorXadrez: JogadorXadrez) {
        if (!jogadorXadrez.nome) { return; }
        this.jogadorXadrezService.salvarJogadorXadrez(jogadorXadrez)
            .subscribe(
            jogadorXadrez => this.router.navigate(['jogadorXadrez']),
            error => this.errorMessage = <any>error
            );
    }

    ngOnInit(): void {
        this.sub = this.routeActivated.params.subscribe(params => {
            let id = params['id'];
            this.jogadorXadrezObject = new JogadorXadrez();
            if (id) {
                console.log(id);
                this.jogadorXadrezService.get(id)
                    .subscribe(
                    jogadorXadrez => this.jogadorXadrezObject = jogadorXadrez,
                    error => this.errorMessage = <any>error
                    );
            }
            
        });

    }

}