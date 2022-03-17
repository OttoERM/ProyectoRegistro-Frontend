import { Component, OnInit } from '@angular/core';
import { Clases} from 'src/app/api/models';
import { ClasesControllerService } from 'src/app/api/services';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {

  clases:Clases[];
  visible:boolean=false;

  constructor
  ( private claseServices:ClasesControllerService, 
    private messageService: NzMessageService,
    private fb:FormBuilder) {
    this.clases=[]
  }

  formClases: FormGroup = this.fb.group({
    IDClase:[],
    nombreClase:[],
    IDDocente:[],
    IDNota:[]
  })

  ngOnInit(): void {
    this.claseServices.find().subscribe(datos => this.clases = datos)
  }

  eliminar(id:string):void{
    this.claseServices.deleteById({id}).subscribe(()=>
    {this.clases=this.clases.filter(x => x.IDClase !== id);
     this.messageService.success('Te cagaste mi king, borramos tu registro!')
    })
  }

  cancel():void{
    this.messageService.info('No se borro ni madres!')
  }

  ocultar():void{
    this.visible=false;
    this.formClases.reset()
  }

  mostrar(data:Clases):void{
    if(data.IDClase){
      this.formClases.setValue(data)
    }
    this.visible=true;
  }

  mostrarModal():void{
    this.visible=true;
  }

  guardar():void{
    this.formClases.setValue({...this.formClases.value})
    delete this.formClases.value.id
    this.claseServices.create({body:this.formClases.value}).subscribe((datoAgregado) => {
      this.clases = [...this.clases, datoAgregado]
      this.messageService.success('Registro creado con exito')
    })
    this.formClases.reset()
    console.log(this.formClases.value)
    this.visible = false
  }
  
  actualizar():void{
    if(this.formClases.value.IDClase){
      this.claseServices.updateById({'id': this.formClases.value.IDClase,'body': this.formClases.value}
        ).subscribe(()=>{this.clases = this.clases.map(obj => {
          if(obj.IDClase === this.formClases.value.IDClase){
            return this.formClases.value;
          }
          return obj;
        })
        this.messageService.success('Registro actualizado con exito')
        this.formClases.reset()
      })
  } }
  
}
