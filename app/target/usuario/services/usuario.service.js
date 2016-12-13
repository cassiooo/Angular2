"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var http_2 = require("@angular/http");
var UsuarioService = (function () {
    function UsuarioService(http) {
        this.http = http;
        this.usuarioUrl = 'https://cursoangularjs2restful.herokuapp.com/usuario';
    }
    UsuarioService.prototype.getListUsuario = function () {
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
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    UsuarioService.prototype.deletarUsuario = function (id) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.delete(this.usuarioUrl + "/" + id, options);
    };
    UsuarioService.prototype.salvarUsuario = function (usuario) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        if (!usuario._id) {
            return this.http.post(this.usuarioUrl, usuario, options)
                .map(function (res) { return res.json(); })
                .catch(this.handleError);
        }
        else {
            return this.http.put(this.usuarioUrl + "/" + usuario._id, usuario, options)
                .map(function (res) { return res.json(); })
                .catch(this.handleError);
        }
    };
    UsuarioService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    return UsuarioService;
}());
UsuarioService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UsuarioService);
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuario.service.js.map