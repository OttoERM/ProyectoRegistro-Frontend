import { Component, OnInit } from '@angular/core';
import { Clases} from 'src/app/api/models';
import { ClasesControllerService } from 'src/app/api/services';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {

  clases:Clases[]

  constructor(private claseServices:ClasesControllerService) { 
    this.clases=[]
  }

  ngOnInit(): void {
    this.getClases()
  }

  getClases(){
    this.claseServices.find().subscribe(datos => this.clases = datos)
  }

}
