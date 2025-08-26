import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todo-list',
  imports: [CommonModule,FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  tasks: string[] = [];
  newTask: string = '';

  addTask() {
    if( !this.newTask.trim() ) return; // Prevent adding empty tasks
    this.tasks.push(this.newTask);
    this.newTask = '';
  }
  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }

}
