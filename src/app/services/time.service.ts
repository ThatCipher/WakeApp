import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ISetting } from '../utils/interfaces/ISetting';
import { ITimeData } from '../utils/interfaces/ITimeData';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  
  public timeData: ITimeData = {
    neededTime  : null,
    wakeUpTime  : null,
  }
  timeDataChange: Subject<ITimeData> = new Subject<ITimeData>();

  showResult: boolean = false;
  
  constructor() {
    this.timeDataChange.subscribe( value => {
      this.timeData = value;
      console.log(this.timeData);
    })
  }
  
  public calculateTime(settingsObject: ISetting): void{
    this.showResult = false;
    let arrivalTimeInMinutes = this.convertToMinutes(settingsObject.arrivalTime.getHours()) + settingsObject.arrivalTime.getMinutes();
    let minutesToWakeUp = arrivalTimeInMinutes - settingsObject.timeToPrepare
    if(!settingsObject.usesGPS){
      minutesToWakeUp -= settingsObject.timeToTravel;
    }
    let timeToWakeUp = this.convertToHours(minutesToWakeUp);

    this.timeDataChange.next({
      neededTime: settingsObject.timeToPrepare,
      wakeUpTime: timeToWakeUp
    });
    this.showResult = true;
  }
  
  /**
  * Converts a Date Object to a String displaying the Time
  * @param dateObj Date - Dateobject which should be converted to a time string
  * @returns String - HH:MM
  */
  convertToTimeString(dateObj: Date): string{
    let timeString: string = `${dateObj.getHours()}:${dateObj.getMinutes().toString().padStart(2, '0')}`;
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
  
  convertToMinutes(hours: number): number{
    return hours * 60;
  }

  convertToHours(minutes: number): string{
    let rawHours: number = minutes / 60;
    let hour = Math.trunc(rawHours);
    let minute = ((rawHours - hour) * 60) / 100;
    minute = Math.round(minute * 100);
    return `${hour}:${minute.toString().padStart(2, '0')}`;
  }
  
}
