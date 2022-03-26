import { Component, OnInit } from '@angular/core';

import { EstudiosService } from 'src/app/service/estudios.service';
import { Estudios } from '../Estudios'
@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  estudios: Estudios[] = [];


  constructor(private estudiosService: EstudiosService) { }

  ngOnInit(): void {

    this.estudiosService.verEstudios().subscribe((estudios)=>
    this.estudios = estudios
    );
  }

  delete(estudios:Estudios){
    this.estudiosService.borrar(estudios).subscribe(()=>{
      this.estudios = this.estudios.filter(e=> e.id !== estudios.id)
    })
  }


    addEstudio(estudio: Estudios){
      this.estudiosService.add(estudio).subscribe((data)=>{
        this.estudios.push(data);
      }

      )

      
    }
    
      
}
