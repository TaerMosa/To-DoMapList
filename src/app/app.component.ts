import { Component } from '@angular/core';
import {google} from "angular2-google-maps/core/services/google-maps-types";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Taar Mosa -- google map with todo list using angular 2 ';
  // jerusalem
  lat1: number = 31.76553741;
  lng1: number = 35.21392822;
  // haifa
  lat2: number = 32.7942013;
  lng2: number =34.98853683;
  // tel aviv
  lat3: number = 32.08431989;
  lng3: number =34.79335785;


}
