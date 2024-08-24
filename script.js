console.log("Hello!");

/**Functions
 * Functiile reprezinta blocuri de cod reutilizabile, definite pentru a efectua anumite actiuni. 
 * Functiile sunt un aspect fundamental in JavaScript si 
 * sunt folosite pentru structurarea, eficientizarea si organizarea codului.
 * Functiile pot fi executa operatii in baza unor parametri (date de intrare)
 si pot returna (intoarce) o valoare in urma executiei (date de iesire).
 */

 /** Functii simple- Functiile simple sunt compuse din cuvantul cheie function urmat 
  * de numele functiei urmat de paranteze rotunde () urmate de paranteze acolade { } 
  * in interiorul carora scriem liniile de cod ce dorim sa fie executate in momentul apelarii functiei.
Apelarea functiilor simple:
Se realizeaza prin folosirea numelui functiei unde dorim sa se execute blocul de cod urmat de parantezele rotunde. 
  */

function printDigits() {
    for(let i = 0; i <=9; i++) {
        console.log(`digit: `, i);
    }
} // pasul 1- definirea functiei

printDigits(); // apelarea functiei
printDigits();