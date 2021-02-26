import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {

  public isLogin:boolean=false;
  constructor() { }

  public login(){
    this.isLogin=true;
  }

  public logout(){
    this.isLogin=false
  }
  ngOnInit(): void {
  }

}
