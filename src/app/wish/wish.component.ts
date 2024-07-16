import { Component, OnInit } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';
import { EventService } from '../shared/services/EventService';
import { WishService } from '../wish/wish.service';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.css'
})
export class WishComponent implements OnInit {
  items: WishItem[] = [];
  
  filter:any;
  
  constructor(private events:EventService, private wishService:WishService){
    this.events.listen('removeWish',(wish:any)=>{
      let index = this.items.indexOf(wish);
      this.items.splice(index,1);
    })
  }

  ngOnInit(): void {
    this.wishService.getWishes().subscribe({
      next: (data:WishItem[] | any) => this.items = data,
      error: (error) => alert(error.message)
    })
  }
}
