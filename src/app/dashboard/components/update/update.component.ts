import { Component, OnInit } from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { ApiService } from '../../../shared/services/api.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  public updateForm: FormGroup;
  public dc: AbstractControl;
  public warehouse: AbstractControl;
  public orderType: AbstractControl;
  public dcList: any[] = [];
  public warehouseList: any[] = [];

  constructor (private fb: FormBuilder, private api: ApiService) {
    this.updateForm = fb.group({
      'dc': ['', Validators.compose([Validators.required])],
      'warehouse': ['', Validators.compose([Validators.required])],
      'orderType': ['', Validators.compose([Validators.required])]
    });
    this.dc = this.updateForm.controls['dc'];
    this.warehouse = this.updateForm.controls['warehouse'];
    this.orderType = this.updateForm.controls['orderType'];
    this.dcList = this.api.dcList;
    this.warehouseList = this.api.whList;
  }

  ngOnInit() {

  }
  onSubmit(data) {
    console.log(data);
  }

}
