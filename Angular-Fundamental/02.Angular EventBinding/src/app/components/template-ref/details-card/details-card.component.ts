import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.css']
})
export class DetailsCardComponent implements OnInit {
  public msg:string ='';

 // public element:any;
  constructor() { }

  ngOnInit(): void {
  }

  public send(element:HTMLParagraphElement){
        this.msg=element.innerHTML;

  }



}
