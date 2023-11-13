import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MapperService} from "./mapper.service";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AmenitiesService {
  http = inject(HttpClient)
  mapper = inject(MapperService)
  constructor() { }

  getAmenities() {
    this.http.get('https://my-amenities-api.com/amenities').pipe(
      map((amenities: any) => this.mapper.map(amenities))
    )
  }

}
