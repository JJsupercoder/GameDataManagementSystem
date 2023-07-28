import { Injectable } from '@angular/core';
import { GameData } from '../models/game-data.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SqlConnectService {
  baseUrl = 'https://localhost:7172/api/GameData';
  constructor(private http: HttpClient) {}

  getAllRecords(): Observable<GameData[]> {
    return this.http.get<GameData[]>(this.baseUrl);
  }

  getRecord(id: string): Observable<GameData> {
    return this.http.get<GameData>(this.baseUrl + '/' + id);
  }

  addRecord(gamedata: GameData): Observable<GameData> {
    gamedata.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<GameData>(this.baseUrl, gamedata);
  }

  deleteRecord(id: string): Observable<GameData> {
    return this.http.delete<GameData>(this.baseUrl + '/' + id);
  }

  updateRecord(gamedata: GameData): Observable<GameData> {
    return this.http.put<GameData>(this.baseUrl + '/' + gamedata.id, gamedata);
  }
}
