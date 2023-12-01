// Zadatak 8.
//09:00 - dirma otvorena
//17:00 - firma zatvorena

let datum = new Date();
let sati = datum.getHours();

if (sati < 9){
    console.log("Firma trenutno ne radi")
} else if (sati >=17){
    console.log("Firma trenutno ne radi");
} else {
    console.log("Firam radi");
}

// Zadatak 6.


let dan = datum.getDay();
if (dan == 0){
    console.log("Vikend");
} else if (dan == 6) {
    console.log("Vikend");
} else {
    console.log("Radni dan")
}

// Zadatak 7.

if ( sati < 12){
    console.log("dobro jutro");
} else if ( sati < 18) {
    console.log("dobar dan");
} else {
    console.log("dobro veče")
}

// Zadatak 9.
let krajprvoglekara = 16;
let početakdrugoglekara = 17;
if (početakdrugoglekara < krajprvoglekara){
    console.log("DA");
} else {
    console.log("NE");
}



// Zadatak 10.
let x = 7;
let y = 17;
if (x > y) {
  console.log(++x);
  console.log(--y);
} else if (x < y) {
  console.log(--x);
  console.log(++y);
} else {
  console.log("Brojevi su jednaki");
}

// Zadatak 11.
let a =15.6;

if (a % 1 != 0){
    console.log("Nije ceo broj");
} else {
    console.log("Ceo broj");
}
