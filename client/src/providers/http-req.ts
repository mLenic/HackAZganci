import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpReq {
    constructor(public http: HttpClient) {}

    public getRequest(url: string): Promise<any> {
        return this.http.get(url)
            .toPromise()
            .catch(this.handleError);
    }

    public postRequest(url: string, data: any): Promise<any> {
        const body = JSON.stringify(data);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

        return this.http.post(url, body, {headers})
            .toPromise()
            .catch(this.handleError);
    }

    public postSingleRequest(url: string): Promise<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' })
        return this.http.post(url, {headers})
        .toPromise()
        .catch(this.handleError);
    }
 
    private handleError (error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
          const err = error || '';
          errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
          errMsg = error.message ? error.message : error.toString();
        }
        console.log(error.message);
        return Observable.throw(error);
      }
};