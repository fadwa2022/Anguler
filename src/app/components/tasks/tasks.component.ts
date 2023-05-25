import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';
// import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],

})
export class TasksComponent implements OnInit {
  tasks: Task[] =  [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id
        !== task.id))
      );
  }
  toggeleReminder(task: Task) {
   task.reminder = !task.reminder;
   this.taskService
   .updateTaskReminder(task)
   .subscribe();
  }
}
