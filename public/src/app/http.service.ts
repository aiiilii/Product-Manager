import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    console.log("In the service constructor");
  }

  getProducts() {
    return this._http.get('/api/products');
  }

  getOneProduct(id: string) {
    return this._http.get('/api/products/' + id);
  }

  addProduct(newProduct: any){
    return this._http.post('/api/products', newProduct)
  }

  updateProduct(id, product) {
    return this._http.put('/api/products/' + id, product);
  }

  removeProduct(id: string) {
    return this._http.delete(`/api/products/${id}`);
  }
}