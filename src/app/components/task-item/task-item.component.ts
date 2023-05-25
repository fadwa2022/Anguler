import { Component, Input ,Output,EventEmitter } from '@angular/core';
import {Task} from '../../Task'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
@Input() task!: Task;
@Output() onDeleteTask:EventEmitter <Task> = new EventEmitter()
@Output() onToggeleReminder:EventEmitter <Task> = new EventEmitter()

faTimes = faTimes;
 constructor(){
 }

onDelete(task  : any){
 this.onDeleteTask.emit(task);
}
onToggele(task :any){
  this.onToggeleReminder.emit(task);
}
}
