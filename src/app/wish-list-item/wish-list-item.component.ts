import { Component, Input, Output, EventEmitter } from '@angular/core';
import events from './../../shared/services/EventService'
import { WishItem } from '../../shared/models/wishItem';
@Component({
  selector: 'wish-list-item',
  standalone: false,
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {
  @Input() wish!:WishItem;
  @Input() fullfilled!:boolean;

  @Output() fullfilledChange = new EventEmitter<boolean>();

  get cssClass(){
    //return this.fullfilled ? ['strikeout','text-muted'] : [];
    return {'strikeout text-muted':this.wish.isComplete}
  }

  removeWish(){
    events.emit('removeWish',this.wish)
  }

  toggleFullfilled(){
    this.wish.isComplete = !this.wish.isComplete;
  }
}
