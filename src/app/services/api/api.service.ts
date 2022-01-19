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

        try {
            const response = await fetch(url);
                const data = await response.json();
                return data;
        }
        catch (err) {
            console.log(err);
            return [];
        }
    }
}