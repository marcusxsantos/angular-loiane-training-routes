import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos/cursos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any[];
  pagina: number;
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private cursosService: CursosService,
    private router: Router
    ) { }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();

    this.inscricao = this.route.queryParams.subscribe(
      (queryParams) => {
        this.pagina = queryParams['pagina'];
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  proximaPagina()
  {
    //this.pagina++;
    this.router.navigate(['/cursos'], 
    {queryParams: {'pagina': ++this.pagina}});
  }

}
