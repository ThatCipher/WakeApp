import { TravelMethods } from "../enums/TravelMethods";
import { IGps } from "./IGps";

export interface ISetting{
    arrivalTime     : any,
    timeToPrepare   : number,
    gps             : IGps,
    travelBy        : TravelMethods
}