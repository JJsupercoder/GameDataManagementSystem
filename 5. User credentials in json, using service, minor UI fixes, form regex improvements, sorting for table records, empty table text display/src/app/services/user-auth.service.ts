import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserCredentials } from '../models/user-credentials';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  credentials: UserCredentials[] = [];
  constructor(private http: HttpClient) {
    this.getAllCredentials().subscribe((items: UserCredentials[]) => {
      this.credentials = items;
    });
  }

  // Read operation: Retrieve all items from the JSON file
  getAllCredentials(): Observable<UserCredentials[]> {
    return this.http.get<any[]>('http://localhost:4000/credentials');
  }

  // Read operation: Retrieve an item from the JSON file
  getCredentials(id: number): Observable<UserCredentials> {
    return this.http.get<any>('http://localhost:4000/credentials/' + id);
  }

  // Create operation: Add a new item to the JSON file
  addCredentials(item: UserCredentials): Observable<UserCredentials> {
    return this.http.post<any>('http://localhost:4000/credentials', item);
  }

  // Update operation: Update an existing item in the JSON file
  updateCredentials(
    id: number,
    item: UserCredentials
  ): Observable<UserCredentials> {
    return this.http.put<any>('http://localhost:4000/credentials/' + id, item);
  }

  // Delete operation: Remove an item from the JSON file
  deleteCredentials(id: number): Observable<any> {
    return this.http.delete<any>('http://localhost:4000/credentials/' + id);
  }
}
