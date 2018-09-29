import { Injectable } from "@angular/core";
import { Geolocation } from '@ionic-native/geolocation';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class GeoService {

    public geoSubject: Subject<any>;

    constructor(private geolocation: Geolocation) {
        this.geoSubject = new Subject<any>();
    }

    public getGeoObservable() {
        return this.geoSubject;
    }
    
    public startWatchingGeolocation() {
        let watch = this.geolocation.watchPosition();
        watch.subscribe((data) => {
            if(data && data['code'] != 1) {
                console.log(data);
                var dtx = {
                    lat: data.coords.latitude,
                    long: data.coords.longitude,
                }
                this.geoSubject.next(dtx);
            }
        });
    }
}