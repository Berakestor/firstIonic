import { Injectable } from '@angular/core';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private notes: Note[] = [
    {
      id: 1,
      title: 'First Note',
      details: 'This is my first note',
      imageUrl: 'https://i.guim.co.uk/img/media/7a633730f5f90db3c12f6efc954a2d5b475c3d4a/0_138_5544_3327/master/5544.jpg?width=1920&quality=85&auto=format&fit=max&s=28e44fd4e328c9c30918ca277fb38308'
    },
    {
      id: 2,
      title: 'Second Note',
      details: 'That is interesting',
      imageUrl: 'https://www.miss.at/wp-content/uploads/2019/05/Grumpy-Cat-ist-tot.jpg'
    }
  ]

  constructor() { }

  getAllNotes() {
    return [...this.notes];
  }

  getNote(noteId: number) {
    return {
      ...this.notes.find(note => {
      return note.id === noteId;
    })};
  }

  deleteNote(noteId: number) {
    this.notes = this.notes.filter(note => {
      return note.id !== noteId; 
    });
  }

  getLength() {
    return this.notes.length;
  }

  createNote(noteId: number, title: string, details: string, imageUrl: string) {
    this.notes = [...this.notes, {
      id: noteId,
      title: title,
      details: details,
      imageUrl: imageUrl
    }];

  }
}
