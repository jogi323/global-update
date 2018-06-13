import { Component, OnInit } from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  public updateForm:FormGroup;
  public dc:AbstractControl;
  public warehouse:AbstractControl;
  public orderType: AbstractControl;
  
  constructor(private fb:FormBuilder) { 
    this.updateForm = fb.group({
      'dc': ['', Validators.compose([Validators.required])],
      'warehouse': ['', Validators.compose([Validators.required])],
      'orderType': ['', Validators.compose([Validators.required])]
    });
    
    this.dc = this.updateForm.controls['dc'];
    this.warehouse = this.updateForm.controls['warehouse'];
    this.orderType = this.updateForm.controls['orderType'];
  }

  ngOnInit() {

  };
  
  onSubmit(data) {
    console.log(data);
  };

}
