import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {
  
  log(message){    
    console.log(message);
  }
  
  constructor() { }

}
