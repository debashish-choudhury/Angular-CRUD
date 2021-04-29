import { Component, OnInit } from '@angular/core';
import { crudservice} from '../crudservice.service'
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  
productForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    public crudService: crudservice
  ){ }
  ngOnInit() {
      this.productForm = this.fb.group({
        id:[''],
      name: [''],
      description: [''],
      price: [''],
      quantity: [''],    
    })
  }

  submitForm() {
    this.crudService.create(this.productForm.value).subscribe(res => {
      console.log('Product created!'),
      this.router.navigateByUrl('/home/')
    });
  }

}
