import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/api/models';
import { CursoControllerService } from 'src/app/api/services';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  curso:Curso[]

  constructor(private cursosServices:CursoControllerService) {
    this.curso=[]
   }

  ngOnInit(): void {
    this.getCursos()
  }

  getCursos(){
    this.cursosServices.find().subscribe(datos => this.curso = datos)
  }

}
