import { Component, OnInit } from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {

  public productForm:any;
  // public pClass:AbstractControl;
  // public pLevel:AbstractControl;
  // public selectedProduct: object;

  constructor(private fb:FormBuilder) { 
    // this.deleteProductForm = fb.group({
    //   'pClass': ['', Validators.compose([Validators.required])],
    //   'pLevel': ['', Validators.compose([Validators.required])]
    // });

    // this.pClass = this.deleteProductForm.controls['pClass'];
    // this.pLevel = this.deleteProductForm.controls['pLevel'];
    this.productForm = {
      pClass:'',
      pLevel:''
    }
    
  }

  ngOnInit() {
    // this.selectedProduct = {
    //   pClass: 'O-Diary',pLevel:'33-40'
    // };
    this.productForm.pClass = 'O-Diary';
    this.productForm.pLevel = '33-40';
    
  }
  onSubmit(data) {
    console.log(data);
  }

}
