import { AbstractControl, FormGroup} from  '@angular/forms';

export function zipcodevalidator(control:AbstractControl){

    if(control &&(control.value !== null|| control.value!==undefined)) { // what is control of first ? 

        var regex = new RegExp('^[A-Z]{6}$');
        
        if(!regex.test(control.value))  { // compare regex and value  ---> regex.test -->predefine
                return {
                    isError:true
                }
        }
    }
    return null;
}