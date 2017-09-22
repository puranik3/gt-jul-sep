import { Component, OnChanges, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrls: ['./rating-stars.component.css']
})
export class RatingStarsComponent implements OnChanges {
  starWidth: number = 86;

  @Input() rating : number;
  @Output() ratingClick : EventEmitter<number> = new EventEmitter<number>();

  /*ngOnInit() { 
    this.starWidth = this.rating / 5 * 86;
  }*/

  ngOnChanges() {
    this.starWidth = this.rating / 5 * 86;
  }

  onClick() {
    console.log( 'onCLick() of rating stars' );
    this.ratingClick.emit( this.rating );
  }
}
