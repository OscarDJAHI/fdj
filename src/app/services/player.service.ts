import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GET_PLAYERS_BY_TEAM_ID } from 'src/environments/environment';
import { Players } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  getPlayersByTeamId(teamId: string): Observable<Players> {
    return this.http.get<Players>(`${GET_PLAYERS_BY_TEAM_ID}${teamId}`);
  }
}
