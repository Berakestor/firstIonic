import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.page.html',
  styleUrls: ['./note-create.page.scss'],
})
export class NoteCreatePage implements OnInit {
  noteId: number;
  title: string;
  details: string;
  imageUrl: string;

  constructor(
    private notesService: NotesService,
    private router: Router) { }

  ngOnInit() {
  }

  OnCreateNote() {
    this.noteId = this.notesService.getLength() + 1;
    this.notesService.createNote(this.noteId, this.title, this.details, this.imageUrl);
    this.router.navigate(['/home']);
  }

}
