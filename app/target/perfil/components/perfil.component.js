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
var perfil_1 = require("../class/perfil");
var perfil_service_1 = require("../services/perfil.service");
var PerfilComponent = (function () {
    function PerfilComponent(perfilService) {
        this.perfilService = perfilService;
        this.perfilObject = new perfil_1.Perfil();
    }
    PerfilComponent.prototype.listar = function () {
        var _this = this;
        this.perfilService.getListPerfil()
            .subscribe(function (perfis) { return _this.perfis = perfis; }, function (error) { return _this.errorMessage = error; });
    };
    PerfilComponent.prototype.ngOnInit = function () {
        this.listar();
    };
    return PerfilComponent;
}());
PerfilComponent = __decorate([
    core_1.Component({
        selector: 'perfil',
        templateUrl: 'app/perfil/templates/perfil.template.html',
        providers: [perfil_service_1.PerfilService]
    }),
    __metadata("design:paramtypes", [perfil_service_1.PerfilService])
], PerfilComponent);
exports.PerfilComponent = PerfilComponent;
//# sourceMappingURL=perfil.component.js.map