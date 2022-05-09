import { EventEmitter, Injectable } from '@angular/core';
import { Player } from '../models/player';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  clickOutside = new EventEmitter();

  teamEmitter: EventEmitter<Team> = new EventEmitter();
  teamLoadingEmitter: EventEmitter<boolean> = new EventEmitter(false);
  teamListEmitter: EventEmitter<Team[]> = new EventEmitter();

  playerLoadingEmitter: EventEmitter<boolean> = new EventEmitter(false);
  playerListEmitter: EventEmitter<Player[]> = new EventEmitter();

  backButton: EventEmitter<boolean> = new EventEmitter();
  autoCompleteForm: EventEmitter<boolean> = new EventEmitter();

  constructor() { }
}
