import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators} from '@angular/forms'; // what this FROMgroup ,,FROMBULIDER? 
import { zipcodevalidator,passwordvalidaor} from './customvalitator';

@Component({
  selector: 'app-basicreactiveform',
  templateUrl: './basicreactiveform.component.html',
  styleUrls: ['./basicreactiveform.component.css']
})
export class BasicreactiveformComponent implements OnInit {
  form:FormGroup; // ? 

  constructor(private fb:FormBuilder )  // ?
  {

    this.form=this.fb.group({ // ? 
      username:['',[Validators.required, Validators.minLength(4)]], // form-control name is username
      password :'',  // form-control name is username
      cfnpass: ['',passwordvalidaor],
      zipcode:['',zipcodevalidator]
    });
    this.form.controls.password.valueChanges.subscribe(updatevalue=>this.form.controls.cfnpass.updateValueAndValidity());
   }

  ngOnInit() {
  }

  onsubmit(){
    this.form.markAsTouched();
  }
}
