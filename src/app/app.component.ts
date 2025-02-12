import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {TodoComponent} from './todo/todo.component';

@Component({
  selector: 'app-root',
  imports: [TodoComponent, RouterOutlet],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo-app';

  constructor(private router: Router) {}


  goToHome() {
    this.router.navigate(['/home']);
  }

  goToTodo() {
    this.router.navigate(['/todo']);
  }
}
