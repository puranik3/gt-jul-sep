import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
  //providers: [ ProductService ]
})
export class ProductListComponent implements OnInit {
  pageTitle : string = 'Product List';
  imageWidth: number = Math.random() * 100; // random width for image between 0 - 100
  imageDisplay: boolean = true;
  _searchKey: string = '';
  private _productService: ProductService;

startDate: Date = new Date();  
products: any[];
filteredProducts: any[] = this.products;  
  
  constructor( productService: ProductService ) {
    console.log( '[constructor called] ProductListCOmponent object has been created by Angular framework at time ', (new Date).getTime() );
    this._productService = productService;
  }

  // network calls etc. to fetch data for the view
  ngOnInit() {
    console.log( '[ngOnInit() called] ProductListCOmponent object has been initialized Angular framework at time ', (new Date).getTime() );

    this._productService.getProducts().subscribe(
        response => {
            this.products = response;
            this.filteredProducts = this.products;
        },
        error => console.log( error ),
        () => console.log( 'completed' )
    );

    //this.products = this._productService.getProducts();
    //console.log( this.products );
    this.filteredProducts = this.products;
  }

  get searchKey() : string {
      return this._searchKey;
  }

  set searchKey( value ) {
    this._searchKey = value;
    //var that = this; // if we use arrow functions then the context of enclosing function automatically becomes the context of enclosed functions
    this.filteredProducts = this.products.filter(product => {
        return product.productName.toUpperCase().indexOf( this._searchKey.toUpperCase() ) !== -1;
    });
  }

  toggleImage() : void {
      this.imageDisplay = !this.imageDisplay;
  }

  transformProductId(productId) : string {
      return 'PID-' + productId;
  }

  removeProduct( product ) {
      console.log( 'Product is ', product );
      var indexOfSelectedProduct = this.products.indexOf(product);
      this.products.splice( indexOfSelectedProduct, 1 );
  }

  onRatingClick( $event ) {
      console.log( 'onRatingClick called' );
      alert( 'You clicked on product with rating = ' + $event );
  }

  incrProductRating(product) {
      product.starRating++;
  }
}
