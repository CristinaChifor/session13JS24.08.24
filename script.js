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

/** Functii cu parametri si return- Sunt compuse din cuvantul cheie function urmat de numele functiei urmat de paranteze rotunde
 *  intre care definim parametrii functiei (optional) (param1, param2) urmate de paranteze acolade { } 
 * in interiorul carora scriem liniile de cod ce dorim sa fie executate in momentul apelarii 
 * functiei printre care trebuie sa existe si o linie de cod ce returneaza o valoare 
 * folosind cuvantul cheie return urmat de valoare.

Apelarea functiilor cu return:
Se realizeaza ca la celelalte functii iar optional putem salva 
valoarea returnata intr-o variabila.
 */

function removeEvenNumbers(arrayToModified) {
    const newArray = [];
    for (const num of arrayToModified) {
        if(num % 2 > 0) {
            newArray.push(num);
        }
    }

    return newArray;
}

const arrayModified = removeEvenNumbers(array1);
console.log(`Modified array1 is: ${arrayModified}`);

const arrayModified2 = removeEvenNumbers(array2);
console.log(`Modified array1 is: ${arrayModified2}`);

const shoppingCart = [];
const stockProducts = [
    {
        name: "Hat",
        price: 22.99,
        stock: 12
    },
    {name: "Tshirts",
    price: 30.99,
    stock: 40
}
];

function moveFromStockToCart(productName) {
    for (const product of stockProducts) {
        if (product.name === productName ) {
            shoppingCart.push({name: product.name, quantity: 1});
            product.stock -= 1;
        }
    }
}

console.log(`Current stock: `, stockProducts);
console.log(`shopping cart: `,shoppingCart);

moveFromStockToCart("Hat");
console.log(`Current stock: `, stockProducts);
console.log(`shopping cart: `, shoppingCart);


/** Functii anonime- Definirea functiilor anonime:
Sunt functii ce le definim fara a fi nevoie sa le denumim dar le putem salva in variabile.
 Folosirea lor va fi posibila prin folosirea variabilei in care este salvata functia. 
 Aceste functii, optional, pot avea parametrii si valori de return.

Apelarea functiilor anonime:
Se realizeaza ca la celelalte functii insa folosim numele variabilei in care e salvata functia.
 */

const printHello = function () {
    console.log("Hello");
};

printHello();

function mapArray(arrayToMap, mappingFunction) {
    const newArray = [];
    for (const element of arrayToMap) {
        let mappingFunctionresult = mappingFunction(element);
        newArray.push(mappingFunctionresult);
    }

    return newArray;
}

const arrayToMap = [1, 2, 3];
const doubledArray = mapArray(arrayToMap, function (el) {
    return el * 2;
});

console.log(`arrayToMap: ${arrayToMap}`);
console.log(`doubledArray: ${doubledArray}`);

const doubled2 = arrayToMap.map(function (el) {
    return el * 2;
});

console.log(`doubled2: ${doubled2}`);

/** Functiile sageata- Arrow functions sunt o sintaxa mai concisa si mai compacta
 *  pentru definirea functiilor în JavaScript. Această sintaxa a fost introdusa in ECMAScript 6 (ES6) si ofera
 *  o alternativa la modurile traditionale de definire a functiilor. 
 * Arrow functions sunt adesea folosite pentru a simplifica codul si pentru a oferi o modalitate mai
 *  eleganta de a lucra cu functii anonime.
 */

const sayHello = () => {
    console.log("Hello");
};

sayHello();

const sayHelloTo = (personName) => {
    console.log(`Hello ${personName}`);
};

sayHelloTo("Cristina");

const getGreeting = (greetedPerson) => {
    return `Greetings ${greetedPerson}!`;
};

let greeting = getGreeting("Christina");
console.log(greeting);

greeting = getGreeting("Maria");
console.log(greeting);

const doubled3 = arrayToMap.map((el) => {
    return el * 2;
    // const doubled3 =arrayToMap.map(el => el *2)
});
console.log(`doubled3: ${doubled3}`);

