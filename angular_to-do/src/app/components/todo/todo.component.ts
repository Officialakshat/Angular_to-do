import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule, ],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  newTask: string = '';
  tasks: { name: string; completed: boolean; read?: boolean }[] = [];
  editIndex: number | null = null;
  editTaskName: string = '';

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
  
  archiveTask(task: any) {
  // Implement your archiving logic here
  // For example, move the task to a separate array or set a property
  task.archived = true;
  this.saveTasks();
}

  deleteTask(task: any) {
    this.tasks = this.tasks.filter(t => t !== task);
    this.saveTasks();
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  startEdit(index: number) {
    this.editIndex = index;
    this.editTaskName = this.tasks[index].name;
  }

  saveEdit(index: number) {
    if (this.editTaskName.trim()) {
      this.tasks[index].name = this.editTaskName;
      this.saveTasks();
      this.editIndex = null;
      this.editTaskName = '';
    }
  }

  cancelEdit() {
    this.editIndex = null;
    this.editTaskName = '';
  }

  markAsRead(task: any) {
    task.read = true;
    this.saveTasks();
  }
}

