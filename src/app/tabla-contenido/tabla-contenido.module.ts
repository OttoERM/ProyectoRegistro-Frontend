import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablaContenidoRoutingModule } from './tabla-contenido-routing.module';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ClasesComponent } from './clases/clases.component';
import { CursosComponent } from './cursos/cursos.component';


@NgModule({
  declarations: [
    AlumnosComponent,
    ClasesComponent,
    CursosComponent
  ],
  imports: [
    CommonModule,
    TablaContenidoRoutingModule,

    //Importaciones de ng-zorra
    NzTableModule
  ]
})
export class TablaContenidoModule { }
