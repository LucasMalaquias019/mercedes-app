import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'quick-control',
  templateUrl: './quick-control.component.html',
  styleUrls: ['./quick-control.component.scss'],
})
export class QuickControlComponent implements OnInit {

buttonSelected: boolean = false
  constructor() { }

  ngOnInit() {}

isSelected(){
 
if(!this.buttonSelected){
  console.log("O botão deve ficar azul")
  
  this.buttonSelected = true;

}

else if(this.buttonSelected) {
  console.log("O botão deve voltar ao normal")

}

 }

}

