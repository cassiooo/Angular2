import { Injectable } from '@angular/core';
import { LivroXadrez } from '../class/livroXadrez';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class LivroXadrezService {
    livrosXadrez: LivroXadrez[];
    private livroXadrezUrl = 'https://cassiooo.herokuapp.com/livroXadrez';

    constructor(private http: Http) { }

    getListLivroXadrez(): Observable<LivroXadrez[]> {

        return this.http.get(this.livroXadrezUrl)
            .map(res => res.json())
            .catch(this.handleError);
    }

    deletarLivroXadrez(id: string): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.delete(this.livroXadrezUrl + "/" + id, options);
    }

    salvarLivroXadrez(livroXadrez: LivroXadrez): Observable<LivroXadrez> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        if (!livroXadrez._id) {
            return this.http.post(this.livroXadrezUrl, livroXadrez, options)
                .map(res => res.json())
                .catch(this.handleError);
        } else {
            return this.http.put(this.livroXadrezUrl + "/" + livroXadrez._id, livroXadrez, options)
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