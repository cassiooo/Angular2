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
var livro_1 = require('../class/livro');
var livro_service_1 = require('../services/livro.service');
var LivroComponent = (function () {
    function LivroComponent(livroService) {
        this.livroService = livroService;
        this.livroObject = new livro_1.Livro();
        this.edit = false;
    }
    LivroComponent.prototype.listar = function () {
        var _this = this;
        this.livroService.getListLivro()
            .subscribe(function (livro) { return _this.livros = livro; }, function (error) { return _this.errorMessage = error; });
    };
    LivroComponent.prototype.deletarLivro = function (id, i) {
        var _this = this;
        this.i = i;
        this.livroService.deletarLivro(id)
            .subscribe(function (success) { return _this.livros.splice(_this.i, 1); }, function (error) { return _this.errorMessage = error; });
    };
    LivroComponent.prototype.salvarLivro = function (livro) {
        var _this = this;
        if (!livro.titulo) {
            return;
        }
        this.livroService.salvarLivro(livro)
            .subscribe(function (livro) { return _this.popularLista(livro); }, function (error) { return _this.errorMessage = error; });
    };
    LivroComponent.prototype.popularLista = function (livro) {
        this.livros.push(livro);
        this.livroObject = new livro_1.Livro();
    };
    LivroComponent.prototype.editarLivro = function (livro, persistir) {
        var _this = this;
        if (persistir === void 0) { persistir = false; }
        this.edit = true;
        this.livroObject = livro;
        if (persistir) {
            if (!livro.titulo) {
                return;
            }
            this.livroService.salvarLivro(livro)
                .subscribe(function (livro) { return _this.atualizarFormulario(); }, function (error) { return _this.errorMessage = error; });
        }
    };
    LivroComponent.prototype.atualizarFormulario = function () {
        this.livroObject = new livro_1.Livro();
        this.edit = false;
    };
    LivroComponent.prototype.ngOnInit = function () {
        this.listar();
    };
    LivroComponent = __decorate([
        core_1.Component({
            selector: 'livro',
            templateUrl: 'app/livro/templates/livro.template.html',
            providers: [livro_service_1.LivroService]
        }), 
        __metadata('design:paramtypes', [livro_service_1.LivroService])
    ], LivroComponent);
    return LivroComponent;
}());
exports.LivroComponent = LivroComponent;
//# sourceMappingURL=livro.component.js.map