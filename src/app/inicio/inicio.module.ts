import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';


@NgModule({
  declarations: [
    BienvenidoComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
