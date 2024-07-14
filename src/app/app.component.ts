import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';
import events from './../shared/services/EventService'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem("Start studying today",true),
		new WishItem("Learn Angular"),
		new WishItem("Complete Envato Tuts+'s course"),
		new WishItem("See freecodecamp's CI/CD part of the course"),
		new WishItem("Make at least another 2 Angular apps until the interview"),
		new WishItem("Get the job")
	]

  constructor(){
    events.listen('removeWish',(wish:any)=>{
      let index = this.items.indexOf(wish);
      this.items.splice(index,1);
    })
  }
  
	filter:any;
  
}
