import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { ISetting } from '../utils/interfaces/ISetting';

@Injectable({
  providedIn: 'root'
})
export class SaveService {

  constructor() { }

  async saveAll(object: ISetting): Promise<void>{

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
      gps           : {
        destination : await this.loadData("destination"),
        start       : await this.loadData("start")
      },
      timeToPrepare : parseInt(await this.loadData("arrivalTime")) || null,
      travelBy      : parseInt(await this.loadData("travelBy")) || null
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
