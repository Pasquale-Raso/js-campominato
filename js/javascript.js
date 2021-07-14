// Il computer deve generare 16 numeri casuali tra 1 e 100, queste saranno le nostre bombe.
// I numeri delle bombe non possono essere duplicati (i 16 numeri devono essere tutti diversi)
// Il giocatore, deve cercare di non prendere le bombe. Gli chiederemo 100 - 16 volte di scegliere un numero, uno alla volta, sempre compreso tra 1 e 100.
// L'utente non può inserire 2 volte lo stesso numero
// Ogni  volta che l'utente sceglie un numero che non è presente tra le bombe, guadagna un punto e poi gli chiediamo un altro numero.
// Se il numero scelto dall'utente è presente tra i numeri bomba, la partita termina.
// Quando la partita termina, comunichiamo all'utente il suo punteggio.

//
//
//
//
//

// ___________________creo array per bombe e genero 16 numeri random_________________________

var Bombe = [];

for (let i = 0; i < 16; i++) {
  var random = Math.floor(Math.random() * 100 + 1);
  Bombe.push(random);
}
console.log(Bombe);

// ___creo una variante di appoggio dei numeri Inseriti Dall'Utente_________________________
var numeriInseritiDaUtente = 0;

for (let i = 0; i < 3; i++) {
  var numeriInseritiDaUtente = prompt("Inserisci il numero", "5");
  if (numeriInseritiDaUtente === Bombe[0]) {
    allert("BOOM! Hai perso!");
  } else {
    allert("BENE! CONTINUA A GIOCARE!");
  }
}
