import { Component, OnInit, Output, EventEmitter } from '@angular/core';


import { Estudios } from '../../Estudios';

@Component({
  selector: 'app-estudios-nuevo',
  templateUrl: './estudios-nuevo.component.html',
  styleUrls: ['./estudios-nuevo.component.css']
})
export class EstudiosNuevoComponent implements OnInit {
  @Output() addEstudio: EventEmitter<Estudios> = new EventEmitter();
  titulo: string="";
  escuela:string="";

  constructor() { }

  ngOnInit(): void {
  }
 
 
  onSubmit(){
  if(this.titulo.length===0)
   {
     alert("vacio")
   }
   const {titulo, escuela}= this
   const newEstudio = {titulo, escuela}
   this.addEstudio.emit(newEstudio);
 }

}
