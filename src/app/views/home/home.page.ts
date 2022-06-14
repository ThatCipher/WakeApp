import { Component, OnInit } from '@angular/core';
import { ISetting } from 'src/app/utils/interfaces/ISetting';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  settings: ISetting = {
    arrivalTime   : undefined,
    timeToPrepare : undefined,
    gps           : {
      start       : undefined,
      destination : undefined
    },
    travelBy      : undefined
  }

  constructor() { }

  ngOnInit(): void {
  }

}
