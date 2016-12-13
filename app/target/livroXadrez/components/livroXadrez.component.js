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
var core_1 = require('@angular/core');
var livroXadrez_1 = require('../class/livroXadrez');
var livroXadrez_service_1 = require('../services/livroXadrez.service');
var LivroXadrezComponent = (function () {
    function LivroXadrezComponent(livroXadrezService) {
        this.livroXadrezService = livroXadrezService;
        this.livroXadrezObject = new livroXadrez_1.LivroXadrez();
        this.edit = false;
    }
    LivroXadrezComponent.prototype.listar = function () {
        var _this = this;
        this.livroXadrezService.getListLivroXadrez()
            .subscribe(function (livroXadrez) { return _this.livrosXadrez = livroXadrez; }, function (error) { return _this.errorMessage = error; });
    };
    LivroXadrezComponent.prototype.deletarLivroXadrez = function (id, i) {
        var _this = this;
        this.i = i;
        this.livroXadrezService.deletarLivroXadrez(id)
            .subscribe(function (success) { return _this.livrosXadrez.splice(_this.i, 1); }, function (error) { return _this.errorMessage = error; });
    };
    LivroXadrezComponent.prototype.salvarLivroXadrez = function (livroXadrez) {
        var _this = this;
        if (!livroXadrez.titulo) {
            return;
        }
        this.livroXadrezService.salvarLivroXadrez(livroXadrez)
            .subscribe(function (livroXadrez) { return _this.popularLista(livroXadrez); }, function (error) { return _this.errorMessage = error; });
    };
    LivroXadrezComponent.prototype.popularLista = function (livroXadrez) {
        this.livrosXadrez.push(livroXadrez);
        this.livroXadrezObject = new livroXadrez_1.LivroXadrez();
    };
    LivroXadrezComponent.prototype.editarLivroXadrez = function (livroXadrez, persistir) {
        var _this = this;
        if (persistir === void 0) { persistir = false; }
        this.edit = true;
        this.livroXadrezObject = livroXadrez;
        if (persistir) {
            if (!livroXadrez.titulo) {
                return;
            }
            this.livroXadrezService.salvarLivroXadrez(livroXadrez)
                .subscribe(function (livroXadrez) { return _this.atualizarFormulario(); }, function (error) { return _this.errorMessage = error; });
        }
    };
    LivroXadrezComponent.prototype.atualizarFormulario = function () {
        this.livroXadrezObject = new livroXadrez_1.LivroXadrez();
        this.edit = false;
    };
    LivroXadrezComponent.prototype.ngOnInit = function () {
        this.listar();
    };
    LivroXadrezComponent = __decorate([
        core_1.Component({
            selector: 'livroXadrez',
            templateUrl: 'app/livroXadrez/templates/livroXadrez.template.html',
            providers: [livroXadrez_service_1.LivroXadrezService]
        }), 
        __metadata('design:paramtypes', [livroXadrez_service_1.LivroXadrezService])
    ], LivroXadrezComponent);
    return LivroXadrezComponent;
}());
exports.LivroXadrezComponent = LivroXadrezComponent;
//# sourceMappingURL=livroXadrez.component.js.map