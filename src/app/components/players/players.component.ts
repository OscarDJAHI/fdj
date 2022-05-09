import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { Player } from '../../models/player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  players: Player[] = [];
  playerLoading = false;

  constructor(
    private sharedData: SharedDataService
  ) {
  }

  ngOnInit(): void {
      this.getPlayers();
  }

  getPlayers() {
    this.sharedData.playerLoadingEmitter.subscribe(
      (data: boolean) => {
        this.playerLoading = data;
      }
    );

    this.sharedData.playerListEmitter.subscribe(
      (data: Player[]) => {
        this.players = data;
      }
    );
  }
}
