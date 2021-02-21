import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  public input:string="password";


  constructor() { }

  ngOnInit(): void {
  }
  public showPassword(){
     if(this.input==="password"){
       this.input='text';
     }else{
       this.input='password';
     }
  }
}
