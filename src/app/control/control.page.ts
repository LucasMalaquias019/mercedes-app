import { Component,ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-control',
  templateUrl: './control.page.html',
  styleUrls: ['./control.page.scss'],
})
export class ControlPage {
   

  trackSound: String = 'Apenas Um Rapaz Latino Americano';
  trackDuration: String = '4:18';
  isPause: Boolean = false
  

  constructor(
      
  ) { }

  track() {
    this.isPause = !this.isPause;
    console.log(this.isPause)

  }
 
}
