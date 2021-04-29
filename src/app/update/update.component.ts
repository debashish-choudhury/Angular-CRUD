import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { crudservice} from '../crudservice.service';
import {ActivatedRoute} from '@angular/router'; 

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {


 productForm=new FormGroup({
    id:new FormControl(''),
    name:new FormControl(''),
    description:new FormControl(''),
    price:new FormControl(''),
    quantity:new FormControl('')
  })
  constructor(private service:crudservice,private router:ActivatedRoute) { }

 ngOnInit(): void {
    //console.log(this.router.snapshot.params['productid']) 
    
    this.service.getById(this.router.snapshot.params['productid']).subscribe((data)=>
    this.productForm=new FormGroup({
      id:new FormControl(data["id"]),
      name:new FormControl(data["name"]),
      description:new FormControl(data["description"]),
      price:new FormControl(data["price"]),
      quantity:new FormControl(data["quantity"])
    })
  )
  }

  submitForm(){
    this.service.update(this.router.snapshot.params['productid'],this.productForm.value).subscribe((data)=>
      console.log(data,"Product Updated Successfully")
    )
  }


}
