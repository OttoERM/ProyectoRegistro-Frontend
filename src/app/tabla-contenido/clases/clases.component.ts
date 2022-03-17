import { Component, OnInit } from '@angular/core';
import { Clases} from 'src/app/api/models';
import { ClasesControllerService } from 'src/app/api/services';
import { NzMessageService } from 'ng-zorro-antd/message';

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
    private messageService: NzMessageService)
  {
    this.clases=[]
  }

  ngOnInit(): void {
    this.getClases()
  }

  getClases(){
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
  }

  mostrar(data:Clases):void{
    this.visible=true;
  }

  mostrarModal():void{
    this.visible=true;
  }

  guardar():void{

  }

}
