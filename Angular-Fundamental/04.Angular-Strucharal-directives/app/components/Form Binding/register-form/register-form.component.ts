import { Component, OnInit } from '@angular/core';
import {IUser} from '../../../models/iuser';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  public user:IUser={
    username:'',
    email:'',
    password:'',
  }
  constructor() { }

  ngOnInit(): void {
  }

  public register(){
    console.log(this.user);
  }
}
