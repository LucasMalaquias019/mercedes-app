import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  

  carName: string = 'Mercedes-Benz Classe G'
  constructor() { }



  ngOnInit() {}

  press() {
    document.getElementById('quickControl').style.backgroundColor = '#008';
  }

}
