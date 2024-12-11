import { Component, inject, Input } from '@angular/core';
import { INote } from '../../interfaces/note';
import { HttpClient } from '@angular/common/http';
import { CredentialsService } from '../../services/credentials.service';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [],
  templateUrl: './note.component.html',
  styleUrl: './note.component.scss',
})
export class NoteComponent {
  @Input() item: INote | any;

  httpService = inject(HttpClient);
  credService = inject(CredentialsService);
  deleteNote() {
    this.httpService
      .delete(
        `http://localhost:3000/api/users/${this.credService.credentioals?.name}/notes/${this.item?.id}`
      )
      .subscribe();
  }
}
