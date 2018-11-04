
//  oddNumbers(15);
//  evenNumbers(15);
//  lastDigit();
//  lastDigitChar();
//  printPrime(10);

//  let theLastDigit =  returnLastDigitOfNumber(6548);
//  console.log(theLastDigit);

// Primes
let arrayOFPrimes = returnArrayOfPrimeNumbers(10); // prvite deset prime numbers
console.log(arrayOFPrimes);
// Last Element and Last Digit/Char
let lastElement = (arrayOFPrimes[arrayOFPrimes.length-1]);
let LastDigit =  returnLastDigitOfNumber(lastElement); // return as number not a string
let LastDigitAsString =  returnLastDigitOfNumberAsString(lastElement); // return as String
console.log(LastDigit);
console.log(LastDigitAsString);

// Even Numbers
let listOfEvenNumbers = returnArrayOfEvenNumbers(10);
console.log(listOfEvenNumbers);

// Odd Numbers
let listOfOddNumbers = returnArrayOfOddNumbers(10);
console.log(listOfOddNumbers);

//===========================================================================
// the first 20 odd numbers

function oddNumbers(_limit) {
    var oddNumbers = [];
// vo ovoj slucaj nie go polnime array-to. Toa pocnuva od nula. Nema veze od kolku pocnuva i = 0;
// array sekogas pocnuva od array[0]. Taka da ako sakame prvite 20 treba vo for loop array.lenght < 20.

for (let i = 1; oddNumbers.length < _limit; i++) {
    if(i % 2 != 0)
    {
    // console.log(i);
        oddNumbers.push(i);
    }
}
var first_element = oddNumbers[0];

var last_element = oddNumbers[oddNumbers.length - 1];
console.log("first "+_limit +" odd numbers", oddNumbers);
console.log("dalzina na array e", oddNumbers.length);
console.log("last Element from array is ", last_element);
console.log("first Element from array is ", first_element);
}



function returnArrayOfOddNumbers(_limit) {
    let oddNumbers = [];
for (let i = 1; oddNumbers.length < _limit; i++) {
    if(i % 2 != 0)
    {
        oddNumbers.push(i);
    }
}
return oddNumbers;
}
function returnArrayOfEvenNumbers(_limit) {

    let evenNumbers = [];
    
    for (let i = 1; evenNumbers.length < _limit; i++) {
       if(i % 2 == 0)
       evenNumbers.push(i);
    }
    
    return evenNumbers;
    }
//=======================================================
// the first 20 even numbers
// i da ne pocnuva od nula tuku od eden vo for loopot
function evenNumbers(_limit) {

let evenNumbers = [];

for (let i = 1; evenNumbers.length < _limit; i++) {
   if(i % 2 == 0)
   evenNumbers.push(i);
}

console.log("first "+_limit+" even numbers", evenNumbers);
}

//=============================================================
// The Last Digit of a number
function lastDigit() {

var test = 55114;

var lastDigit = test.toString().slice(-1);

console.log("Last digit of ", test, " is ", Number(lastDigit));
}
//=============================================================
// toString() converts number to string, and charAt() gives you the character at a particular position.
function lastDigitChar() {
var str = 3232.43;
lastnum = str.toString().charAt( str.length - 1 );
console.log( "last digit using char is" , lastnum );
}
//===================================================================
function returnLastDigitOfNumber(_param) {
var test = _param;
var lastDigit = test.toString().slice(-1);
return Number(lastDigit);
// console.log("Last digit of ", test, " is ", Number(lastDigit));
}
function returnLastDigitOfNumberAsString(_param) {
    var lastDigit = _param.toString().slice(-1);
    return lastDigit;
    }
//=========================================================================
//===============================================================================
function printPrime(_limit) {
    var i = 0;
    var j = 0;
    let primerNumbers = [];
    limit = _limit;
    // limit = document.getElementById('limit').value;

    //loop till i equals to $limit

    // for (i = 1; i <= limit; i++) { // od kolku broja sakas da najde prime numbers
    for (i = 1; primerNumbers.length < limit; i++) { // kolku prime numbers sakas da najdes
        c = 0;

        for (j = 1; j <= i; j++) {
            // % modules will give the reminder value, so if the reminder is 0 then it is divisible
            if (i % j == 0) {
                //increment the value of c
                c++;
            }
        }

        //if the value of c is 2 then it is a prime number
        //because a prime number should be exactly divisible by 2 times only (itself and 1)
        if (c == 2) {
            // document.getElementById("result").insertAdjacentHTML('beforeend', i + '<br>');
            primerNumbers.push(i);
        }
    }
    console.log(primerNumbers);
}


