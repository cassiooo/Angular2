import { Injectable } from '@angular/core';
import { Usuario } from '../class/usuario';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class UsuarioService {
    usuarios: Usuario[];
    private usuarioUrl = 'https://cursoangularjs2restful.herokuapp.com/usuario';

    constructor(private http: Http) { }

    getListUsuario(): Observable<Usuario[]> {
        /*this.usuarios = [
            { id: 11, nome: 'João', idade: 20 },
            { id: 12, nome: 'Maria', idade: 24 },
            { id: 13, nome: 'Joana', idade: 29 },
            { id: 14, nome: 'José', idade: 60 },
            { id: 15, nome: 'Magneta', idade: 89 },
            { id: 16, nome: 'RubberMan', idade: 21 },
            { id: 17, nome: 'Dynama', idade: 29 },
            { id: 18, nome: 'Dr IQ', idade: 26 },
            { id: 19, nome: 'Nataniel', idade: 25 },
            { id: 20, nome: 'Jéssica', idade: 23 }
        ];
        return Promise.resolve(this.usuarios);*/
        return this.http.get(this.usuarioUrl)
            .map(res => res.json())
            .catch(this.handleError);
    }

    deletarUsuario(id: string): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.delete(this.usuarioUrl + "/" + id, options);
    }

    salvarUsuario(usuario: Usuario): Observable<Usuario> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        if (!usuario._id) {
            return this.http.post(this.usuarioUrl, usuario, options)
                .map(res => res.json())
                .catch(this.handleError);
        } else {
            return this.http.put(this.usuarioUrl + "/" + usuario._id, usuario, options)
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