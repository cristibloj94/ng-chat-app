import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Room } from './../../models/room';
import './../../rxjs-operators';
import { RoomService } from './../../services/index';
import { Router, Event, NavigationStart } from '@angular/router';

@Component({
    selector: 'room-list',
    templateUrl: './room-list.component.html',
    providers: [
        RoomService
    ]
})
export class RoomListComponent implements OnInit {
    isSubmitted = false;
    isShown = true;
    model = new Room('');
    active = new Room('');
    public rooms = [];
    @Output() showRoom = new EventEmitter();

    constructor(
        private roomService: RoomService,
        private router: Router
    ) {
        router.events.subscribe( (event: Event) => {

            if (event instanceof NavigationStart && event.url === '/home') {
                this.isShown = true;
            }

        });
    }

    saveRoom() {
        this.isSubmitted = true;
        this.roomService.addRoom(this.model)
            .subscribe(
                messageMsg => {
                    this.model = new Room('');
                });
    }

    getRooms() {
        this.roomService.getRooms()
            .subscribe(
                rooms => {
                    this.rooms = rooms;
                },
            );
    }

    ngOnInit() {
        this.getRooms();
        this.isShown = true;
    }

    goToRoom(room) {
        this.showRoom.emit(room);
        this.active = room;
        this.isShown = false;
    }
}
