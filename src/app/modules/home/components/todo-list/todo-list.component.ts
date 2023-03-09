import { Component, DoCheck } from '@angular/core';
import { last } from 'rxjs';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck{

  ngDoCheck(): void {
    this.setLocal()

  }
  public taskList : Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]')

  public deleteItemTaskList(event: number){
    this.taskList.splice(event, 1)
  }

  public deleteAllTasks(){
    const confirm = window.confirm("Deseja deletar todas as tarefas?")
    this.taskList = []
  }

  setEmit(event:string){

    this.taskList.push({task: event, checked: false})
    console.log(event)

  }

  public validateInput(event:string, index:number){
    if(!event.length){
      const confirm = window.confirm("Task vazia, deseja deletar?")
      if(confirm){
        this.deleteItemTaskList(index)
      }
    }
  }

  public setLocal(){
    if(this.taskList)
    this.taskList.sort( (first,last) => Number(first.checked) - Number(last.checked) )
    localStorage.setItem("list", JSON.stringify(this.taskList))

  }
 }
