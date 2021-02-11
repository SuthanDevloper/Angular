import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tour-card',
  templateUrl: './tour-card.component.html',
  styleUrls: ['./tour-card.component.css']
})
export class TourCardComponent implements OnInit {

    public kandy1 = '../../../assets/kandy.jpg';
  public colombo1 = '../../../assets/colombo.jpg';
  public jaffna1 = '../../../assets/jaffna.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
