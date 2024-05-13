import { Component, Input, OnInit } from '@angular/core';
import { Root2 } from '../app.component'; // this is the import fr the interface we made

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Root2; // we pass it in here

  constructor() {}

  ngOnInit() {}
}
