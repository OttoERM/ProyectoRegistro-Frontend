import { Component, OnInit } from '@angular/core';
import { Docentes } from 'src/app/api/models';
import { DocentesControllerService } from 'src/app/api/services';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.css']
})
export class DocentesComponent implements OnInit {

  docentes:Docentes[]
  visible:boolean=false

  constructor
  ( private docentesServices:DocentesControllerService,
    private messageService: NzMessageService,
    private fb:FormBuilder) {
    this.docentes=[]
   }

   formDocentes:FormGroup =this.fb.group({
     IDDocente:[],
     nombreDocente:[],
     salario:[],
     sexoDocente:[]
   })

  ngOnInit(): void {
    this.docentesServices.find().subscribe(datos => this.docentes = datos)
  }

  eliminar(id:string):void{
    this.docentesServices.deleteById({id}).subscribe(()=>
    {this.docentes=this.docentes.filter(x => x.IDDocente !== id);
     this.messageService.success('Te cagaste mi king, borramos tu registro!')
    })
  }

  cancel():void{
    this.messageService.info('No se borro ni madres!')
  }

  ocultar():void{
    this.visible=false;
    this.formDocentes.reset()
  }

  mostrar(data:Docentes):void{
    if(data.IDDocente){
      this.formDocentes.setValue(data)
    }
    this.visible=true;
  }

  mostrarModal():void{
    this.visible=true;
  }

  guardar():void{
    this.formDocentes.setValue({...this.formDocentes.value})
    delete this.formDocentes.value.IDDocente
    this.docentesServices.create({body:this.formDocentes.value}).subscribe((datoAgregado) => {
      this.docentes = [...this.docentes, datoAgregado]
      this.messageService.success('Registro creado con exito')
    })
    this.formDocentes.reset()
    console.log(this.formDocentes.value)
    this.visible = false
  }
  
  actualizar():void{
    this.docentesServices.updateById({'id': this.formDocentes.value.IDDocente,'body': this.formDocentes.value}
      ).subscribe(()=>{this.docentes = this.docentes.map(obj => {
        if(obj.IDDocente === this.formDocentes.value.IDDocente){
          return this.formDocentes.value;
        }
        return obj;
      })
      this.messageService.success('Registro actualizado con exito')
      this.formDocentes.reset()
    })
  }

}
