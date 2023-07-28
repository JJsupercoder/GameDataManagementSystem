import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GameData } from '../models/game-data.model';

@Injectable({
  providedIn: 'root',
})
export class JsonService {
  constructor(private http: HttpClient) {}

  // Read operation: Retrieve all items from the JSON file
  getAllRecords(): Observable<GameData[]> {
    return this.http.get<any[]>('http://localhost:3000/data');
  }

  getRecord(id: number): Observable<GameData> {
    return this.http.get<any>('http://localhost:3000/data/' + id);
  }

  // Create operation: Add a new item to the JSON file
  addRecord(item: any): Observable<any> {
    console.log(item);
    return this.http.post<any>('http://localhost:3000/data', item);
  }

  // Update operation: Update an existing item in the JSON file
  updateRecord(id:number, item: GameData): Observable<GameData> {
    return this.http.put<any>('http://localhost:3000/data/' + id, item);
  }

  // Delete operation: Remove an item from the JSON file
  deleteRecord(id: number): Observable<any> {
    return this.http.delete<any>('http://localhost:3000/data/' + id);
  }
}
