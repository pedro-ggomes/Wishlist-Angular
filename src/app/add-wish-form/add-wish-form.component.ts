import { Component, Output, EventEmitter, Input } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';
import { FormsModule } from '@angular/forms';

function getRandomInt(min:number, max:number) {
	const minCeiled = Math.ceil(min);
	const maxFloored = Math.floor(max);
	return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
@Component({
	selector: 'add-wish-form',
	standalone: false,
	templateUrl: './add-wish-form.component.html',
	styleUrl: './add-wish-form.component.css'
})
export class AddWishFormComponent {
	@Output() addWish = new EventEmitter<WishItem>()

	newWishText:string = '';

	addNewWish(){
		this.addWish.emit(new WishItem(getRandomInt(6,20),this.newWishText));
		this.newWishText = '';
	}
}
