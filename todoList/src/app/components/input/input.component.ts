import { Component, OnInit,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  content:String;

  todoList=[];

  @Output( ) chunkdata = new EventEmitter( );

  inputData(){
    this.todoList.push(this.content);
    this.content='';
    this.chunkdata.emit(this.todoList);
  }
}
