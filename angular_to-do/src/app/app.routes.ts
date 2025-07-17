import { Routes } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { ArchieveComponent } from './components/archieve/archieve.component';
import { ReminderComponent } from './components/reminder/reminder.component';

export const routes: Routes = [
    { path: '', redirectTo: '/notes', pathMatch: 'full' }, 
   { path: 'notes', component: TodoComponent },
  { path: 'archieve', component: ArchieveComponent },
   { path: 'reminder', component: ReminderComponent }
];
