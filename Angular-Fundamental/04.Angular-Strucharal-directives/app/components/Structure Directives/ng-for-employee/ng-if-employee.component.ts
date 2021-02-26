import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/models/Iemployee';
import { IUser } from 'src/app/models/iuser';

@Component({
  selector: 'app-ng-if-employee',
  templateUrl: './ng-if-employee.component.html',
  styleUrls: ['./ng-if-employee.component.css']
})
export class NgIfEmployeeComponent implements OnInit {

  public users: IEmployee[]=[
    {
      sno:100,
      username: "suthan",
      email:"pkscool@hotmail.com",
      password: "123iooo"
    },
    {
      sno:101,
      username: "gran",
      email:"spl@hotmail.com",
      password: "lop0nmm"

    },
    {
      sno:102,
      username: "kkkk",
      email:"nmkol@hotmail.com",
      password: "opljk"
    }



  ];

  constructor() { }

  ngOnInit(): void {
  }

}
