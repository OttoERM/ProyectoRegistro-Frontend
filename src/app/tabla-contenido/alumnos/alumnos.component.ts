import { Component, OnInit } from '@angular/core';
import { Alumnos } from 'src/app/api/models';
import { AlumnosControllerService } from 'src/app/api/services';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  alumnos:Alumnos[]

  constructor(private alumnosServices:AlumnosControllerService) {
    this.alumnos=[]
   }

  ngOnInit(): void {
    this.getAlumnos()
  }

  getAlumnos(){
    this.alumnosServices.find().subscribe(datos => this.alumnos = datos)
  }

}
