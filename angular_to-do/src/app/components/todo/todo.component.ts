import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  newTask: string = '';
  tasks: { name: string; completed: boolean }[] = [];

  ngOnInit() {
    const data = localStorage.getItem('tasks');
    if (data) {
      this.tasks = JSON.parse(data);
    }
  }

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({ name: this.newTask, completed: false });
      this.saveTasks();
      this.newTask = '';
    }
  }

  deleteTask(task: any) {
    this.tasks = this.tasks.filter(t => t !== task);
    this.saveTasks();
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}

