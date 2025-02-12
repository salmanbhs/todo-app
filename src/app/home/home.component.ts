import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true
})
export class HomeComponent implements OnInit {
  completedTasks: number = 0;
  pendingTasks: number = 0;
  totalTasks: number = 0;

  todos: { text: string, completed: boolean }[] = [];

  ngOnInit() {
    // Fetch todos from localStorage
    const savedTodos = localStorage.getItem('todo');
    this.todos = savedTodos ? JSON.parse(savedTodos) : [];

    const completedTodos = this.todos.filter(todo => todo.completed);
    const pendingTodos = this.todos.filter(todo => !todo.completed);


    this.completedTasks = completedTodos.length;
    this.pendingTasks = pendingTodos.length;
    this.totalTasks = this.completedTasks + this.pendingTasks;
  }
}
