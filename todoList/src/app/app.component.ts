import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoList=[];
  overList=[];
  fun(data){
    this.todoList=data;
  }
  del(i){
    this.todoList.splice(i,1);
  }
  overadd(i){
    this.overList.push(this.todoList[i]);
    this.todoList.splice(i,1);
  }
  overaddto(i){
    this.todoList.push(this.overList[i]);
    this.overList.splice(i,1);
  }
  delto(i){
    this.overList.splice(i,1);
  }
}
