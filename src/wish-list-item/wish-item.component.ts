import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'wish-list-item',
  standalone: true,
  imports: [],
  templateUrl: './wish-item.component.html',
  styleUrl: './wish-item.component.css'
})
export class WishListItemComponent {
  @Input() wishText!:string;
  @Input() fullfilled!:boolean;

  @Output() fullfilledChange = new EventEmitter<boolean>();

  toggleFullfilled(){
    this.fullfilled = !this.fullfilled;
    this.fullfilledChange.emit(this.fullfilled);
  }
}
