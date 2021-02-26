import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mesaage-card',
  templateUrl: './mesaage-card.component.html',
  styleUrls: ['./mesaage-card.component.css']
})
export class MesaageCardComponent implements OnInit {

  public message:string = '';
  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  public changeUsername(event:any){
    this.message = event.target.value
  }

}
