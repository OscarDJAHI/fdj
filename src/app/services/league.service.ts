import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GET_LEAGUES } from 'src/environments/environment';
import { Leagues } from '../models/league';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  constructor(private http: HttpClient) { }

  getLeagues(): Observable<Leagues> {
    return this.http.get<Leagues>(`${GET_LEAGUES}`);
  }
}
