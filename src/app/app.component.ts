import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';

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
  
	filter:any;
  
  get visibleItems(): WishItem[] {
    return this.items.filter(this.filter)
  }
}
