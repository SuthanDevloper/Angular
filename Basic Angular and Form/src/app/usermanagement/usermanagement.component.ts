import { Component, OnInit } from '@angular/core';
import{ UserService } from '../user.service';
@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit {
users:object=[];
  constructor( private userserv:UserService) { }

  ngOnInit() {
    this.getUser();
  }
getUser(){
  this.userserv.getAllUser().subscribe(response=>{

   // console.log(response);
    this.users=response;
  });
}
}
