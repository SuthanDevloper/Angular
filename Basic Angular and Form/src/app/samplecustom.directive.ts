import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSamplecustom]'
})
export class SamplecustomDirective {

    element:ElementRef
  constructor(private elem:ElementRef) {
    console.log(elem);
      elem.nativeElement.style.color="blue";
      elem.nativeElement.style.backgroundColor="yellow";
      //this.element=elem;
      //this.elem.nativeElement.innerHTML+="I ma form Sri Lanka";
   }
    ngOnInit()
    {
      //this.elem.nativeElement.innerHTML+="I ma form Sri Lanka";
    }



}
