import { Component, OnInit } from '@angular/core';
import { TravelMethods } from 'src/app/utils/enums/TravelMethods';
import { FormGroup, FormControl } from '@angular/forms';
import { ISetting } from 'src/app/utils/interfaces/ISetting'

@Component({
  selector: 'app-home-settings',
  templateUrl: './home-settings.component.html',
  styleUrls: ['./home-settings.component.scss']
})
export class HomeSettingsComponent implements OnInit {

  TravelMethods = TravelMethods; // needed to have reference in template

  settingsForm = new FormGroup({
    arrivalTime   : new FormControl(''),
    timeToPrepare : new FormControl(''),
    startLocation : new FormControl(''),
    destination   : new FormControl(''),
    travelBy      : new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
    this.setCurrentTime();
  }

  /**
   * Gets current Time and converts it into a string.
   */
  setCurrentTime(): void{
    let currentDate: Date = new Date();
    let timeString: string = `${currentDate.getHours()}:${currentDate.getMinutes()}`;
    this.settingsForm.patchValue({
      arrivalTime   : timeString,
      timeToPrepare : 0
    });
  }

  onSubmit(): void{
    let settingsObject: ISetting = this.generateSettignsObject();
    console.log(settingsObject);
  }

  /**
   * Generates and fills in a ISetting object
   * @returns object of type ISetting
   */
  generateSettignsObject(): ISetting{

    let values = this.settingsForm.value;

    let object: ISetting = {
      arrivalTime: this.convertToDate(values.arrivalTime),
      timeToPrepare : values.timeToPrepare,
      gps           : {
        start       : values.startLocation,
        destination : values.destination
      },
      travelBy      : values.travelBy
    }

    return object;
  }

  /**
   * Converts a String displaying time to a Date Object
   * @param timeString string - Time in string format hh:mm
   * @returns Date object
   */
  convertToDate(timeString: string): Date{

    // Converts string into array split by hour and minute [h, m]
    let timeArray: any = timeString.split(':');
    timeArray.forEach(element => element = parseInt(element));

    // Creates the Date object with given time
    let dateObject: Date = new Date();
    dateObject.setHours(timeArray[0], timeArray[1]);

    return dateObject;
  }

}
