import { Component, OnInit, Output } from '@angular/core';
import { Router, Routes } from '@angular/router';
import * as EventEmitter from 'events';

@Component({
  selector: 'button-singup',
  templateUrl: './button-singup.component.html',
  styleUrls: ['./button-singup.component.scss'],
})
export class ButtonSingupComponent  {

  @Output() mudarPage = new EventEmitter();

  constructor(
    private router: Router  
    ) { }

criarConta(){
  this.router.navigate(['/signup'])
}

 
}
