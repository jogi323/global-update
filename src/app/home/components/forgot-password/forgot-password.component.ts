import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  private fpData:fpFormData;

  constructor(private router:Router) { 
    this.fpData = {
      email: '',
      password: '',
      cpassword: ''
    }
  }

  ngOnInit() {
  }

  resetPassword(data){
    console.log(data);
    this.router.navigate(['/']);
  }

}
 export interface fpFormData {
   email: string,
   password: string,
   cpassword: string
 }