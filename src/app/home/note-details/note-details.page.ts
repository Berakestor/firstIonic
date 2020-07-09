import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesService } from '../notes.service';
import { Note } from '../note.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.page.html',
  styleUrls: ['./note-details.page.scss'],
})
export class NoteDetailsPage implements OnInit {
  loadedNote: Note;

  constructor(
    private activatedRoute: ActivatedRoute,
    private noteService: NotesService,
    private router: Router,
    private alertCtrl: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('noteId')) {
        // redirect
        this.router.navigate(['/home']);
        return;
      }

      const noteId = paramMap.get('noteId');
      this.loadedNote = this.noteService.getNote(parseInt(noteId));
    });
  }

  onDeleteNote() {
    this.alertCtrl.create({header: 'Are you sure?', message:'Do you really want to delete this note?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.noteService.deleteNote(this.loadedNote.id);
            this.router.navigate(['./home']);
          }
        }
      ]  
    }).then(alertEL => {
      alertEL.present();
    })
  }
}
