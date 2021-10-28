import { Component, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'quick-control',
  templateUrl: './quick-control.component.html',
  styleUrls: ['./quick-control.component.scss'],
})
export class QuickControlComponent implements OnInit {

  @Output() resultEmiter = new EventEmitter()

  buttonSelected: Boolean
  textButton: String = 'Off';

  constructor() { }

  ngOnInit() { }

  isSelected() {

    //document.getElementById('autoDrive').style.backgroundColor = 'rgb(0, 110, 255)'
    
   document.getElementById('autoDrive').style.backgroundColor = 'rgb(0, 110, 255)'
   document.getElementById('autoDriveTitle').style.color = '#000'
   this.textButton = 'On'
   
   

   
}


}