// Esercizio 1

class User {
    constructor (_firstName, _lastName, _age, _location){
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
        this.location = _location
    }
}

const user1 = new User ("Aldo", "Sensi", 20, "Napoli");
const user2 = new User ("Michele", "Tonni", 35, "Verona");

if(user1.age < user2.age)
    console.log(user2.firstName + " è più vecchio di " + user1.firstName)
    else console.log(user1.firstName + " è più vecchio di " + user2.firstName)

// Esercizio 2
