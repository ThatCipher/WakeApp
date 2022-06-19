import { Component, OnInit } from '@angular/core';
import { TravelMethods } from 'src/app/utils/enums/TravelMethods';
import { FormGroup, FormControl } from '@angular/forms';
import { ISetting } from 'src/app/utils/interfaces/ISetting'
import { SaveService } from 'src/app/services/save.service';
import { TimeService } from 'src/app/services/time.service';

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

  constructor(
    private saveService: SaveService,
    private timeService: TimeService
    ) { }

  ngOnInit(): void {
    this.loadData();
  }

  async loadData(): Promise<void>{    
    let savedObject: ISetting = await this.saveService.loadAll();
    this.settingsForm.setValue({
      arrivalTime   : this.timeService.getCurrentTime(new Date),
      timeToPrepare : savedObject.timeToPrepare || 0,
      startLocation : savedObject.gps.start,
      destination   : savedObject.gps.destination,
      travelBy      : savedObject.travelBy || 0
    })

  }

  async onSubmit(): Promise<void>{
    let settingsObject: ISetting = await this.generateSettignsObject();
    console.log(settingsObject);
  }

  /**
   * Generates and fills in a ISetting object
   * @returns object of type ISetting
   */
  generateSettignsObject(): ISetting{

    let values = this.settingsForm.value;

    let object: ISetting = {
      arrivalTime: this.timeService.convertToDate(values.arrivalTime),
      timeToPrepare : values.timeToPrepare,
      gps           : {
        start       : values.startLocation,
        destination : values.destination
      },
      travelBy      : values.travelBy
    }

    return object;
  }

}
