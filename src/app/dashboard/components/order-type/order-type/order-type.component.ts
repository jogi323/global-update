import { Component, OnInit } from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-order-type',
  templateUrl: './order-type.component.html',
  styleUrls: ['./order-type.component.scss']
})
export class OrderTypeComponent implements OnInit {

  public orderTypeForm:FormGroup;
  public dc:AbstractControl;
  public warehouse:AbstractControl;
  public order_type: AbstractControl;
  
  constructor(private fb:FormBuilder) { 
    this.orderTypeForm = fb.group({
      'dc': ['', Validators.compose([Validators.required])],
      'warehouse': ['', Validators.compose([Validators.required])],
      'order_type': ['', Validators.compose([Validators.required])]
    });

    this.dc = this.orderTypeForm.controls['dc'];
    this.warehouse = this.orderTypeForm.controls['warehouse'];
    this.order_type = this.orderTypeForm.controls['order_type'];
  }

  ngOnInit() {
  }
  selectionType(type){
    console.log(type);
  };
  onSubmit(data) {
    console.log(data);
  }

}
