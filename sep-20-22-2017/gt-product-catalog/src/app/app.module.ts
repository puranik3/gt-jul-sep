import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';

import { ReplaceCharacterPipe } from './shared/replace-character.pipe';
import { RatingStarsComponent } from './rating-stars/rating-stars.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ReplaceCharacterPipe,
    RatingStarsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ProductListComponent]
})
export class AppModule { }
