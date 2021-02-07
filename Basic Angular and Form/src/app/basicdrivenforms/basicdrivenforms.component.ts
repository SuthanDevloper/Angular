import { Component, OnInit } from '@angular/core';
import {Student} from '../student';
import { FormGroup, FormBuilder,Validators} from '@angular/forms';

import { zipcodevalidator} from './validator';

@Component({
  selector: 'app-basicdrivenforms',
  templateUrl: './basicdrivenforms.component.html',
  styleUrls: ['./basicdrivenforms.component.css']
})
export class BasicdrivenformsComponent implements OnInit {
  

  form:FormGroup;
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

            
  stumodel= new Student(10,'suthan',this.powers[0],'Study');
  submitted = false;
  onSubmit() { this.form.markAsTouched(); }
  constructor( private fb:FormBuilder) {



    this.form=this.fb.group({
      username:['',zipcodevalidator], // form-control name is username
      password :'',  // form-control name is username
     /// cfnpass: ['',passwordvalidaor],
      //zipcode:['',zipcodevalidator]
    });
    //this.form.controls.password.valueChanges.subscribe(updatevalue=>this.form.controls.cfnpass.updateValueAndValidity());
   }

   ngOnInit(){

   }
  }
   
  
  
  //get diagnostic() { return JSON.stringify(this.stumodel);





 
