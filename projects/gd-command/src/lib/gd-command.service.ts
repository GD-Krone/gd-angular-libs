import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GdCommandService {

  constructor() { }

  alert(): void 
  {
    alert("Hello Package")
  }
}
