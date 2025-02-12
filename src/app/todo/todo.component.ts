import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf, CommonModule } from '@angular/common';

interface Todo {
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    CommonModule
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  newTodo: string = '';
  isEditing: boolean[] = [];
  editValue: string = '';

  ngOnInit() {
    const savedTodos = localStorage.getItem('todo');
    this.todos = savedTodos ? JSON.parse(savedTodos) : [];
    this.isEditing = new Array(this.todos.length).fill(false);
  }

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push({ text: this.newTodo.trim(), completed: false });
      this.isEditing.push(false);
      this.updateLocalStorage();
      this.newTodo = '';
    }
  }

  editTodo(index: number) {
    this.isEditing.fill(false); // Reset all edits
    this.isEditing[index] = true;
    this.editValue = this.todos[index].text;
  }

  saveEdit(index: number) {
    if (this.editValue.trim()) {
      this.todos[index].text = this.editValue;
      this.updateLocalStorage();
    }
    this.isEditing[index] = false;
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
    this.isEditing.splice(index, 1);
    this.updateLocalStorage();
  }

  toggleStatus(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    localStorage.setItem('todo', JSON.stringify(this.todos));
  }
}
