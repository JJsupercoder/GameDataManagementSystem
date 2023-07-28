import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
import { UserCredentials } from '../models/user-credentials';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  private credentialsPromise: Promise<UserCredentials[]> | null = null;

  constructor(private http: HttpClient) {}

  private getAllCredentials(): Observable<UserCredentials[]> {
    return this.http.get<UserCredentials[]>(
      'http://localhost:4000/credentials'
    );
  }

  addCredentials(item: UserCredentials): Observable<UserCredentials> {
    return this.http.post<UserCredentials>(
      'http://localhost:4000/credentials',
      item
    );
  }

  deleteCredentials(id: number): Observable<any> {
    return this.http.delete<UserCredentials>(
      'http://localhost:4000/credentials/' + id
    );
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
