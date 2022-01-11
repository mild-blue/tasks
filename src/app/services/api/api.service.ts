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

        const url = "https://ockovani.mild.blue/api/locations"

        const response = await fetch(url);
        if (response.status == 200) {
            const data = await response.json();
            return data;
        }
        else {
            return []
        }

    }

}