import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle : string = 'Product List';
  imageWidth: number = Math.random() * 100; // random width for image between 0 - 100
  imageDisplay: boolean = true;
  _searchKey: string = '';
  
  constructor() {
    console.log( '[constructor called] ProductListCOmponent object has been created by Angular framework at time ', (new Date).getTime() );
  }

  // network calls etc. to fetch data for the view
  ngOnInit() {
    console.log( '[ngOnInit() called] ProductListCOmponent object has been initialized Angular framework at time ', (new Date).getTime() );
  }

  get searchKey() : string {
      return this._searchKey;
  }

  set searchKey( value ) {
    this._searchKey = value;
    var that = this;
    this.filteredProducts = this.products.filter(function( product ) {
        return product.productName.toUpperCase().indexOf( that._searchKey.toUpperCase() ) !== -1;
    });
  }

  startDate: Date = new Date();

  products = [
      {
          "productId": 1,
          "productName": "Leaf Rake",
          "productCode": "GDN-0011",
          "releaseDate": "March 19, 2016",
          "description": "Leaf rake with 48-inch wooden handle.",
          "price": 19.95,
          "starRating": 3.2,
          "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
      },
      {
          "productId": 2,
          "productName": "Garden Cart",
          "productCode": "GDN-0023",
          "releaseDate": "March 18, 2016",
          "description": "15 gallon capacity rolling garden cart",
          "price": 32.99,
          "starRating": 4.2,
          "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
      },
      {
          "productId": 5,
          "productName": "Hammer",
          "productCode": "TBX-0048",
          "releaseDate": "May 21, 2016",
          "description": "Curved claw steel hammer",
          "price": 8.9,
          "starRating": 4.8,
          "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
      },
      {
          "productId": 8,
          "productName": "Saw",
          "productCode": "TBX-0022",
          "releaseDate": "May 15, 2016",
          "description": "15-inch steel blade hand saw",
          "price": 11.55,
          "starRating": 3.7,
          "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
      },
      {
          "productId": 10,
          "productName": "Video Game Controller",
          "productCode": "GMG-0042",
          "releaseDate": "October 15, 2015",
          "description": "Standard two-button video game controller",
          "price": 35.95,
          "starRating": 4.6,
          "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
      }
  ];
  filteredProducts: any[] = this.products;

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

  // creates and returns a new array with only products whose name matches the search key
  filterProducts() {

  }
}
