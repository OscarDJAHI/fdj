import { Component, OnInit } from '@angular/core';
import { Players } from 'src/app/models/player';
import { PlayerService } from 'src/app/services/player.service';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { TeamService } from 'src/app/services/team.service';
import { Team } from '../../models/team';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  teams: Team[] = [];
  team!: Team;
  teamLoading = false;

  constructor(
    private sharedData: SharedDataService,
    private player: PlayerService,
    private teamService: TeamService
  ) {
  }

  ngOnInit(): void {
    this.getTeams();
  }

  getTeams() {
    this.sharedData.teamLoadingEmitter.subscribe(
      (data: boolean) => {
        this.teamLoading = data;
      }
    );

    this.sharedData.teamListEmitter.subscribe(
      (data: Team[]) => {
        this.teams = data;
      }
    );
  }

  getPlayersByTeam(teamId: string) {

    this.sharedData.playerLoadingEmitter.emit(true);
    this.sharedData.teamListEmitter.next([]);

    this.teamService.getTeamById(teamId).subscribe(
      (data: any) => {
        this.team = data.teams[0];
        this.sharedData.teamEmitter.next(this.team);
      }
    );

    this.player.getPlayersByTeamId(teamId).subscribe(
      (data: Players) => {
        this.sharedData.playerLoadingEmitter.emit(false);
        this.sharedData.playerListEmitter.next(data.player);
        this.sharedData.autoCompleteForm.next(false);
        this.sharedData.backButton.next(true);
      }
    );
  }
}
