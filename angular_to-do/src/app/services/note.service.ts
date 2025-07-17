import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NoteService {
  private notesKey = 'tasks';
  private archieveKey = 'archievedTasks';

  getNotes() {
    return JSON.parse(localStorage.getItem(this.notesKey) || '[]');
  }

  saveNotes(notes: any[]) {
    localStorage.setItem(this.notesKey, JSON.stringify(notes));
  }

  getArchievedNotes() {
    return JSON.parse(localStorage.getItem(this.archieveKey) || '[]');
  }

  saveArchievedNotes(notes: any[]) {
    localStorage.setItem(this.archieveKey, JSON.stringify(notes));
  }

  archieveNote(note: any) {
    const notes = this.getNotes().filter((n: any) => n.name !== note.name);
    const archieved = this.getArchievedNotes();
    archieved.push(note);
    this.saveNotes(notes);
    this.saveArchievedNotes(archieved);
  }

  unarchieveNote(note: any) {
    const archieved = this.getArchievedNotes().filter((n: any) => n.name !== note.name);
    const notes = this.getNotes();
    notes.push(note);
    this.saveNotes(notes);
    this.saveArchievedNotes(archieved);
  }
}