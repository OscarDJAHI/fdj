import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team, Teams } from '../models/team';
import { GET_LEAGUES, GET_TEAMS_BY_LEAGUE, GET_TEAM_BY_TEAM_ID } from 'src/environments/environment';
import { Leagues } from '../models/league';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  getTeamById(teamId: string):Observable<Team>{
    return this.http.get<Team>(`${GET_TEAM_BY_TEAM_ID}${teamId}`);
  }

  getTeamsByLeague(league: string):Observable<Teams>{
    return this.http.get<Teams>(`${GET_TEAMS_BY_LEAGUE}${league}`);
  }
}
