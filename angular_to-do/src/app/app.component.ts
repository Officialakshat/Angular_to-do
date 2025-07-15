import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
// import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { ReminderComponent } from './components/reminder/reminder.component';
import { ArchieveComponent } from './components/archieve/archieve.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, TodoComponent, ReminderComponent, ArchieveComponent, ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_to-do';
}
