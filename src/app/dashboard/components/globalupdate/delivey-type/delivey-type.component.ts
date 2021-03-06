import { Component, OnInit } from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { ApiService } from '../../../../shared/services/api.service';

@Component({
  selector: 'app-delivey-type',
  templateUrl: './delivey-type.component.html',
  styleUrls: ['./delivey-type.component.scss']
})
export class DeliveyTypeComponent implements OnInit {

  public deliveryForm:FormGroup;
  public dc:AbstractControl;
  public warehouse:AbstractControl;
  public delivery_type: AbstractControl;
  private validDeliveryTypeId: any[] = [];
  public dcList: any[] = [];
  public warehouseList: any[] = [];
 
  constructor(private fb:FormBuilder, private api: ApiService) { 
    this.deliveryForm = fb.group({
      'dc': ['', Validators.compose([Validators.required])],
      'warehouse': ['', Validators.compose([Validators.required])],
      'delivery_type': ['', Validators.compose([Validators.required])]
    });

    this.dc = this.deliveryForm.controls['dc'];
    this.warehouse = this.deliveryForm.controls['warehouse'];
    this.delivery_type = this.deliveryForm.controls['delivery_type'];
    this.validDeliveryTypeId = [1,2,3];
    this.dcList = this.api.dcList;
    this.warehouseList = this.api.whList;
  };

  ngOnInit() {
    
  }
  onSubmit(data) {
    console.log(data);
  };

}
