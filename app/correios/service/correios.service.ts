import { Injectable } from '@angular/core';
import { Correios } from '../class/correios';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class CorreiosService {
    private correiosUrl = 'http://viacep.com.br/ws/';

    constructor(private http: Http) { }

    getCep(cep): Observable<Correios[]> {
        return this.http.get(this.correiosUrl+cep+"/json")
            .map(res => res.json())
            .catch(this.handleError);
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}