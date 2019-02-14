import { AlunosService } from './../alunos.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  id: number;
  inscricao: Subscription;
  aluno: any;

  constructor(private route: ActivatedRoute, private router: Router, private alunoService: AlunosService) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any)=>{
      this.id = params['id'];
      this.aluno=this.alunoService.getAluno(this.id);
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  EditarAluno(){
    this.router.navigate(['/alunos', this.aluno.id, 'editar'])
  }
}
