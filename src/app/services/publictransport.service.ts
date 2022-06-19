import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublictransportService {
  
  api_endpoint: string = 'https://v5.vbb.transport.rest';
  

  constructor() { }
}
