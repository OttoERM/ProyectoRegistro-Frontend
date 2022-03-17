import { Component, OnInit } from '@angular/core';
import { Nota } from 'src/app/api/models';
import { NotaControllerService } from 'src/app/api/services';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  notas:Nota[]

  constructor(private notasServices:NotaControllerService) {
    this.notas=[]
   }

  ngOnInit(): void {
    this.getNotas()
  }

  getNotas(){
    this.notasServices.find().subscribe(datos => this.notas = datos)
  }

}
