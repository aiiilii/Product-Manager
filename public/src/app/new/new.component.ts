import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  // title: string;
  // price: string;
  // priceNum: number;
  // imageURL: string;

  newProduct = {
    title: "",
    price: "",
    imageURL: ""
  };

  added: boolean = false;
  addedProduct: any;

  errors = {
    name: {
      message: ""
    }
  };

  constructor(
    private _httpService: HttpService,
    private _router: Router
    ) { }

  ngOnInit() {
  }

  submit() {
    console.log('------------------------------------------------')
    // var newProduct = {title: this.title, price: parseFloat(this.price), imageURL: this.imageURL};
    let observable = this._httpService.addProduct(this.newProduct);
    observable.subscribe( (data: any) => {
      if ('error' in data) {
        this.errors = data['error'];
        console.log(this.errors);
      } else {
        console.log(this.newProduct);
        this._router.navigate(['/products']);
      }
    });
  }

}
