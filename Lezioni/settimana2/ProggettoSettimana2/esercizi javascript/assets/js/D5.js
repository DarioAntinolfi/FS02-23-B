/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
console.log('esercizio 1')
for (i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log('esercizio 2')
pets.sort();
for (i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log('esercizio 3')
pets.reverse();
for (i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log('esercizio 4')
let infondo = pets[0]
pets.splice(0, 1)
pets.push(infondo)
for (i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

console.log('esercizio 5')
cars.forEach(Funz)

function Funz() {
  for (i = 0; i < cars.length; i++) {
    cars[i]['licensePlate'] = "AA001AA"
  }
}
console.log(cars)


/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log('esercizio 6')
cars.push({ brand: 'fiat', model: 'punto', color: 'fango', trims: ['city', 'life'], licensePlate: 'AA001AA', })


for (i = 0; i < cars.length; i++) {
  cars[i].trims.pop()
}
console.log(cars)
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

console.log('esercizio 7')

for (i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0])
}
console.log(justTrims)

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log('esercizio 8')
let lettera = ""
for (i = 0; i < cars.length; i++) {
  for (let cercatore of cars[i].color[0]) {
    lettera = cercatore
    if (lettera == 'b') {
      console.log('Fizz')
    } else {
      console.log('buzz')
    }
  }
}

/*   if(=='b'){
    console.log('Fizz')
  } else {
    console.log('bizz')
  }
  */

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
console.log('esercizio 9')
let k = 0
while (k < numericArray.length) {
  console.log(numericArray[k]);
  if (numericArray[k] == 32) {
    k = 100
  }
  k++;
}
/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
console.log('esercizio 10')
const charactersArray = ["g", "n", "u", "z", "d"]

const numarray = []
for (i = 0; i < charactersArray.length; i++) {
  switch (true) {
    case charactersArray[i] === "a":
      numarray.push(1)
      break;
    case charactersArray[i] === "b":
      numarray.push(2)
      break;
    case charactersArray[i] === "c":
      numarray.push(3)
      break;
    case charactersArray[i] === "d":
      numarray.push(4)
      break;
    case charactersArray[i] === "e":
      numarray.push(5)
      break;
    case charactersArray[i] === "f":
      numarray.push(6)
      break;
    case charactersArray[i] === "g":
      numarray.push(7)
      break;
    case charactersArray[i] === "h":
      numarray.push(8)
      break;
    case charactersArray[i] === "i":
      numarray.push(9)
      break;
    case charactersArray[i] === "j":
      numarray.push(10)
      break;
    case charactersArray[i] === "k":
      numarray.push(11)
      break;
    case charactersArray[i] === "l":
      numarray.push(12)
      break;
    case charactersArray[i] === "m":
      numarray.push(13)
      break;
    case charactersArray[i] === "n":
      numarray.push(14)
      break;
    case charactersArray[i] === "o":
      numarray.push(15)
      break;
    case charactersArray[i] === "p":
      numarray.push(16)
      break;
    case charactersArray[i] === "q":
      numarray.push(17)
      break;
    case charactersArray[i] === "r":
      numarray.push(18)
      break;
    case charactersArray[i] === "s":
      numarray.push(19)
      break;
    case charactersArray[i] === "t":
      numarray.push(20)
      break;
    case charactersArray[i] === "u":
      numarray.push(21)
      break;
    case charactersArray[i] === "v":
      numarray.push(22)
      break;
    case charactersArray[i] === "w":
      numarray.push(23)
      break;
    case charactersArray[i] === "x":
      numarray.push(24)
      break;

    case charactersArray[i] === "y":
      numarray.push(25)
      break;
    case charactersArray[i] === "z":
      numarray.push(26)
      break;
  }
}
console.log(numarray)