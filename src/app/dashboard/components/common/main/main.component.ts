import { Component, OnInit } from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  private data: LabelFormData;
  private labels: any[] = [];
  public reactiveForm:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  constructor(private fb:FormBuilder,) {
    this.data = {
      label: '',
      value:''
    };
    this.reactiveForm = fb.group({
      'email': ['', Validators.compose([Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });
    this.email = this.reactiveForm.controls['email'];
    this.password = this.reactiveForm.controls['password'];
   }

  ngOnInit() {
  }
  addLabel(data){
    let obj = {
      label: this.data.label,
      value: this.data.value,
    }
    this.labels.push(obj);
    console.log(this.labels);
  }
  onSubmit(data) {
    console.log(data)
  }
}

export interface LabelFormData {
  label: String;
  value: String;
}
