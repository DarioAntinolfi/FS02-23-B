/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero1 = 10;
let numero2 = 15;
function confronto (a, b){
  if (a<b) {
    return b;

  } else {
    return a;
  }
}
console.log(confronto (numero1, numero2));
let magiore = confronto (numero1, numero2)
document.getElementById('es1').innerHTML = 'il numero maggiore è ' + magiore;

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numero3 = 14;
function div5 (a){
  if (a == 5){
    return true;
  } else {
    return false
  }
}
console.log(div5(numero3))


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numero4 = 140;
function div5 (a){
  if (a % 5 == 0){
    return true;
  } else {
    return false
  }
}
console.log(div5(numero4))

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */ // ??

let numero5 = 5
let numero6 = 4
function regola8 (a, b){
  if (a == 8 || b == 8 || a + b || a - b == 8 || b - a == 8){
    return true;
  } else {
    return false;
  }
}
let controllo = regola8(numero5, numero6);
console.log(controllo)

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 40
function Sconto(a){
  if(a >= 50){
    return a;
  } else{
    return a + 10;
  }
}

let sconto1 = Sconto(totalShoppingCart);
console.log(sconto1)


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart2 = 60
function Sconto2(a){
  a = a - a * 20 / 100;
  if(a >= 50){
    return a ;
  } else{
    return a + 10;
  }
}

let sconto2 = Sconto2(totalShoppingCart2);
console.log(sconto2)

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 12;
let num2 = 16;
let num3 = 10;
/*
function ordina(a, b, c){
  if (a >= b >= c){
    return a += ' ' += b += ' ' += c;
  } else if (a >= c >= b) {
    return a += ' ' += c += ' ' += b;
  } else if (b >= a >= c){
    return b += ' ' += a += ' ' += c;
  } else if (b >= c >= a){
    return b += ' ' += c += ' ' += b;
  } else if (c >= a >= b){
    return c += ' ' += a += ' ' += b;
  } else if (c >= b >= a){
    return c += ' ' += b += ' ' += a;
  }
}
let ordine = ordina(num1, num2, num3)
console.log(ordine)
*/

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let valore = 'cane'
function tipo(a){
  if(typeof a == "number"){
    return true;
  } else {
    return false;
  }
}
let risultato = tipo(valore)
console.log(risultato)

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num4 = 17
function due (a){
  if(a % 2 == 0){
    return true;
  } else {
    return false;
  }
}
let ddue = due(num4)
console.log(ddue)

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 7
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/


/* SCRIVI QUI LA TUA RISPOSTA */

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = "toronto"
console.log(me.city)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
let array = []
array.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(array)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
