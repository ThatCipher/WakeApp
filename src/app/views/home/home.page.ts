import { Component, OnInit } from '@angular/core';
import { TimeService } from 'src/app/services/time.service';
import { ISetting } from 'src/app/utils/interfaces/ISetting';
import { ITimeData } from 'src/app/utils/interfaces/ITimeData';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  timeData: ITimeData;
  displayResult: boolean = false;

  constructor(public timeService: TimeService) { }

  ngOnInit(): void {
    this.timeData = this.timeService.timeData;
  }

}
