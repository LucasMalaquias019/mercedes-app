import { Component, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'quick-control',
  templateUrl: './quick-control.component.html',
  styleUrls: ['./quick-control.component.scss'],
})
export class QuickControlComponent implements OnInit {

  @Output() resultEmiter = new EventEmitter()

  buttonAutoDriveSelected: Boolean = false;
  buttonAutoParkingSelected: Boolean = false;
  buttonAirSelected: Boolean = false;
  textButton: String = 'Off';

  isButtonSelect: String = ''



  constructor() { }

  ngOnInit() { }


  isAutoDriveSelected() {
    this.buttonAutoDriveSelected = ! this.buttonAutoDriveSelected

    if (this.buttonAutoDriveSelected) {
     document.getElementById('autoDriveValue').textContent = 'On'
      
    } 

    else {
      document.getElementById('autoDriveValue').textContent = 'Off'
    }

  }

  isAutoParkingSelected() {
  this.buttonAutoParkingSelected = !this.buttonAutoParkingSelected

  if (this.buttonAutoParkingSelected) {
    document.getElementById('autoParkingValue').textContent = 'On'
  }

  else {
    document.getElementById('autoParkingValue').textContent = 'Off'

  }
}

isAirSelected() {
  this.buttonAirSelected = !this.buttonAirSelected

  if(this.buttonAirSelected) {
  document.getElementById('airValue').textContent = 'On'
  }
  else {
    document.getElementById('airValue').textContent = 'Off'    
  }
}



}