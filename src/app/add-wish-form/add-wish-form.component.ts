import { Component, Output, EventEmitter, Input } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { FormsModule } from '@angular/forms';

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
		this.addWish.emit(new WishItem(this.newWishText));
		this.newWishText = '';
	}
}
