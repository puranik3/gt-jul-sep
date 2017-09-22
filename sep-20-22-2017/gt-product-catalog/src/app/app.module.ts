import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ProductService } from './services/product/product.service';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';

import { ReplaceCharacterPipe } from './shared/replace-character.pipe';
import { RatingStarsComponent } from './rating-stars/rating-stars.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product/product-details.component';
import { ReviewFormComponent } from './product/review-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ReplaceCharacterPipe,
    RatingStarsComponent,
    WelcomeComponent,
    ProductDetailsComponent,
    ReviewFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      [
        { path: "products", component: ProductListComponent },
        { path: "products/:id", component: ProductDetailsComponent },
        { path: "home", component: WelcomeComponent },
        { path: "", redirectTo: "/home", pathMatch: "full"  },
        { path:"** ", redirectTo: "/home", pathMatch: "full"  } // this can be used to display a Page not found (say PageNotFoundComponent)
      ]
    )
  ],
  providers: [ ProductService ], // only one product service object will be created and the entire application can now use the product service
  bootstrap: [ReviewFormComponent]
})
export class AppModule { }
