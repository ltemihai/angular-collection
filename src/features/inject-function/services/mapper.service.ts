import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapperService {

  constructor() {

  }

  map(value: any) {
    console.log('map');
  }
}
