"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var pessoa_1 = require('./pessoa');
var Usuario = (function (_super) {
    __extends(Usuario, _super);
    function Usuario() {
        _super.apply(this, arguments);
    }
    return Usuario;
}(pessoa_1.Pessoa));
exports.Usuario = Usuario;
//# sourceMappingURL=usuario.js.map