class Persona {
    ruolo: string;
    contoIniziale: number;
    prelievo1: number;
    prelievo2: number;
    constructor (_ruolo: string, _contoIniziale: number, _prelievo1: number,  _prelievo2: number) {
        this.ruolo = _ruolo;
        this.contoIniziale = _contoIniziale;
        this.prelievo1 = _prelievo1;
        this.prelievo2 = _prelievo2;
    }
    calcolo(): void {
        this.contoIniziale = this.contoIniziale - this.prelievo1 - this.prelievo2
    }
    scrivi(): void {
        console.log(`il conto residuo è di ${this.contoIniziale}`)
    }
}

class Madre extends Persona {
    constructor (_ruolo: string, _contoIniziale: number, _prelievo1: number,  _prelievo2: number,) {
        super (_ruolo, _contoIniziale, _prelievo1, _prelievo2);
    }
    calcolo(): void {
        this.contoIniziale = this.contoIniziale - this.prelievo1 - this.prelievo2
    }
    calcoloInteresse(): void {
        this.contoIniziale = this.contoIniziale * 0.9;
    }
    scrivi(): void {
        console.log(`il conto residuo è di ${this.contoIniziale}`)
    }
}

let figlio = new Persona ('figlio', 1000, 500, 400);
let mamma = new Madre ('madre', 1000, 500, 400);
figlio.scrivi();
mamma.calcolo();
mamma.calcoloInteresse();
mamma.scrivi();