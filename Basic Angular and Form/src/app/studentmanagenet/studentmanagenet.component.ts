import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-studentmanagenet',
  templateUrl: './studentmanagenet.component.html',
  styleUrls: ['./studentmanagenet.component.css']
})
export class StudentmanagenetComponent implements OnInit {
  students:object=[];
  constructor(private stuserv:StudentsService , private http:HttpClient ) { }

  ngOnInit() {

    this.getStudent();
  }

  getStudent(){
    this.stuserv.getAllStudent().subscribe((response)=>{
      this.students=response;
    });
  }

  

deletestudent(studentid)
{

  if(confirm('Are u want delete ?')) {
    const url=`http://localhost:4400/student/${studentid}`;
    this.http.delete(url).subscribe(()=>{
      this.getStudent();
    });
  }
}
}
