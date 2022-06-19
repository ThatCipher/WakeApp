import { TravelMethods } from "../enums/TravelMethods";
import { IGps } from "./IGps";

export interface ISetting{
    arrivalTime     : any,
    timeToPrepare   : number,
    timeToTravel    : number,
    usesGPS         : boolean,
    gps             : IGps,
    travelBy        : TravelMethods,
}