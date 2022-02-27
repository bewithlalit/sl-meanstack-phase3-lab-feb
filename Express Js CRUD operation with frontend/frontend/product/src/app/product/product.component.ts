import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productRef = new FormGroup({
    pid: new FormControl(),
    pname: new FormControl(),
    price: new FormControl(),
    url: new FormControl()
  })

  products:Array<Product> = [];
  storeMsg: string ='';
  deleteMsg: string = '';
  isUpdate: boolean = false;
  pid: number = 0;
  price: number = 0;
  url: string = '';
  updateResult: string = ''

  constructor(public productApi: ProductService) { }

  ngOnInit(): void {
    this.getAllProductDetails();
  }

  getAllProductDetails() {
    this.productApi.getAllProduct().subscribe(result=>this.products = result);
  }

  storeProduct() {
    let product = this.productRef.value;
    this.productApi.storeProductInfo(product).subscribe({
      next: (result) => this.storeMsg = result,
      error: (error) => console.log(error),
      complete: () => this.getAllProductDetails()
    })
    this.productRef.reset();
  }

  onDelete(id:any) {
    this.productApi.deleteProductById(id).subscribe({
      next: (result) => this.deleteMsg = result,
      error: (error) => console.log(error),
      complete: () => this.getAllProductDetails()
    });
  }

  onUpdate(product:Product) {
    this.isUpdate = true;
    this.pid = product.pid;
    this.price = product.price;
    this.url = product.url;
    /* this.productApi.updateProduct(product).subscribe({
      next: (result) => console.log(result)
    }) */
  }

  onUpdateForDb( ){
    let product = {
      pid:this.pid,
      price: this.price,
      url: this.url
    }
    console.log(product);
    this.productApi.updateProduct(product).subscribe({
      next: (result) => this.updateResult = result,
      error: (error) => console.log(error),
      complete: () => this.getAllProductDetails()
    })
    this.isUpdate = false;
  }
}
