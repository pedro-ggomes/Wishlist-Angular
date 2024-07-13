import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';


@Component({
  selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet,
    CommonModule,
    FormsModule,
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent
  ],
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
  
  
  
	filter = () => {};
  
  get visibleItems(): WishItem[] {
    return this.items.filter(this.filter)
  }
}

