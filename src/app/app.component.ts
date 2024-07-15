import { Component, OnInit } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';
import { EventService } from './../shared/services/EventService'
import { WishService } from './wish.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  items!: WishItem[];
  
  filter:any;
  
  constructor(private events:EventService, private wishService:WishService){
    this.events.listen('removeWish',(wish:any)=>{
      let index = this.items.indexOf(wish);
      this.items.splice(index,1);
    })
  }

  ngOnInit(): void {
    this.wishService.getWishes().subscribe((data:any) => {
      this.items = data;
    })
  }
  
  
}
