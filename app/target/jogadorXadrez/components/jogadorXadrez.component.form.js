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
var router_1 = require("@angular/router");
var JogadorXadrezComponentForm = (function () {
    function JogadorXadrezComponentForm(jogadorXadrezService, router, routeActivated) {
        this.jogadorXadrezService = jogadorXadrezService;
        this.router = router;
        this.routeActivated = routeActivated;
    }
    JogadorXadrezComponentForm.prototype.salvar = function (jogadorXadrez) {
        var _this = this;
        if (!jogadorXadrez.nome) {
            return;
        }
        this.jogadorXadrezService.salvarJogadorXadrez(jogadorXadrez)
            .subscribe(function (jogadorXadrez) { return _this.router.navigate(['jogadorXadrez']); }, function (error) { return _this.errorMessage = error; });
    };
    JogadorXadrezComponentForm.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.routeActivated.params.subscribe(function (params) {
            var id = params['id'];
            _this.jogadorXadrezObject = new jogadorXadrez_1.JogadorXadrez();
            if (id) {
                console.log(id);
                _this.jogadorXadrezService.get(id)
                    .subscribe(function (jogadorXadrez) { return _this.jogadorXadrezObject = jogadorXadrez; }, function (error) { return _this.errorMessage = error; });
            }
        });
    };
    return JogadorXadrezComponentForm;
}());
JogadorXadrezComponentForm = __decorate([
    core_1.Component({
        selector: 'jogadorXadrez-form',
        templateUrl: 'app/jogadorXadrez/templates/jogadorXadrez.template.form.html',
        providers: [jogadorXadrez_service_1.JogadorXadrezService]
    }),
    __metadata("design:paramtypes", [jogadorXadrez_service_1.JogadorXadrezService,
        router_1.Router,
        router_1.ActivatedRoute])
], JogadorXadrezComponentForm);
exports.JogadorXadrezComponentForm = JogadorXadrezComponentForm;
//# sourceMappingURL=jogadorXadrez.component.form.js.map