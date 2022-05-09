import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { GET_LEAGUES } from 'src/environments/environment';
import { Leagues } from '../models/league';

export const league = {
  idLeague: 'string',
  strLeague: 'string',
  strSport: 'string',
  strLeagueAlternate: 'string'
};

export const leagues = {
  leagues: {
    idLeague: 'string',
    strLeague: 'string',
    strSport: 'string',
    strLeagueAlternate: 'string'
  }
};

@Injectable({
  providedIn: 'root'
})
export class LeagueServiceMock {

  constructor() { }
}
