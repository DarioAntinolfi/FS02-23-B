var sorteggio;
var giocatore1;
var giocatore2;
function indovina() {
    sorteggio = Math.floor(Math.random() * 100) + 1;
    giocatore1 = Math.floor(Math.random() * 100) + 1;
    giocatore2 = Math.floor(Math.random() * 100) + 1;
    console.log("è uscito il numero " + sorteggio);
    console.log("il giocatore 1 ha scelto " + giocatore1);
    console.log("il giocatore 2 ha scelto " + giocatore2);
    if (giocatore1 == giocatore2) {
        console.log("i giocatori hanno scelto lo stesso numero");
    }
    else {
        if (sorteggio == giocatore1) {
            console.log("il giocatore 1 ha indovinato");
        }
        else if (sorteggio == giocatore2) {
            console.log("il giocatore 2 ha indovinato");
        }
        else if (Math.abs(sorteggio - giocatore1) < Math.abs(sorteggio - giocatore2)) {
            console.log("il giocatore 1 si è avvicinato di più");
        }
        else if (Math.abs(sorteggio - giocatore2) < Math.abs(sorteggio - giocatore1)) {
            console.log("il giocatore 2 si è avvicinato di più");
        }
        else if (Math.abs(sorteggio - giocatore2) == Math.abs(sorteggio - giocatore1)) {
            console.log("pareggio");
        }
    }
}
indovina();
