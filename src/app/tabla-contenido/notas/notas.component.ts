import { Component, OnInit } from '@angular/core';
import { Nota } from 'src/app/api/models';
import { NotaControllerService } from 'src/app/api/services';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  notas:Nota[]
  visible:boolean = false

  constructor
  ( private notasServices:NotaControllerService,
    private messageService: NzMessageService,
    private fb:FormBuilder) {
    this.notas=[]
   }

   formNotas:FormGroup =this.fb.group({
    IDNota:[],
    P1:[],
    P2:[],
    P3:[],
    P4:[]
   })

  ngOnInit(): void {
    this.getNotas()
  }

  getNotas(){
    this.notasServices.find().subscribe(datos => this.notas = datos)
  }

  
  eliminar(id:string):void{
    this.notasServices.deleteById({id}).subscribe(()=>
    {this.notas=this.notas.filter(x => x.IDNota !== id);
     this.messageService.success('Te cagaste mi king, borramos tu registro!')
    })
  }

  cancel():void{
    this.messageService.info('No se borro ni madres!')
  }

  ocultar():void{
    this.visible=false;
    this.formNotas.reset()
  }

  mostrar(data:Nota):void{
    if(data.IDNota){
      this.formNotas.setValue(data)
    }
    this.visible=true;
  }

  mostrarModal():void{
    this.visible=true;
  }

  guardar():void{
    this.formNotas.setValue({...this.formNotas.value})
    this.notasServices.create({body:this.formNotas.value}).subscribe((datoAgregado) => {
      this.notas = [...this.notas, datoAgregado]
      this.messageService.success('Registro creado con exito')
    })
    this.formNotas.reset()
    console.log(this.formNotas.value)
    this.visible = false
  }
  
  actualizar():void{
    if(this.formNotas.value.IDNota){
      this.notasServices.updateById({'id': this.formNotas.value.IDClase,'body': this.formNotas.value}
        ).subscribe(()=>{this.notas = this.notas.map(obj => {
          if(obj.IDNota === this.formNotas.value.IDNota){
            return this.formNotas.value;
          }
          return obj;
        })
        this.messageService.success('Registro actualizado con exito')
        this.formNotas.reset()
      })
  } }


}
