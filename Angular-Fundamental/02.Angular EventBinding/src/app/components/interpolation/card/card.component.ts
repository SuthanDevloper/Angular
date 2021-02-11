import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public mySubject: string='Angular';
  public version: string='11';
  public price :number=1000;
  constructor() { }

  ngOnInit(): void {
  }

}
