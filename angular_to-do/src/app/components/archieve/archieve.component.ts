import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-archieve',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './archieve.component.html',
  styleUrls: ['./archieve.component.css']
})
export class ArchieveComponent implements OnInit {
  archievedTasks: any[] = [];

  constructor(private noteService: NoteService) {}

  ngOnInit() {
    this.archievedTasks = this.noteService.getArchievedNotes();
  }

  unarchieveTask(task: any) {
    this.noteService.unarchieveNote(task);
    this.archievedTasks = this.noteService.getArchievedNotes();
  }
}
