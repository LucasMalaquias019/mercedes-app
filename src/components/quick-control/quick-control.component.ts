import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'quick-control',
  templateUrl: './quick-control.component.html',
  styleUrls: ['./quick-control.component.scss'],
})
export class QuickControlComponent implements OnInit {


  buttonColor: string = 'green'
  constructor() { }

  ngOnInit() {}


  
}
