import { Component, OnInit } from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { ApiService } from '../../../../shared/services/api.service';

@Component({
  selector: 'app-order-type',
  templateUrl: './order-type.component.html',
  styleUrls: ['./order-type.component.scss']
})
export class OrderTypeComponent implements OnInit {

  public showSecondForm: boolean = false;
  public type: string;
  private pClassData: any[] = [];
  public pLevel: any;

  public orderTypeForm:FormGroup;
  public orderUpdateForm: FormGroup;

  public dc1:AbstractControl;
  public warehouse1:AbstractControl;
  public order_type1: AbstractControl;
  public dc:AbstractControl;
  public warehouse:AbstractControl;
  public order_type: AbstractControl;
  public order_desc: AbstractControl;
  public pClass: AbstractControl;
  
  public transId: AbstractControl;
  public dType: AbstractControl;
  public dockId: AbstractControl;
  public holidayIndicator:AbstractControl;
  public PUSD:AbstractControl;
  public PUST: AbstractControl;
  public PUED: AbstractControl;
  public PUET: AbstractControl;
  public DSD: AbstractControl;
  public DST: AbstractControl;
  public DED: AbstractControl;
  public DET: AbstractControl;

  public dcList: any[] = [];
  public warehouseList: any[] = [];
  
  constructor(private fb:FormBuilder, private api: ApiService) { 
    this.orderTypeForm = fb.group({
      'dc1': ['', Validators.compose([Validators.required])],
      'warehouse1': ['', Validators.compose([Validators.required])],
      'order_type1': ['', Validators.compose([Validators.required])]
    });

    this.orderUpdateForm = fb.group({
      'dc': ['', Validators.compose([Validators.required])],
      'warehouse': ['', Validators.compose([Validators.required])],
      'order_type': ['', Validators.compose([Validators.required])],
      'order_desc': ['', Validators.compose([Validators.required])],
      'pClass': ['',Validators.compose([Validators.required])],
      // 'pLevel': ['',Validators.compose([Validators.required])],
      'transId': ['',Validators.compose([Validators.required])],
      'dType': ['',Validators.compose([Validators.required])],
      'dockId': ['',Validators.compose([Validators.required])],
      'holidayIndicator': ['',Validators.compose([Validators.required])],
      'PUSD': ['',Validators.compose([Validators.required])],
      'PUST': ['',Validators.compose([Validators.required])],
      'PUED': ['',Validators.compose([Validators.required])],
      'PUET': ['',Validators.compose([Validators.required])],
      'DSD': ['',Validators.compose([Validators.required])],
      'DST': ['',Validators.compose([Validators.required])],
      'DED': ['',Validators.compose([Validators.required])],
      'DET': ['',Validators.compose([Validators.required])]            
    });
    this.pLevel = '';
    this.dc1 = this.orderTypeForm.controls['dc1'];
    this.warehouse1 = this.orderTypeForm.controls['warehouse1'];
    this.order_type1 = this.orderTypeForm.controls['order_type1'];
    
    this.dc = this.orderUpdateForm.controls['dc'];
    this.warehouse = this.orderUpdateForm.controls['warehouse'];
    this.order_type = this.orderUpdateForm.controls['order_type'];
    this.order_desc = this.orderUpdateForm.controls['order_desc'];
    this.pClass = this.orderUpdateForm.controls['pClass'];
    // this.pLevel = this.orderUpdateForm.controls['pLevel'];
    this.transId = this.orderUpdateForm.controls['transId'];
    this.dType = this.orderUpdateForm.controls['dType'];
    this.dockId = this.orderUpdateForm.controls['dockId'];
    this.holidayIndicator = this.orderUpdateForm.controls['holidayIndicator'];
    this.PUSD = this.orderUpdateForm.controls['PUSD'];
    this.PUST = this.orderUpdateForm.controls['PUST'];
    this.PUED = this.orderUpdateForm.controls['PUED'];
    this.PUET = this.orderUpdateForm.controls['PUET'];
    this.DSD = this.orderUpdateForm.controls['DSD'];
    this.DST = this.orderUpdateForm.controls['DST'];
    this.DED = this.orderUpdateForm.controls['DED'];
    this.DET = this.orderUpdateForm.controls['DET'];
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
    this.dcList = this.api.dcList;
    this.warehouseList = this.api.whList;
  }

  ngOnInit() {
    
  };

  selectedClass(){
    this.pLevel = this.pClass.value.level;
  };

  selectionType(type){
    this.type = type;
  };

  onSubmit() {
    if(this.type === 'add'){
      this.orderUpdateForm.controls['dc'].setValue(this.orderTypeForm.controls['dc1'].value);
      this.orderUpdateForm.controls['warehouse'].setValue(this.orderTypeForm.controls['warehouse1'].value);
      this.orderUpdateForm.controls['order_type'].setValue(this.orderTypeForm.controls['order_type1'].value);
      this.showSecondForm = true;
    }
  };
  
  cancel(){
    this.showSecondForm = false;
  };

  update(data) {
    console.log(data);
    this.pLevel = '';
  };

}
