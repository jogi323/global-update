import { Component, OnInit } from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-trans-wave',
  templateUrl: './trans-wave.component.html',
  styleUrls: ['./trans-wave.component.scss']
})
export class TransWaveComponent implements OnInit {
  public TransWaveForm:FormGroup;
  public dc:AbstractControl;
  public warehouse:AbstractControl;
  public trans_wave: AbstractControl;
  private validTransWaveId: any[] = [];
  constructor(private fb:FormBuilder) { 
    this.TransWaveForm = fb.group({
      'dc': ['', Validators.compose([Validators.required])],
      'warehouse': ['', Validators.compose([Validators.required])],
      'trans_wave': ['', Validators.compose([Validators.required])]
    });

    this.dc = this.TransWaveForm.controls['dc'];
    this.warehouse = this.TransWaveForm.controls['warehouse'];
    this.trans_wave = this.TransWaveForm.controls['trans_wave'];
    this.validTransWaveId = [1,2];
  }

  ngOnInit() {
  }
  onSubmit(data) {
    console.log(data);
  }
}
