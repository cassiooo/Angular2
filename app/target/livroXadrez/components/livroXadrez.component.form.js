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
var livroXadrez_1 = require("../class/livroXadrez");
var livroXadrez_service_1 = require("../services/livroXadrez.service");
var router_1 = require("@angular/router");
var LivroXadrezComponentForm = (function () {
    function LivroXadrezComponentForm(livroXadrezService, router, routeActivated) {
        this.livroXadrezService = livroXadrezService;
        this.router = router;
        this.routeActivated = routeActivated;
    }
    LivroXadrezComponentForm.prototype.salvar = function (livroXadrez) {
        var _this = this;
        if (!livroXadrez.titulo) {
            return;
        }
        this.livroXadrezService.salvarLivroXadrez(livroXadrez)
            .subscribe(function (livroXadrez) { return _this.router.navigate(['livroXadrez']); }, function (error) { return _this.errorMessage = error; });
    };
    LivroXadrezComponentForm.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.routeActivated.params.subscribe(function (params) {
            var id = params['id'];
            _this.livroXadrezObject = new livroXadrez_1.LivroXadrez();
            if (id) {
                console.log(id);
                _this.livroXadrezService.get(id)
                    .subscribe(function (livroXadrez) { return _this.livroXadrezObject = livroXadrez; }, function (error) { return _this.errorMessage = error; });
            }
        });
    };
    return LivroXadrezComponentForm;
}());
LivroXadrezComponentForm = __decorate([
    core_1.Component({
        selector: 'livroXadrez-form',
        templateUrl: 'app/livroXadrez/templates/livroXadrez.template.form.html',
        providers: [livroXadrez_service_1.LivroXadrezService]
    }),
    __metadata("design:paramtypes", [livroXadrez_service_1.LivroXadrezService,
        router_1.Router,
        router_1.ActivatedRoute])
], LivroXadrezComponentForm);
exports.LivroXadrezComponentForm = LivroXadrezComponentForm;
//# sourceMappingURL=livroXadrez.component.form.js.map