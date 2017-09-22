import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AppService {
    constructor(private http: Http) { }

    private getHeaders() {
        const headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }

    private handleError(error: Response) {
        return Observable.throw(error || 'Server Error');
    }
    getWeather(): Observable<any> {
        return this.http
            .get(`http://api.openweathermap.org/data/2.5/forecast?q=Los Angeles&appid=af8901d304524f56173198707a34c50b`, { headers: this.getHeaders() })
            .map(res => res.json())
            .catch(this.handleError);
    }
}
