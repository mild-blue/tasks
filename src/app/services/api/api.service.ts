import { Injectable } from '@angular/core';
import { Location } from '../../model/Location';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() {
  }

  public async getLocations(): Promise<Location[]> {
    // TODO: Get locations from https://ockovani.mild.blue/api/locations
    return [];
  }
}
