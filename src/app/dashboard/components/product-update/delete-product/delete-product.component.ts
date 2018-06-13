import { Component, OnInit } from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {

  public deleteProductForm:FormGroup;
  public pClass:AbstractControl;
  public pLevel:AbstractControl;

  constructor(private fb:FormBuilder) { 
    this.deleteProductForm = fb.group({
      'pClass': ['', Validators.compose([Validators.required])],
      'pLevel': ['', Validators.compose([Validators.required])]
    });

    this.pClass = this.deleteProductForm.controls['pClass'];
    this.pLevel = this.deleteProductForm.controls['pLevel'];
  }

  ngOnInit() {
  }
  onSubmit(data) {
    console.log(data);
  }

}
