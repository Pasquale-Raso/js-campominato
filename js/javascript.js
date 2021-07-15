// Il computer deve generare 16 numeri casuali tra 1 e 100, queste saranno le nostre bombe.
// I numeri delle bombe non possono essere duplicati (i 16 numeri devono essere tutti diversi)
// Il giocatore, deve cercare di non prendere le bombe. Gli chiederemo 100 - 16 volte di scegliere un numero, uno alla volta, sempre compreso tra 1 e 100.
// L'utente non può inserire 2 volte lo stesso numero
// Ogni  volta che l'utente sceglie un numero che non è presente tra le bombe, guadagna un punto e poi gli chiediamo un altro numero.
// Se il numero scelto dall'utente è presente tra i numeri bomba, la partita termina.
// Quando la partita termina, comunichiamo all'utente il suo punteggio.

// ____________________________________________PREPARAZIONE________________________________________________________________
var totalNumbers = 5;
var totalBombs = 2;
var possibilita = totalNumbers - totalBombs;
var numeriBombe = [1, 2];

// while (numeriBombe.length < totalBombs) {
//   var numeroCasuale = getRandomNumber(1, totalNumbers);

//   //---------------------------------------- o cosi-------------------------------
//   // while (numeriBombe.length < totalBombs) {
//   //   var numeroCasuale = Math.floor(Math.random() * (totalNumber - 1 + 1) + 1);

//   if (!isInArray(numeroCasuale, numeriBombe)) {
//     numeriBombe.push(numeroCasuale);
//   }
//   //---------------------------------------- o cosi-------------------------------
//   // if (!numeriBombe.includes(numeroCasuale)) {
//   //   numeriBombe.push(numeroCasuale);
//   // }
// }

// _______________________________________________GIOCO__________________________________________________________________

var numeriUtente = [];

// while (numeriUtente.length < possibilita) {
//   var userChoice = getUserNumber(1, totalNumbers);
// }

var userChoice = prompt("inserisci un numero da 1 a " + totalNumbers);

while (numeriUtente.length < possibilita) {
  while (
    !userChoice ||
    userChoice.trim() === "" ||
    isNaN(userChoice) ||
    userChoice < 1 ||
    userChoice > totalNumbers
  ) {
    userChoice = prompt("inserisci un numero da 1 a " + totalNumbers);
  }
  userChoice = parseInt(userChoice);
}

// _____________________________________________FUNZIONE_________________________________________________________________

// genera un numero tra il minimo e il massimo

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// controlla che un dato elemento sia presente in un ARRAY
function isInArray(needle, arr) {
  var found = false;
  var i = 0;
  while (!found && i < arr.length) {
    if (needle === arr[i]) {
      found = true;
    }
    i++;
  }
  return found;
}

// controlla i numeri inseriti dall'utente

// function getUserNumber(min, max) {
//   var number;
//   do {
//     number = prompt("inserisci un numero da " + min + " a " + max);
//   } while (
//     !number ||
//     number.trim() === "" ||
//     isNaN(number) ||
//     number < min ||
//     number > max
//   );
//   return parseInt(number);
// }
