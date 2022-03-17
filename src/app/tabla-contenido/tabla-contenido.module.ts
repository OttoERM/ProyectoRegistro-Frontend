import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablaContenidoRoutingModule } from './tabla-contenido-routing.module';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { ClasesComponent } from './clases/clases.component';
import { CursosComponent } from './cursos/cursos.component';
import { DocentesComponent } from './docentes/docentes.component';
import { MatriculasComponent } from './matriculas/matriculas.component';
import { NotasComponent } from './notas/notas.component';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
//import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@NgModule({
  declarations: [
    AlumnosComponent,
    ClasesComponent,
    CursosComponent,
    DocentesComponent,
    MatriculasComponent,
    NotasComponent
  ],
  imports: [
    CommonModule,
    TablaContenidoRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    //Importaciones de ng-zorra
    NzTableModule,
    NzDividerModule,
    NzGridModule,
    NzButtonModule,
    NzIconModule,
    NzPopconfirmModule,
    NzMessageModule,
    NzModalModule,
    NzFormModule,
    NzInputModule,
    NzRadioModule,
    NzSelectModule
  ]
})
export class TablaContenidoModule { }
