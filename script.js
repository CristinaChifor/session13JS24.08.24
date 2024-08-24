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
Se realizeaza prin folosirea numelui functiei unde dorim sa se execute 
blocul de cod urmat de parantezele rotunde. 
  */

function printDigits() {
    for(let i = 0; i <=9; i++) {
        console.log(`digit: `, i);
    }
} // pasul 1- definirea functiei

printDigits(); // apelarea functiei
// printDigits();

/** Functii cu parametri- Sunt compuse din cuvantul cheie function urmat de numele functiei urmat de paranteze rotunde 
 * intre care definim parametrii functiei (param1, param2) urmate de paranteze acolade { } 
 * in interiorul carora scriem liniile de cod ce dorim sa fie executate in momentul apelarii functiei.
Apelarea functiilor cu parametri:
Se realizeaza prin folosirea numelui functiei unde dorim sa se execute blocul de cod 
urmat de parantezele rotunde intre care trecem valori reale pentru parametri - aceste valori se numesc argumente. 
 */

function arrayHasElement(arrayToCheck, element) {
    let found = false
    for (const elem of arrayToCheck ) {
        if(elem === element) {
            console.log(`Array ${arrayToCheck} has element ${element}`);
            found = true;
            break;
        }

        if(found) {
            console.log(`Array ${arrayToCheck} has element ${element}`);
        } else {
            console.log(`Array ${arrayToCheck} does not have element ${element}`);
        }
    }
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 10, 21];
const valueToCheck1 = 10;
const valueToCheck2 = 30;

arrayHasElement(array1, valueToCheck1);
arrayHasElement(array2, valueToCheck1);
arrayHasElement(array1, valueToCheck2);
arrayHasElement(["ala", "bala", "portocala"], "ala");
arrayHasElement(array1, "ala");