import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { League, Leagues } from 'src/app/models/league';
import { Team, Teams } from 'src/app/models/team';
import { LeagueService } from 'src/app/services/league.service';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent implements OnInit {

  leagueForm: FormGroup = new FormGroup({});
  leaguesLoaded: League[] = [];
  autoCompleteReuslt: League[] = [];

  team!: Team;

  teamLoading = false;
  displayAutoComplete: boolean = false;
  clickOutsideAutoComplete: boolean = true;
  backButton: boolean = false;
  displayForm: boolean = true;
  displayCancelButton: boolean = false;

  constructor(
    private leagueService: LeagueService,
    private teamService: TeamService,
    private sharedDataService: SharedDataService
  ) {
  }

  ngOnInit() {
    this.initHeader();

    this.leagueForm = new FormGroup({
      leagueName: new FormControl()
    });
  }

  loadLeagues() {
    this.leagueService.getLeagues().subscribe(
      (data: Leagues) => {
        this.leaguesLoaded = data.leagues;
      }
    )
  }

  filterLeague(target: any) {
    if (target.value.length > 2) {
      if (!this.leaguesLoaded.length) {
        this.loadLeagues();
      }
      this.displayAutoComplete = true;
      const filterValue = target.value.toLowerCase();
      this.autoCompleteReuslt = this.leaguesLoaded;
      this.autoCompleteReuslt = this.autoCompleteReuslt.filter(league => league.strLeague.toLowerCase().includes(filterValue));
      this.displayAutoComplete = true;
    }
  }

  selectLeague(league: string) {
    this.leagueForm.patchValue({ leagueName: league });
    this.displayAutoComplete = false;
    this.sharedDataService.teamLoadingEmitter.next(true);
    this.displayCancelButton = true;

    this.teamService.getTeamsByLeague(league).subscribe(
      (data: Teams) => {
        this.sharedDataService.teamLoadingEmitter.next(false);
        this.sharedDataService.teamListEmitter.next(data.teams);
      }
    );
  }

  displayButton() {
    this.sharedDataService.backButton.subscribe(
      (data: boolean) => {
        this.backButton = data;
      }
    );
  }

  displayTeamName() {
    this.sharedDataService.teamEmitter.subscribe(
      (data: Team) => {
        this.team = data;
      }
    );
  }

  displayAutoCompleteForm() {
    this.sharedDataService.autoCompleteForm.subscribe(
      (data: boolean) => {
        this.displayForm = data;
        this.displayCancelButton = false;
      }
    );
  }

  closeAutocomplete() {
    this.sharedDataService.clickOutside.subscribe(
      (data: boolean) => {
        this.displayAutoComplete = !data;
      }
    );
  }

  initHeader() {
    this.sharedDataService.backButton.next(false);
    this.sharedDataService.autoCompleteForm.next(true);
    this.sharedDataService.teamEmitter.emit();
    this.sharedDataService.teamListEmitter.next([]);
    this.sharedDataService.playerListEmitter.next([]);
    this.leagueForm.reset();

    this.loadLeagues();
    this.displayButton();
    this.displayAutoCompleteForm();
    this.displayTeamName();
    this.closeAutocomplete();
  }

  goHome() {
    this.initHeader();
  }
}
