import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {ESTUDIOS} from '../../../../../src/app/components/mockEstudios'
import { Estudios } from '../../Estudios';

@Component({
  selector: 'app-estudios-item',
  templateUrl: './estudios-item.component.html',
  styleUrls: ['./estudios-item.component.css']
})
export class EstudiosItemComponent implements OnInit {
@Input() estudios: Estudios=ESTUDIOS[0];
@Output() onDeleteEstudio: EventEmitter<Estudios>= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(estudios:Estudios){
    this.onDeleteEstudio.emit(estudios);
  }
}
