import { Component, OnInit } from '@angular/core';
import { Aluno } from '../class/aluno';
import { AlunoService } from '../services/aluno.service';

@Component({
  selector: 'aluno',
  templateUrl: 'app/aluno/templates/aluno.template.html',
  providers: [AlunoService]
})
export class AlunoComponent implements OnInit {
    alunos: Aluno[];
    alunoObject = new Aluno();
    edit = false;
    
    constructor(private alunoService: AlunoService) {
    }
    
    listar(): void{
        this.alunoService.getListAluno().then(alunos => this.alunos = alunos);
    }
    
    deletarAluno(index): void {
        this.alunos.splice(index, 1);
    }

    salvarAluno(usuario): void {
       this.alunos.push(usuario);
       this.alunoObject = new Aluno();
    }

    editarAluno(aluno, persistir = false) : void{
      this.edit = true;
      this.alunoObject = aluno;
      if(persistir){
         this.alunoObject = new Aluno();
         this.edit = false;
      }
    } 
   
    ngOnInit(): void {
        this.listar();
    }   
}

