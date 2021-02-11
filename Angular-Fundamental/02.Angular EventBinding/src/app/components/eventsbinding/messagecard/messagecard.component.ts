import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messagecard',
  templateUrl: './messagecard.component.html',
  styleUrls: ['./messagecard.component.css']
})
export class MessagecardComponent implements OnInit {

  public msg:string="Hell";


  constructor() { }

  ngOnInit(): void {
  }

  public sayAngular(){
      this.msg="Angular";
  }
  public sayJava(){
    this.msg="Java";
  }

  public sayReactJs(){
    this.msg="ReactJs";
  }
}
