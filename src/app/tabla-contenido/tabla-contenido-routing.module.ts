import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { ClasesComponent } from './clases/clases.component';
import { CursosComponent } from './cursos/cursos.component';
import { DocentesComponent } from './docentes/docentes.component';
import { MatriculasComponent } from './matriculas/matriculas.component';
import { NotasComponent } from './notas/notas.component';

const routes: Routes = [
  {
    path:'',
    children:[
      { path: 'alumnos', component: AlumnosComponent},
      { path: 'clases', component: ClasesComponent},
      { path: 'cursos', component: CursosComponent},
      { path: 'docentes', component: DocentesComponent},
      { path: 'matriculas', component: MatriculasComponent},
      { path: 'notas', component: NotasComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablaContenidoRoutingModule { }
