import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject  } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ApiService {
  public dcList: any;
  public whList: any;
  
  constructor(private http: HttpClient) {
    this.getDcData();
    this.getWhList();
  };

  getDcData() {
    return this.http.get('/assets/json/dcList.json').subscribe((res)=>{
      this.dcList = res;
    });
  };

  getWhList() {
    return this.http.get('/assets/json/whList.json').subscribe((res)=>{
      this.whList = res;
    });
  }
}
