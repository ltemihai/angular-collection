import { Injectable } from '@angular/core';
import {AmenitiesService} from "./amenities.service";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HospitalityProviderService extends AmenitiesService {
  constructor() {
    super()
  }

  notifyHelpdesk() {
    this.http.get('https://my-hospitality-provider-api.com/helpdesk')
      .pipe(
        map((helpdesk: any) => this.mapper.map(helpdesk))
      )
  }
}
