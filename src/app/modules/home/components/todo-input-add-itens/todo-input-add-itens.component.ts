import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent {

  @Output() public emmitItemTaskList = new EventEmitter()

  public addItem: string = ""

  public submitItem(){
    console.log(this.emmitItemTaskList)

    this.addItem = this.addItem.trim()

    if(this.addItem){
      this.emmitItemTaskList.emit(this.addItem)
      this.addItem = ""
    }

  }
  
}
