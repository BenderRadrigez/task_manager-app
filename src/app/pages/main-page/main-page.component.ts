import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { NavMenuComponent } from '../../components/nav-menu/nav-menu.component';
import { AddNoteComponent } from '../../components/add-note/add-note.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [NavMenuComponent, AddNoteComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {}
