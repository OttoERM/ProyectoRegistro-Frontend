import { Component, OnInit } from '@angular/core';
import { Matricula } from 'src/app/api/models';
import { MatriculaControllerService } from 'src/app/api/services';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-matriculas',
  templateUrl: './matriculas.component.html',
  styleUrls: ['./matriculas.component.css']
})
export class MatriculasComponent implements OnInit {

  matriculas:Matricula[]
  visible:boolean=false;

  constructor
  ( private matriculasServices:MatriculaControllerService,
    private messageService: NzMessageService,
    private fb:FormBuilder) {
    this.matriculas=[]
   }

  formMatriculas:FormGroup =this.fb.group({
    IDMatricula:[],
    costo:[],
    IDCurso:[]
  })

  ngOnInit(): void {
    this.matriculasServices.find().subscribe(datos => this.matriculas=datos)
  }

  eliminar(id:string):void{
    this.matriculasServices.deleteById({id}).subscribe(()=>
    {this.matriculas=this.matriculas.filter(x => x.IDMatricula !== id);
     this.messageService.success('Te cagaste mi king, borramos tu registro!')
    })
  }

  cancel():void{
    this.messageService.info('No se borro ni madres!')
  }

  ocultar():void{
    this.visible=false;
    this.formMatriculas.reset()
  }

  mostrar(data:Matricula):void{
    if(data.IDMatricula){
      this.formMatriculas.setValue(data)
    }
    this.visible=true;
  }

  mostrarModal():void{
    this.visible=true;
  }

  guardar():void{
    this.formMatriculas.setValue({...this.formMatriculas.value})
    this.matriculasServices.create({body:this.formMatriculas.value}).subscribe((datoAgregado) => {
      this.matriculas = [...this.matriculas, datoAgregado]
      this.messageService.success('Registro creado con exito')
    })
    this.formMatriculas.reset()
    console.log(this.formMatriculas.value)
    this.visible = false
  }
  
  actualizar():void{
    if(this.formMatriculas.value.IDMatricula){
      this.matriculasServices.updateById({'id': this.formMatriculas.value.IDMatricula,'body': this.formMatriculas.value}
        ).subscribe(()=>{this.matriculas = this.matriculas.map(obj => {
          if(obj.IDMatricula === this.formMatriculas.value.IDMatricula){
            return this.formMatriculas.value;
          }
          return obj;
        })
        this.messageService.success('Registro actualizado con exito')
        this.formMatriculas.reset()
      })
  } }

}
