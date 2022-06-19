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
    travelBy      : new FormControl(''),
    timeToTravel  : new FormControl('')
  });

  useGPS: boolean = false;
  isVisible: boolean = false;

  constructor(
    private saveService: SaveService,
    private timeService: TimeService
    ) { }

  ngOnInit(): void {
    this.loadData();
  }

  async changeGPSView(): Promise<void>{
    this.useGPS = !this.useGPS;
    await setTimeout(()=>{
      this.isVisible = !this.isVisible;
    }, 300);
  }

  async loadData(): Promise<void>{    
    let savedObject: ISetting = await this.saveService.loadAll();
    this.settingsForm.setValue({
      arrivalTime   : this.timeService.convertToTimeString(new Date),
      timeToPrepare : savedObject.timeToPrepare || 0,
      timeToTravel  : savedObject.timeToTravel || 0,
      startLocation : savedObject.gps.start || '',
      destination   : savedObject.gps.destination || '',
      travelBy      : savedObject.travelBy || 0
    })

  }

  async onSubmit(): Promise<void>{
    let settingsObject: ISetting = await this.generateSettignsObject();
    this.timeService.calculateTime(settingsObject);
    this.saveService.saveAll(settingsObject);
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
      timeToTravel  : values.timeToTravel,
      usesGPS       : this.useGPS,
      gps           : {
        start       : values.startLocation,
        destination : values.destination
      },
      travelBy      : values.travelBy
    }

    return object;
  }

  openMaps(): void{
    window.open("https://www.google.de/maps/dir///data=!4m2!4m1!3e3", "_blank");
  }

}
