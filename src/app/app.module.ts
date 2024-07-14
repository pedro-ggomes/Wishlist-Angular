import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EventService } from '../shared/services/EventService';
import { WishListComponent } from './wish-list/wish-list.component';
import { WishListItemComponent } from './wish-list-item/wish-list-item.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    AddWishFormComponent,
    WishListComponent,
    WishListItemComponent,
    WishFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
