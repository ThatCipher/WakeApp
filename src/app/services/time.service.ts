import { Injectable } from '@angular/core';
import { ISetting } from '../utils/interfaces/ISetting';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  public timeData = {
    neededTime  : null,
    wakeUpTime  : null,
  }

  constructor() { }

  public calculateTime(settingsObject: ISetting): void{
    
  }

  /**
   * Converts a Date Object to a String displaying the Time
   * @param dateObj Date - Dateobject which should be converted to a time string
   * @returns String - HH:MM
   */
  getCurrentTime(dateObj: Date): string{
    let timeString: string = `${dateObj.getHours()}:${dateObj.getMinutes()}`;
    return timeString
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
