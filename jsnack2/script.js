// lista dei nomi
let nomi = ["Gary", "Lorenzo", "Gianluca", "Vincenzo", "Andrea"];

// lista dei cognomi
let cognomi = ["Alvarez", "Di Vita", "Liguori", "Rovazzi", "Picchiarello"];

// lista degli invitati con nome e cognome generati casualmente
let invitati = [];

// ciclo per generare casualmente i nomi e i cognomi degli invitati
for (let i = 0; i < 10; i++) {
let nomeCasuale = nomi[Math.floor(Math.random() * nomi.length)];
let cognomeCasuale = cognomi[Math.floor(Math.random() * cognomi.length)];
invitati.push(nomeCasuale + " " + cognomeCasuale);
}

console.log(invitati);
