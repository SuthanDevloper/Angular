import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobby-selector',
  templateUrl: './hobby-selector.component.html',
  styleUrls: ['./hobby-selector.component.css']
})
export class HobbySelectorComponent implements OnInit {

  public eating:boolean=false;
  public coding:boolean=false;
  public sleeping:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}
