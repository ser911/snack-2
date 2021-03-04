// Inserisci un numero, se è pari stampa il numero, se è dispari
// stampa il numero successivo

var primoNumero = parseInt(prompt("Inserisci il primo numero"));
var secondoNumero = parseInt(prompt("Inserisci il secondo numero"));
if (primoNumero % 2 == 0) {
  console.log(primoNumero);
}
else {
  console.log(secondoNumero);
}
