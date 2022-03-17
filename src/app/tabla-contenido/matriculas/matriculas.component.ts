import { Component, OnInit } from '@angular/core';
import { Matricula } from 'src/app/api/models';
import { MatriculaControllerService } from 'src/app/api/services';

@Component({
  selector: 'app-matriculas',
  templateUrl: './matriculas.component.html',
  styleUrls: ['./matriculas.component.css']
})
export class MatriculasComponent implements OnInit {

  matriculas:Matricula[]

  constructor(private matriculasServices:MatriculaControllerService) {
    this.matriculas=[]
   }

  ngOnInit(): void {
    this.getMatriculas()
  }

  getMatriculas(){
    this.matriculasServices.find().subscribe(datos => this.matriculas=datos)
  }

}
