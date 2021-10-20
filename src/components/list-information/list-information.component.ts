import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'list-information',
  templateUrl: './list-information.component.html',
  styleUrls: ['./list-information.component.scss'],
})
export class ListInformationComponent implements OnInit {

  brand: string = 'Mercedes-Benz'
  model: string= 'Classe G'
  color: string = 'Black'
  version: string = '2020'

  constructor() { }

  ngOnInit() {}

}
