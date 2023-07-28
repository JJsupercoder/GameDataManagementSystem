import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
import { UserCredentials } from '../models/user-credentials';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  url = 'https://localhost:7172/api/Credentials';
  private credentialsPromise: Promise<UserCredentials[]> | null = null;

  constructor(private http: HttpClient) {}

  private getAllCredentials(): Observable<UserCredentials[]> {
    return this.http.get<UserCredentials[]>(this.url);
  }

  addCredentials(item: UserCredentials): Observable<UserCredentials> {
    item.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<UserCredentials>(this.url, item);
  }

  deleteCredentials(id: string): Observable<any> {
    return this.http.delete<UserCredentials>(this.url + '/' + id);
  }

  private loadCredentials(): Promise<UserCredentials[]> {
    if (!this.credentialsPromise) {
      this.credentialsPromise = firstValueFrom(this.getAllCredentials());
    }
    return this.credentialsPromise;
  }

  async checkCredentials(userName: string, password: string): Promise<boolean> {
    const credentials = await this.loadCredentials();

    for (const credential of credentials) {
      if (
        credential.userName === userName &&
        credential.password === password
      ) {
        return true;
      }
    }
    return false;
  }
}
