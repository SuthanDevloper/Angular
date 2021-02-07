import { AbstractControl, FormGroup} from  '@angular/forms';
//import { username } from './basicdrivenforms.component.html';

export function zipcodevalidator(control:AbstractControl){

    if(control &&(control.value !== null|| control.value!==undefined)) { // what is control of first ? 

        var regex = new RegExp('^[0-9]{6}$');
        
        if(!regex.test(control.value))  { // compare regex and value  ---> regex.test -->predefine
                return {
                    isError:true
                }
        }
    }
    return null;
}

export function passwordvalidaor( control:AbstractControl){
    
    if(control &&(control.value !== null|| control.value !== undefined)) { // which control of first ? 

        const  cfnpass= control.value; // get the conformpassword value = control value  --->  ??????
        const  passwordcontrol= control.root.get('password'); //  get the textbox password

        if(passwordcontrol) {
            const  passvalue =passwordcontrol.value; //  take password vale in text box and store passvalue

            if(passvalue!==cfnpass || passvalue === ""){ // check condition 
                return {
                    isError:true
                }
            }
        }
    }
    return null;
}