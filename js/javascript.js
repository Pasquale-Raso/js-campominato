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

// ___________________crea array per bombe e genera 16 numeri random_________________________

var numeriBombe = [];

for (let i = 0; i < 16; i++) {
  var random = Math.floor(Math.random() * 100 + 1);
  numeriBombe.push(random);
}
console.log(numeriBombe);

// ___________________chiedi il numero all'utente_________________________

var n1 = prompt("Inserisci il numero", "5");
for (let i = 0; i < numeriBombe; i++) {
  if (n1 == numeriBombe) {
    alert("BOOM! Hai perso!");
  } else {
    alert("BENE! CONTINUA A GIOCARE!");
    var n1 = prompt("Inserisci il numero", "5");
  }
}
