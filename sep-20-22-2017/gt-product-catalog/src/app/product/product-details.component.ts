import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  productId: number;

  constructor( private _productService: ProductService, private _activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.productId = +this._activatedRoute.snapshot.params['id'];
    this.product = this._productService.getProduct( this.productId );
  }
}
