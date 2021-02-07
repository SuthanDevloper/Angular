import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router } from '@angular/router';// getting data from URL
import { HttpClient} from '@angular/common/http';
import { NgForm} from '@angular/forms';
@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent implements OnInit {
id: number;
exists:boolean=false;
studentInfo:Object=[];
allStudent:any=[]; // JSON SERVER OBJECT 
updateStudentData:Object =[];

  constructor( private currenturl:ActivatedRoute, private http:HttpClient, private router:Router) {

  }

  updateStudent(studata:NgForm){
    if(studata.invalid) {
      return;
  }

    this.updateStudentData={
      "firstname":studata.value.stufname,
      "LastName":studata.value.stulname, 
      "email": studata.value.stuemail,
      "phone": studata.value.stuphone
    };

    const url=`http://localhost:4400/student/${this.id}`;
    this.http.put(url,this.updateStudentData).subscribe(()=>{ // update in json server
      this.router.navigate(['/studentmanagement']); // route the page to studentmanagement
    });

    }

  ngOnInit() {
    // step 3  http://localhost:4200/updatestudent/10 
    this.currenturl.params.subscribe(params=>this.id=+params['id']); // param id mean coming from url and this.id is components id
    
    // step 4
    this.http.get(`http://localhost:4400/student/`).subscribe(getResponse=>{
    this.allStudent=getResponse; // geting the jsonserver object data and display by subcribe
 
    for( var i=0; i<this.allStudent.length; i++) {
        
      // JSON SERVER ID = URL ID 
      if(parseInt(this.allStudent[i].id)===this.id) // step5-- both are true sent to updatecomponent.html  
      {
          this.exists=true;
          // step6 -- updatehtml.component = jsonserver  
          this.studentInfo=this.allStudent[i];
          break;
      }else{
        this.exists=false;
      }

    }
    });
  }

}
