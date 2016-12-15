import { Component } from '@angular/core';
import { LivroXadrez } from '../class/livroXadrez';
import { LivroXadrezService } from '../services/livroXadrez.service';
import { Router, ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';


@Component({
    selector: 'livroXadrez-form',
    templateUrl: 'app/livroXadrez/templates/livroXadrez.template.form.html',
    providers: [LivroXadrezService]    
})
export class LivroXadrezComponentForm implements OnInit {
    errorMessage: string;
    livroXadrezObject: LivroXadrez;
    private sub: any;

    constructor(private livroXadrezService: LivroXadrezService,
        private router: Router,
        private routeActivated: ActivatedRoute) { }


    salvar(livroXadrez: LivroXadrez) {
        if (!livroXadrez.titulo) { return; }
        this.livroXadrezService.salvarLivroXadrez(livroXadrez)
            .subscribe(
            livroXadrez => this.router.navigate(['livroXadrez']),
            error => this.errorMessage = <any>error
            );
    }

    ngOnInit(): void {
        this.sub = this.routeActivated.params.subscribe(params => {
            let id = params['id'];
            this.livroXadrezObject = new LivroXadrez();
            if (id) {
                console.log(id);
                this.livroXadrezService.get(id)
                    .subscribe(
                    livroXadrez => this.livroXadrezObject = livroXadrez,
                    error => this.errorMessage = <any>error
                    );
            }
            
        });

    }

}