import { Component, OnInit } from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-change-product',
  templateUrl: './change-product.component.html',
  styleUrls: ['./change-product.component.scss']
})
export class ChangeProductComponent implements OnInit {

  public changeProdForm:FormGroup;
  public pClass: AbstractControl;
  public pLevel: any;
  private pClassData: any[] = [];
  constructor(private fb:FormBuilder) { 
    this.changeProdForm = fb.group({
      'pClass': ['', Validators.compose([Validators.required])]
    });

    this.pClass = this.changeProdForm.controls['pClass'];
    this.pLevel = "";
    this.pClassData = [
      {class:'O-Diary',level:'33-40'},
      {class:'O-Floral',level:'40-65'},
      {class:'O-Fresh',level:'33-40'},
      {class:'O-Frozen',level:'Neg 10-0'},
      {class:'O-GMHBC',level:'40-65'},
      {class:'O-Grocry',level:'40-65'},
      {class:'O-Meat',level:'33-40'},
      {class:'O-Prodce',level:'33-40'},
      {class:'O-Seafd',level:'33-40'}
    ];
  }

  ngOnInit() {
  };

  selectedClass(){
    let selectedValue = this.changeProdForm.controls['pClass'].value;
    this.pLevel = selectedValue.level;
  };

  onSubmit(data) {
    console.log(data);
    this.pLevel = '';
  }

}
