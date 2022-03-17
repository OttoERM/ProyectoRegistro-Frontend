import { Component, OnInit } from '@angular/core';
import { Alumnos } from 'src/app/api/models';
import { AlumnosControllerService } from 'src/app/api/services';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  alumnos:Alumnos[]
  visible:boolean =false

  constructor
  ( private alumnosServices:AlumnosControllerService,
    private messageService: NzMessageService,
    private fb:FormBuilder) {
    this.alumnos=[]
   }

  formAlumnos:FormGroup = this.fb.group({
    IDAlumno:[],
    nombre:[],
    apellido:[],
    sexo:[],
    IDMatricula:[],
    IDClase:[]
  })

  ngOnInit(): void {
    this.alumnosServices.find().subscribe(datos => this.alumnos = datos)
  }

  mostrar(data:Alumnos):void{
    if(data.nombre){
      this.formAlumnos.setValue(data)
    }
    this.visible=true;
  }

  mostrarModal(){
    this.visible=true;
  }

  eliminar(id:string):void{
    this.alumnosServices.deleteById({id}).subscribe(()=>
    {this.alumnos=this.alumnos.filter(x => x.IDAlumno !== id);
     this.messageService.success('Te cagaste mi king, borramos tu registro!')
    })
  }

  cancel():void{
    this.messageService.info('No se borro ni madres!')
  }

  ocultar():void{
    this.visible=false;
    this.formAlumnos.reset()
  }

  guardar():void{
    this.formAlumnos.setValue({...this.formAlumnos.value})
    delete this.formAlumnos.value.IDAlumno
    this.alumnosServices.create({body:this.formAlumnos.value}).subscribe((datoAgregado) => {
      this.alumnos = [...this.alumnos, datoAgregado]
      this.messageService.success('Registro creado con exito')
    })
    this.formAlumnos.reset()
    console.log(this.formAlumnos.value)
    this.visible = false
  }

  actualizar():void{
    if(this.formAlumnos.value.IDAlumno){
      this.alumnosServices.updateById({'id': this.formAlumnos.value.IDAlumno,'body': this.formAlumnos.value}
        ).subscribe(()=>{this.alumnos = this.alumnos.map(obj => {
          if(obj.IDAlumno === this.formAlumnos.value.IDAlumno){
            return this.formAlumnos.value;
          }
          return obj;
        })
        this.messageService.success('Registro actualizado con exito')
        this.formAlumnos.reset()
      })
    }
  }
}
