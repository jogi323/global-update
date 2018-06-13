import { Component, OnInit } from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss']
})
export class QueryComponent implements OnInit {

  public queryForm:FormGroup;
  public dc:AbstractControl;
  public warehouse:AbstractControl;
  public orderType: AbstractControl;
  public productClass: AbstractControl;
  
  constructor(private fb:FormBuilder) { 
    this.queryForm = fb.group({
      'dc': [''],
      'warehouse': [''],
      'orderType': [''],
      'productClass': ['']
    });
    // , Validators.compose([Validators.required])
    this.dc = this.queryForm.controls['dc'];
    this.warehouse = this.queryForm.controls['warehouse'];
    this.orderType = this.queryForm.controls['orderType'];
    this.productClass = this.queryForm.controls['productClass'];
  }

  ngOnInit() {

  };
  
  checkValidation(){
    if(this.dc.value.length || this.warehouse.value.length || this.orderType.value.length || this.productClass.value.length){
      return false;
    }else {
      return true;
    }
  };

  onSubmit(data) {
    console.log(data);
  };

}
