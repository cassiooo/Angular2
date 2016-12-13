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
var jogadorXadrez_1 = require("../class/jogadorXadrez");
var jogadorXadrez_service_1 = require("../services/jogadorXadrez.service");
var JogadorXadrezComponent = (function () {
    function JogadorXadrezComponent(jogadorXadrezService) {
        this.jogadorXadrezService = jogadorXadrezService;
        this.jogadorXadrezObject = new jogadorXadrez_1.JogadorXadrez();
        this.edit = false;
    }
    JogadorXadrezComponent.prototype.listar = function () {
        var _this = this;
        this.jogadorXadrezService.getListJogadorXadrez()
            .subscribe(function (jogadorXadrez) { return _this.jogadoresXadrez = jogadorXadrez; }, function (error) { return _this.errorMessage = error; });
    };
    JogadorXadrezComponent.prototype.deletarJogadorXadrez = function (id, i) {
        var _this = this;
        this.i = i;
        this.jogadorXadrezService.deletarJogadorXadrez(id)
            .subscribe(function (success) { return _this.jogadoresXadrez.splice(_this.i, 1); }, function (error) { return _this.errorMessage = error; });
    };
    JogadorXadrezComponent.prototype.salvarJogadorXadrez = function (jogadorXadrez) {
        var _this = this;
        if (!jogadorXadrez.nome) {
            return;
        }
        this.jogadorXadrezService.salvarJogadorXadrez(jogadorXadrez)
            .subscribe(function (jogadorXadrez) { return _this.popularLista(jogadorXadrez); }, function (error) { return _this.errorMessage = error; });
    };
    JogadorXadrezComponent.prototype.popularLista = function (jogadorXadrez) {
        this.jogadoresXadrez.push(jogadorXadrez);
        this.jogadorXadrezObject = new jogadorXadrez_1.JogadorXadrez();
    };
    JogadorXadrezComponent.prototype.editarJogadorXadrez = function (jogadorXadrez, persistir) {
        var _this = this;
        if (persistir === void 0) { persistir = false; }
        this.edit = true;
        this.jogadorXadrezObject = jogadorXadrez;
        if (persistir) {
            if (!jogadorXadrez.nome) {
                return;
            }
            this.jogadorXadrezService.salvarJogadorXadrez(jogadorXadrez)
                .subscribe(function (jogadorXadrez) { return _this.atualizarFormulario(); }, function (error) { return _this.errorMessage = error; });
        }
    };
    JogadorXadrezComponent.prototype.atualizarFormulario = function () {
        this.jogadorXadrezObject = new jogadorXadrez_1.JogadorXadrez();
        this.edit = false;
    };
    JogadorXadrezComponent.prototype.ngOnInit = function () {
        this.listar();
    };
    return JogadorXadrezComponent;
}());
JogadorXadrezComponent = __decorate([
    core_1.Component({
        selector: 'jogadorXadrez',
        templateUrl: 'app/jogadorXadrez/templates/formulario.template.html',
        providers: [jogadorXadrez_service_1.JogadorXadrezService]
    }),
    __metadata("design:paramtypes", [jogadorXadrez_service_1.JogadorXadrezService])
], JogadorXadrezComponent);
exports.JogadorXadrezComponent = JogadorXadrezComponent;
//# sourceMappingURL=jogadorXadrez.component.js.map