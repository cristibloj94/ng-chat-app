import { Component } from '@angular/core';
import './../rxjs-operators';
import {Room} from "../models/room";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  currentRoom = new Room('');
  loggedInUser = JSON.parse(JSON.parse(localStorage.getItem('currentUser'))["_body"])["username"];

  constructor(
  ) { }

  goToRoom(showRoom){
      this.currentRoom = showRoom;
  }
}
