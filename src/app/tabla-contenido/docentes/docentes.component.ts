import { Component, OnInit } from '@angular/core';
import { Docentes } from 'src/app/api/models';
import { DocentesControllerService } from 'src/app/api/services';

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.css']
})
export class DocentesComponent implements OnInit {

  docentes:Docentes[]

  constructor(private docentesServices:DocentesControllerService) {
    this.docentes=[]
   }

  ngOnInit(): void {
    this.getDocentes()
  }

  getDocentes(){
    this.docentesServices.find().subscribe(datos => this.docentes = datos)
  }

}
