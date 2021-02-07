import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-basicinputandoutputs',
  templateUrl: './basicinputandoutputs.component.html',
  styleUrls: ['./basicinputandoutputs.component.css']
})
export class BasicinputandoutputsComponent implements OnInit {
@Input() parentvalue:string;
@Output() childeventvalue = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  sendtoparent(childvalue:string){
    //alert("hi its input");
    this.childeventvalue.emit(childvalue);
  }

}
