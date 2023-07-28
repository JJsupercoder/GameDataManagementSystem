import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JsonIdHandlingService {
  private id!: number;

  constructor() {}

  setId(id: any): void {
    this.id = id;
  }

  getId(): any {
    return this.id;
  }
}
