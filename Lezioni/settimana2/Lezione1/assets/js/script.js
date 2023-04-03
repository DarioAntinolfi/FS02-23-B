document.write('<h3>dove esce? </h3>')

document.getElementById('saluto').innerHTML = 'ciao';
document.getElementById('saluto2').innerHTML = 'ciao';

/* window.alert('questo è un allert');
alert(8 + 9); */

console.log('questa è una pagina');

var valore = 15;
console.log(valore);
console.log(valore + 3);

numero = 5;
document.getElementById('numero').innerHTML = numero;
document.getElementById('somma').innerHTML = numero + 6;
var altrotesto = 'numero 5'
function riassegna (){
    altrotesto = 'cambio'
    document.getElementById('altrotesto').innerHTML = altrotesto
}
 
setTimeout(riassegna, 2000);

function clicca(){
    document.write('😊😊😊😊😊😊😊😊');
}