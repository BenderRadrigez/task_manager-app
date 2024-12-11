import { Component, inject, OnInit } from '@angular/core';
import { CredentialsService } from '../../services/credentials.service';
import { NoteComponent } from '../note/note.component';
import { IUser } from '../../interfaces/user';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [NoteComponent],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss',
})
export class NavMenuComponent implements OnInit {
  private httpService = inject(HttpService);
  private credService = inject(CredentialsService);

  username: string = inject(CredentialsService).credentioals?.name!;
  notes: [] = [];

  constructor() {}

  ngOnInit(): void {
    this.httpService.getNotes(this.username).subscribe((data: []) => {
      this.notes = data;
      console.log(this.notes);
    });

    this.addNotesToCredentials(this.notes);
  }

  addNotes() {
    const addNoteWindow = document.querySelector('.add-task-window');
    addNoteWindow?.classList.remove('hide');
  }

  private addNotesToCredentials(notes: []) {
    const user: IUser = this.credService.credentioals!;
    user.notes = notes;
    this.credService.setCredentials(user);
  }
}
