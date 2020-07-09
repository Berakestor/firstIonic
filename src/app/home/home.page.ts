import { Component } from '@angular/core';
import { NotesService } from './notes.service';
import { Note } from './note.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  notes: Note[];

  constructor(private noteService: NotesService) {}

  ngOnInit() {
    this.notes = this.noteService.getAllNotes();
  }

  ionViewWillEnter() {
    this.notes = this.noteService.getAllNotes();
  }

}