function returnArrayOfPrimeNumbers(_limit) {
    var i = 0;
    var j = 0;
    let primerNumbers = [];
    limit = _limit;
    // limit = document.getElementById('limit').value;

    //loop till i equals to $limit
    // for (i = 1; i <= limit; i++) { // od kolku broja sakas da najde prime numbers
    for (i = 1; primerNumbers.length < limit; i++) {
        c = 0;

        for (j = 1; j <= i; j++) {
            // % modules will give the reminder value, so if the reminder is 0 then it is divisible
            if (i % j == 0) {
                //increment the value of c
                c++;
            }
        }

        //if the value of c is 2 then it is a prime number
        //because a prime number should be exactly divisible by 2 times only (itself and 1)
        if (c == 2) {
            // document.getElementById("result").insertAdjacentHTML('beforeend', i + '<br>');
            primerNumbers.push(i);
        }
    }
    // console.log(primerNumbers);
    return primerNumbers;
}


//==========================================================================
// Doubles
//==========================================================================

// two drawbacks:

// since hash keys can only be strings in Javascript, this code doesn't distinguish numbers and "numeric strings". That is, uniq([1,"1"]) will return just [1]
// for the same reason, all objects will be considered equal: uniq([{foo:1},{foo:2}]) will return just [{foo:1}].

// That said, if your arrays contain only primitives and you don't care about types 
// (e.g. it's always numbers), this solution is optimal.
// In JavaScript there are 5 primitive types: undefined , null , boolean , string and number.


    var names = ["Mike","Matt","Nancy","Nancy","Adam","Jenny","Nancy","Carl","Carl","Carl", 1, 1, "1", "2" , 2];
   
    // does not makes differance between "1", and 1 ;
    function uniq(a) {
        var seen = {};
        return a.filter(function(item) {
            return seen.hasOwnProperty(item) ? false : (seen[item] = true);
        });
    }

    function findDoublesA(a) {
        var seen = {};
        return a.filter(function(item) {
            return seen.hasOwnProperty(item) ? true : (seen[item] = false);
        });
    }

    // makes differance between "1", and 1 ;
function uniq2(a) {
    var prims = {"boolean":{}, "number":{}, "string":{}}, objs = [];

    return a.filter(function(item) {
        var type = typeof item;
        if(type in prims)
            return prims[type].hasOwnProperty(item) ? false : (prims[type][item] = true);
        else
            return objs.indexOf(item) >= 0 ? false : objs.push(item);
    });
}
function findDoublesB(a) {
    var prims = {"boolean":{}, "number":{}, "string":{}}, objs = [];

    return a.filter(function(item) {
        var type = typeof item;
        if(type in prims)
            return prims[type].hasOwnProperty(item) ? true : (prims[type][item] = false);
        else
            return objs.indexOf(item) >= 0 ? false : objs.push(item);
    });
}

    

console.log("names", names);
console.log("uniq", uniq(names));
console.log("uniq2", uniq2(names));
console.log("findDoubles A", findDoublesA(names));
console.log("findDoubles B",findDoublesB(names));
console.log("find Doubles In Array A", uniq(findDoublesA(names)));
console.log("find Doubles In Array B", uniq2(findDoublesB(names)));


// let uniqA = uniq(names);
// console.log(names);
// console.log(uniq(names));
// console.log(uniqA);


//========================================================================================
// ne prepoznava razlika od "1" i 1, string i value

function find_duplicate_in_array(arra1) {
    var object = {};
    var result = [];

    arra1.forEach(function (item) {
      if(!object[item])
          object[item] = 0;
        object[item] += 1;
    })

    for (var prop in object) {
       if(object[prop] >= 2) {
           result.push(prop);
       }
    }

    return result;

}

console.log("find_duplicate_in_array", find_duplicate_in_array([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]));
console.log("find_duplicate_in_array", find_duplicate_in_array(names));

//=========================================================================================

// ne prepoznava razlika od "1" i 1, string i value
var uniq = names
.map((name) => {
  return {count: 1, name: name}
})
.reduce((a, b) => {
  a[b.name] = (a[b.name] || 0) + b.count
  return a
}, {})

var duplicates = Object.keys(uniq).filter((a) => uniq[a] > 1)

console.log("ne pravi razlika", duplicates) 

//=========================================================================================
// var items = [4,5,4,6,3,4,5,2,23,1,4,4,4]
// pravi razlika od "1" i  1, string i value 
var uniqueItems = Array.from(new Set(names))
console.log("pravi razlika", uniqueItems);