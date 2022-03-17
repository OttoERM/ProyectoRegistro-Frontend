import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { ClasesComponent } from './clases/clases.component';
import { CursosComponent } from './cursos/cursos.component';

const routes: Routes = [
  {
    path:'',
    children:[
      { path: 'alumnos', component: AlumnosComponent},
      { path: 'clases', component: ClasesComponent},
      { path: 'cursos', component: CursosComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablaContenidoRoutingModule { }
