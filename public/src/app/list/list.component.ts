import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products: [];
  deletedProduct: any;

  constructor(
    private _httpService: HttpService
  ) { 
    this.products = [];
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    let observable = this._httpService.getProducts();
    observable.subscribe((data: any) => {
      console.log("Got our data!", data);
      // let temp = data['data'].sort();
      this.products = data['data'];
      console.log(this.products);
    })
  }

  deleteProduct(id) {
    let observable = this._httpService.removeProduct(id);
    observable.subscribe((data: any) => {
      console.log("Deleting!", data);
      this.getProducts();
    });
  }

}
