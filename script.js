//  Tema Heartbeat JS Array&Loops

// Ex 1 : Tipăriți toate numerele pare de la 0 la 10
// Încercați să rezolvați această problemă cât mai eficient posibil. Luați în considerare utilizarea buclelor 
// care vă vor permite să tastați cele mai puține caractere / comenzi (se acceptă orice abordare bazată pe bucle).
//  Deși ați putea pur și simplu să tipăriți numerele pare, fiți creativi și încercați să le generați 
// într-un mod în care să funcționeze indiferent de limita setată (până la 10 sau chiar până la 10.000).

const tiparesteNumerePare = (limita) => {
    for (let i = 0; i <= limita; i += 2) {
        console.log(i);
    }
};

console.log("Numerele pare de la 0 la 10:");
tiparesteNumerePare(10);

console.log("Numerele pare de la 0 la 40:");
tiparesteNumerePare(40);

// Ex 2 : Calculați suma numerelor dintr-un șir de numere
// Vă puteți crea propriul șir de numere, dar luați în considerare să încercați această problemă cu câteva seturi diferite
//  pentru a vă verifica soluția. De asemenea, puteți încerca să utilizați matrice de lungimi diferite.

const calculeazaSumaNumerelor = (numere) => {
    let suma = 0;
    for (let i = 0; i < numere.length; i++) {
        suma += numere[i];
    }
    return suma;
};

const sirDeNumereUnu = [1, 2, 3, 4, 5];
console.log("Suma numerelor din sirul unu este :", calculeazaSumaNumerelor(sirDeNumereUnu));

const sirDeNumereDoi = [2, 4, 6, 8, 10];
console.log("Suma numerelor din sirul doi este :", calculeazaSumaNumerelor(sirDeNumereDoi));

// Ex 3 : Creați o funcție care inversează un șir de numere
// Vă puteți crea propriul șir de numere, dar luați în considerare să încercați această problemă cu câteva seturi diferite
//  pentru a vă verifica soluția. De asemenea, puteți încerca să utilizați matrice de lungimi diferite. Un șir de numere 
//  va fi trimis ca date de intrare și, ca rezultat, funcția va returna un șir nou de numere cu elementele primului în ordine inversă.

const inverseazaSirulDeNumere = (numere) => {
    let sirInversat = [];
    for (let i = numere.length - 1; i >= 0; i--) {
        sirInversat.push(numere[i]);
    }
    return sirInversat;
};

const sirDeNumere = [1, 2, 3, 4, 5];
console.log("Sirul inversat este :", inverseazaSirulDeNumere(sirDeNumere));

// Ex 4 : Returnează numărul de vocale dintr-un șir de caractere (string)
// Creați o funcție care va returna un număr întreg al numărului de vocale găsite într-un șir. Aceasta este o modalitate excelentă
//  de a practica determinarea caracteristicilor unui set de date.

const numaraVocale = (sirVocale) => {
    let vocale = "aeiouAEIOU";
    let numarVocale = 0;
    
    for (let i = 0; i < sirVocale.length; i++) {
        if (vocale.includes(sirVocale[i])) {
            numarVocale++;
        }
    }
    
    return numarVocale;
};

const text = "Numar de vocale in acest text.";
console.log("Numar vocale :", numaraVocale(text));