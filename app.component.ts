import { Component, OnInit } from '@angular/core';
import { CardComponent } from './card/card.component';
import { RouterOutlet } from '@angular/router';
import { CardListComponent } from './card-list/card-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  CardComponent, CardListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'prodcut-app'
}