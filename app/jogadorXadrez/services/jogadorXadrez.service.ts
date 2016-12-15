import { Injectable } from '@angular/core';
import { JogadorXadrez } from '../class/jogadorXadrez';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class JogadorXadrezService {
    jogadoresXadrez: JogadorXadrez[];
    private jogadorXadrezUrl = 'https://cassiooo.herokuapp.com/jogadorXadrez';

    constructor(private http: Http) { }
    
    get(id: string): Observable<JogadorXadrez> {
        return this.http.get(this.jogadorXadrezUrl + "/" + id)
            .map(res => res.json())
            .catch(this.handleError);
    }
    
    getListJogadorXadrez(): Observable<JogadorXadrez[]> {

        return this.http.get(this.jogadorXadrezUrl)
            .map(res => res.json())
            .catch(this.handleError);
    }

    deletarJogadorXadrez(id: string): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.delete(this.jogadorXadrezUrl + "/" + id, options);
    }

    salvarJogadorXadrez(jogadorXadrez: JogadorXadrez): Observable<JogadorXadrez> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        if (!jogadorXadrez._id) {
            return this.http.post(this.jogadorXadrezUrl, jogadorXadrez, options)
                .map(res => res.json())
                .catch(this.handleError);
        } else {
            return this.http.put(this.jogadorXadrezUrl + "/" + jogadorXadrez._id, jogadorXadrez, options)
                .map(res => res.json())
                .catch(this.handleError);
        }
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