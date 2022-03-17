import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/api/models';
import { CursoControllerService } from 'src/app/api/services';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  curso:Curso[]
  visible:boolean=false

  constructor
  ( private cursosServices:CursoControllerService,
    private messageService: NzMessageService,
    private fb:FormBuilder) {
    this.curso=[]
  }

  formCursos: FormGroup = this.fb.group({
    IDCurso:[],
    nombreCurso:[]
  })

  ngOnInit(): void {
    this.cursosServices.find().subscribe(datos => this.curso = datos)
  }

  eliminar(id:string):void{
    this.cursosServices.deleteById({id}).subscribe(()=>
    {this.curso=this.curso.filter(x => x.IDCurso !== id);
     this.messageService.success('Te cagaste mi king, borramos tu registro!')
    })
  }

  cancel():void{
    this.messageService.info('No se borro ni madres!')
  }

  ocultar():void{
    this.visible=false;
    this.formCursos.reset()
  }

  mostrar(data:Curso):void{
    if(data.IDCurso){
      this.formCursos.setValue(data)
    }
    this.visible=true;
  }

  mostrarModal():void{
    this.visible=true;
  }

  guardar():void{
    this.formCursos.setValue({...this.formCursos.value})
    delete this.formCursos.value.id
    this.cursosServices.create({body:this.formCursos.value}).subscribe((datoAgregado) => {
      this.curso = [...this.curso, datoAgregado]
      this.messageService.success('Registro creado con exito')
    })
    this.formCursos.reset()
    console.log(this.formCursos.value)
    this.visible = false
  }
  
  actualizar():void{
    if(this.formCursos.value.IDCurso){
      this.cursosServices.updateById({'id': this.formCursos.value.IDCurso,'body': this.formCursos.value}
        ).subscribe(()=>{this.curso = this.curso.map(obj => {
          if(obj.IDCurso === this.formCursos.value.IDCurso){
            return this.formCursos.value;
          }
          return obj;
        })
        this.messageService.success('Registro actualizado con exito')
        this.formCursos.reset()
      })
    }
  }

}
