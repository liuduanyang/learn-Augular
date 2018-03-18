import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  @Input() todo;
  @Input() over;
  @Output() deletedata=new EventEmitter();
  @Output() overadddata=new EventEmitter();
  @Output() overadddatato=new EventEmitter();
  @Output() deletedatato=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  del(i){
    this.deletedata.emit(i);
  }
  overadd(i){
    this.overadddata.emit(i);
  }
  overaddto(i){
    this.overadddatato.emit(i);
  }
  delto(i){
    this.deletedatato.emit(i);
  }
}
