import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoggingService } from "../logging.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeTitle = "Welcom to the ninja direcotory!";
  @Input() ninja; //from parent by <app-home [ninja]='ninja'></app-home>
  @Output() onYell = new EventEmitter();
  
  fireYellEvent(e){
    this.onYell.emit(e);
  }
  
  alertMe(val){
    alert(val);
  }
  
  constructor(private logger: LoggingService) { 
    this.logger = logger;
  }
  
  logIt(){
    this.logger.log("home");
  }

  ngOnInit() {
  }

}
