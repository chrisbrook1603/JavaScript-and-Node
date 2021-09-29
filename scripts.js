// this is a simple console logging statement
console.log("Hello world!");

// different kinds of console logging

let persondetails = {firstname : "Chris",
    surname : "Brook",
    place : "Huddersfield",
    starsign : "Aquarius" };

console.log(persondetails.firstname);
console.log(persondetails.surname);
console.log(persondetails.place);
console.log(persondetails.starsign);

// html styling for console
console.log(`%c` + "Hi, my name is " + persondetails.firstname + " " + persondetails.surname + ". I am from " + persondetails.place + " and my star sign is " + persondetails.starsign, 'color: orange; background-color: white; font-size: 10px; font-family: fantasy; padding: 20px;');