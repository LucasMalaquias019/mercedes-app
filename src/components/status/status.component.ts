import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent implements OnInit {

  fuel: string = '65%'
  range: string = '100Km'
  temperature: string = '28°C'

  constructor() { }

  ngOnInit() {}

}
