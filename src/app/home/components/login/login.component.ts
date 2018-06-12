import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private user: userFormData;

  constructor(private router:Router) { 
    this.user = {
      email: '',
      password: ''
    }
  }

  ngOnInit() {

  }
  login(data){
    console.log(data);
    this.router.navigate(['/dashboard']);
  }

}

export interface userFormData {
  email: string,
  password: string
}