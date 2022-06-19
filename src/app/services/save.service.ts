import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { TravelMethods } from '../utils/enums/TravelMethods';
import { ISetting } from '../utils/interfaces/ISetting';

@Injectable({
  providedIn: 'root'
})
export class SaveService {

  constructor() { }

  async saveAll(object: ISetting): Promise<void>{
    await this.saveData("destination", object.gps.destination);
    await this.saveData("start", object.gps.start);
    await this.saveData("timeToPrepare", String(object.timeToPrepare));
    await this.saveData("travelBy", String(object.travelBy));
    await this.saveData("timeToTravel", String(object.timeToTravel));
    await this.saveData("usesGPS", String(object.usesGPS));
  }

  async saveData(key: string, value: string): Promise<void>{
    await Storage.set({
      key: key,
      value: value
    })
  }

  async loadAll(): Promise<ISetting>{
    let tempObj: ISetting = {
      arrivalTime   : null,
      timeToPrepare : parseInt(await this.loadData("timeToPrepare")) || 0,
      timeToTravel  : parseInt(await this.loadData("timeToTravel")) || 0,
      usesGPS       : JSON.parse(await this.loadData("usesGPS")) || false,
      gps           : {
        destination : await this.loadData("destination"),
        start       : await this.loadData("start")
      },
      travelBy      : parseInt(await this.loadData("travelBy")) || TravelMethods.opnv
    }
    return tempObj;
  }

  async loadData(key: string): Promise<string>{
    const { value } = await Storage.get({
      key: key
    })
    return value;
  }

}
