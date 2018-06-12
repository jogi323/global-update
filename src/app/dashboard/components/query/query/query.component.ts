import { Component, OnInit } from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss']
})
export class QueryComponent implements OnInit {

  public TransWaveForm:FormGroup;
  public dc:AbstractControl;
  public warehouse:AbstractControl;
  public orderType: AbstractControl;
  public productClass: AbstractControl;
  
  constructor(private fb:FormBuilder) { 
    this.TransWaveForm = fb.group({
      'dc': ['', Validators.compose([Validators.required])],
      'warehouse': ['', Validators.compose([Validators.required])],
      'orderType': ['', Validators.compose([Validators.required])],
      'productClass': ['', Validators.compose([Validators.required])]
    });

    this.dc = this.TransWaveForm.controls['dc'];
    this.warehouse = this.TransWaveForm.controls['warehouse'];
    this.orderType = this.TransWaveForm.controls['orderType'];
    this.productClass = this.TransWaveForm.controls['productClass'];
  }

  ngOnInit() {
  }
  onSubmit(data) {
    console.log(data);
  }

}
