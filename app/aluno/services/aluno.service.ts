import { Injectable } from '@angular/core';
import { Aluno } from '../class/aluno';

@Injectable()
export class AlunoService {
    alunos: Aluno[];
    getListAluno(): Promise<Aluno[]> {
        this.alunos = [
            { nomeAluno: 'Cassio', idade: 37, escolaridade:'Pós-gradução'  }
        ];
        return Promise.resolve(this.alunos);
    }
}