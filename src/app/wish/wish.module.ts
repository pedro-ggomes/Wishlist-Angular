import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { WishListItemComponent } from './wish-list-item/wish-list-item.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { FormsModule } from '@angular/forms';
import { WishService } from './wish.service';
import { WishComponent } from './wish.component';
import { EventService } from '../shared/services/EventService';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';



@NgModule({
  declarations: [
		AddWishFormComponent,
		WishListComponent,
		WishListItemComponent,
		WishFilterComponent,
    WishComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers:[
    WishService,
    EventService,
    provideHttpClient(withInterceptorsFromDi())
  ],
  exports:[
    WishComponent
  ]
})
export class WishModule { }
