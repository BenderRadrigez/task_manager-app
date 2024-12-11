import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { CredentialsService } from '../../services/credentials.service';

@Component({
  selector: 'app-add-note',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.scss',
})
export class AddNoteComponent {
  addNotesForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    isPriority: new FormControl(false),
    executionDate: new FormControl(''),
  });

  private httpService = inject(HttpService);
  private credService = inject(CredentialsService);

  addNote() {
    this.httpService
      .addNote(
        this.credService.credentioals?.name!,
        this.addNotesForm.getRawValue()
      )
      .subscribe();

    this.addNotesForm = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      isPriority: new FormControl(false),
      executionDate: new FormControl(''),
    });

    this.hide();
  }

  hide() {
    const addNoteWindow = document.querySelector('.add-task-window');
    addNoteWindow?.classList.add('hide');
  }
}
