import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrls: ['./rating-stars.component.css']
})
export class RatingStarsComponent implements OnChanges {
  starWidth: number = 86;

  @Input() rating;

  constructor() { }

  ngOnChanges() {
    this.starWidth = this.rating / 5 * 86;
  }

}
