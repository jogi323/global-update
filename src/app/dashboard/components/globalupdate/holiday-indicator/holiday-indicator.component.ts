import { Component, OnInit } from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-holiday-indicator',
  templateUrl: './holiday-indicator.component.html',
  styleUrls: ['./holiday-indicator.component.scss']
})
export class HolidayIndicatorComponent implements OnInit {

  public holidayForm:FormGroup;
  public dc:AbstractControl;
  public warehouse:AbstractControl;
  public holiday_indicator: AbstractControl;
  private validHolidayId: any[] = [];
  constructor(private fb:FormBuilder) { 
    this.holidayForm = fb.group({
      'dc': ['', Validators.compose([Validators.required])],
      'warehouse': ['', Validators.compose([Validators.required])],
      'holiday_indicator': ['', Validators.compose([Validators.required])]
    });

    this.dc = this.holidayForm.controls['dc'];
    this.warehouse = this.holidayForm.controls['warehouse'];
    this.holiday_indicator = this.holidayForm.controls['holiday_indicator'];
    this.validHolidayId = ['H','N'];
  }

  ngOnInit() {
  }
  onSubmit(data) {
    console.log(data);
  }

}
