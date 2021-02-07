import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm} from '@angular/forms';
import { Router} from '@angular/router'; // router for other components 

@Component({
  selector: 'app-addstudents',
  templateUrl: './addstudents.component.html',
  styleUrls: ['./addstudents.component.css']
})
export class AddstudentsComponent implements OnInit {
addStuObj:object=[];
yesadd:boolean=false;
  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit() {
  }
  addStudent(studata:NgForm){
    if(studata.invalid) {
        return;
    }
  
    this.addStuObj={
      "firstname": studata.value.stufname,
      "LastName": studata.value.stulname,
      "email": studata.value.stuemail,
      "phone": studata.value.stuphone
    };

    this.http.post(`http://localhost:4400/student/`,this.addStuObj).subscribe(()=>{
      this.yesadd= true;
      this.router.navigate(['/studentmanagement']); // path in approuting Module
    });
  }

}



