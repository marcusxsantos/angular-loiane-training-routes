import { AlunosService } from './../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {

  id: number;
  aluno: any;
  inscricao: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private alunoService: AlunosService) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      this.aluno = this.alunoService.getAluno(this.id);

      if(this.aluno === null)
      {
        this.aluno = {};
      }

    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
