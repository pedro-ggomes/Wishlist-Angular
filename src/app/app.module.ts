import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddWishFormComponent } from '../add-wish-form/add-wish-form.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WishListItemComponent } from './wish-list-item/wish-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AddWishFormComponent,
    WishListComponent,
    WishFilterComponent,
    WishListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
