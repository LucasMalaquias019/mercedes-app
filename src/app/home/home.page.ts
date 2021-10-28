import { Component, Input, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  
  bunttonQuickSelected: boolean 
  carName: string = 'Mercedes-Benz Classe G'
  constructor() { }



  ngOnInit() { }


  resposta(event: any) {
    this.bunttonQuickSelected = event;
   
    if(!this.bunttonQuickSelected){
      console.log()


    }
    
  }

  

 

}
