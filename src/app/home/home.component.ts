import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import {crudservice} from '../crudservice.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];

  constructor(public service: crudservice) { }

  ngOnInit() {
    //console.log("hi");
    this.service.getAll().subscribe((data: Product[])=>{
        this.products = data;
    })  
  }
  delete(productId)
  {
    this.service.delete(productId).subscribe();
  }

}
