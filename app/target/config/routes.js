"use strict";
var router_1 = require("@angular/router");
var usuario_component_1 = require("../usuario/components/usuario.component");
var home_component_1 = require("../home/components/home.component");
var perfil_component_1 = require("../perfil/components/perfil.component");
var perfil_component_form_1 = require("../perfil/components/perfil.component.form");
var jogadorXadrez_component_1 = require("../jogadorXadrez/components/jogadorXadrez.component");
var jogadorXadrez_component_form_1 = require("../jogadorXadrez/components/jogadorXadrez.component.form");
var livroXadrez_component_1 = require("../livroXadrez/components/livroXadrez.component");
var livroXadrez_component_form_1 = require("../livroXadrez/components/livroXadrez.component.form");
//Configurações da rota
exports.routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'usuario', component: usuario_component_1.UsuarioComponent },
    { path: 'usuario/:id', component: usuario_component_1.UsuarioComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'perfil', component: perfil_component_1.PerfilComponent },
    { path: 'perfil-add', component: perfil_component_form_1.PerfilComponentForm },
    { path: 'perfil-edit/:id', component: perfil_component_form_1.PerfilComponentForm },
    { path: 'jogadorXadrez', component: jogadorXadrez_component_1.JogadorXadrezComponent },
    { path: 'jogadorXadrez-add', component: jogadorXadrez_component_form_1.JogadorXadrezComponentForm },
    { path: 'jogadorXadrez-edit/:id', component: jogadorXadrez_component_form_1.JogadorXadrezComponentForm },
    { path: 'livroXadrez', component: livroXadrez_component_1.LivroXadrezComponent },
    { path: 'livroXadrez-add', component: livroXadrez_component_form_1.LivroXadrezComponentForm },
    { path: 'livroXadrez-edit/:id', component: livroXadrez_component_form_1.LivroXadrezComponentForm }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=routes.js.map