/* Esercizio 1
1) prendi il valore dell input
2) crea il pulsante che salva in localstorage
3) crea il pulsante che rimuove dal localstorage
4) mostra il valore salvato se esistente
*/

let nome // = document.getElementById('nome')

document.getElementById("salva").onclick = () => {
    nome = document.getElementById('nome').value
    localStorage.setItem("Nome", nome)
    console.log(nome)
    document.getElementById("testo").innerHTML = nome
}

document.getElementById("cancella").onclick = () => {
    nome = ""
    localStorage.removeItem("Nome")
    console.log(nome)
    document.getElementById("testo").innerHTML = nome
}

/* Esercizio2
1) crea una variabile che parta da 0
2) falla incrementare ogni secondo
3) aggiorna il valore ogni secondo
*/

let tempo = 0
document.getElementById("time").innerHTML = tempo
tempo = sessionStorage.getItem("Tempo")
setInterval(() => {
    tempo++
    sessionStorage.setItem("Tempo", tempo)
    document.getElementById("time").innerHTML = tempo
}, 1000);
