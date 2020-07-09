import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'note-create',
    loadChildren: () => import('./note-create/note-create.module').then( m => m.NoteCreatePageModule)
  },
  {
    path: ':noteId',
    loadChildren: () => import('./note-details/note-details.module').then( m => m.NoteDetailsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
