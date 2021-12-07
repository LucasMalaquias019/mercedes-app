import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage {
  
 

@ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

map: google.maps.Map;

  constructor() { }

  ionViewDidEnter(){

   this.showMap()
   console.log('Carregou')

  }


showMap() {
  const position = new google.maps.LatLng(-23.097754, -47.271992);
  const option = {
    center: position,
    zoom: 15,
    disableDefaultUI: true
  };

  this.map = new google.maps.Map(this.mapRef.nativeElement, option)

  new google.maps.Marker({
    position: position,
    map: this.map,
    title: "My localization",
    animation: google.maps.Animation.DROP
  })

}

ionViewDidLeave() {
  this.showMap()
  console.log('eae')
}




}


