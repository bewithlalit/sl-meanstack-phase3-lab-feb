import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient) { }

  getAllProduct():Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:9090/productDetails")
  }

  storeProductInfo(product:Product):Observable<string> {
    return this.http.post("http://localhost:9090/productStore", product,{responseType: 'text'});
  }

  deleteProductById(id:any):Observable<string> {
    return this.http.delete("http://localhost:9090/deleteProductInfo/"+id, {responseType: "text"});
  }

  updateProduct(product:any):Observable<string> {
    return this.http.patch("http://localhost:9090/updateProductDetails",product, {responseType: "text"});
  }
}
