import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  oneProduct = {
    title: "",
    price: "",
    imageURL: ""
  };

  errors = {
    name: {
      message: ""
    }
  };

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params.subscribe((data: any) => {
      console.log(data.id); // not in an object form
      this.getProduct(data.id);
    });
  }

  getProduct(id) {
    let observable = this._httpService.getOneProduct(id);
    observable.subscribe((data: any) => {
      if ('error' in data) {
        this.errors = data['error'];
        console.log(this.errors);
      } else {
        console.log("Got one product!", data);
        this.oneProduct = data['data'];
      }
    });
  }

  editProduct(id) {
    console.log(this.oneProduct);
    let observable = this._httpService.updateProduct(id, this.oneProduct);
    observable.subscribe((data: any) => {
      // debugger;
      if ('error' in data) {
        this.errors = data.error;
        console.log("WE HAD A PROBLEM");
        console.log(this.errors);
      } else {
        console.log("UPDATED");
        this._router.navigate(['/products']);
      }
    })
  }

  deleteProduct(id) {
    let observable = this._httpService.removeProduct(id);
    observable.subscribe((data: any) => {
      console.log("Deleting!", data);
      this._router.navigate(['/products']);
    });
  }
}
