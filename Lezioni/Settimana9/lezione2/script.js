var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(_ruolo, _contoIniziale, _prelievo1, _prelievo2) {
        this.ruolo = _ruolo;
        this.contoIniziale = _contoIniziale;
        this.prelievo1 = _prelievo1;
        this.prelievo2 = _prelievo2;
    }
    Persona.prototype.calcolo = function () {
        this.contoIniziale = this.contoIniziale - this.prelievo1 - this.prelievo2;
    };
    Persona.prototype.scrivi = function () {
        console.log("il conto residuo \u00E8 di ".concat(this.contoIniziale));
    };
    return Persona;
}());
var Madre = /** @class */ (function (_super) {
    __extends(Madre, _super);
    function Madre(_ruolo, _contoIniziale, _prelievo1, _prelievo2) {
        return _super.call(this, ruolo, contoIniziale, prelievo1, prelievo2) || this;
    }
    Madre.prototype.calcolo = function () {
        this.contoIniziale = this.contoIniziale - this.prelievo1 - this.prelievo2;
    };
    Madre.prototype.calcoloInteresse = function () {
        this.contoIniziale = this.contoIniziale * 0.9;
    };
    Madre.prototype.scrivi = function () {
        console.log("il conto residuo \u00E8 di ".concat(this.contoIniziale));
    };
    return Madre;
}(Persona));
var figlio = new Persona('figlio', 1000, 500, 400);
var mamma = new Madre('madre', 1000, 500, 400);
figlio.scrivi();
mamma.calcolo();
mamma.calcoloInteresse();
mamma.scrivi();
