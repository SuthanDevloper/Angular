import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor( private http:HttpClient) {


   }
  
   getAllStudent(){
     return this.http.get(`http://localhost:4400/student`);
   }
}
