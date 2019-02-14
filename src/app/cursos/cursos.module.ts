import { CursosRoutingModule } from './cursos.routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';

import { CursosService } from './cursos.service';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

@NgModule({
    imports: [
        CommonModule, 
        CursosRoutingModule
        //RouterModule
    ],
    exports: [],
    declarations: [
        CursosComponent,
        CursoDetalheComponent,
        CursoNaoEncontradoComponent
    ],
    providers: [CursosService]
})

export class CursosModule { }