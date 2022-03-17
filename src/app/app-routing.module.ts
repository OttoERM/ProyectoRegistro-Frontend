import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/inicio' },
  { path: 'inicio', loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule)},
  { path: 'tabla-contenido', loadChildren: () => import('./tabla-contenido/tabla-contenido.module').then(m => m.TablaContenidoModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
