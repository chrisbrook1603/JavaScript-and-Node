//Iteration Demo
//FOR Loops
//create a for loop...
//setting a condition
//declaring 'steps'
for(let i = 0; i < 10; i++) {
    console.log(`i = ${i}`)
};

//WHILE Loops
//work with booleans
//run until a condition is no longer true

let condition = true;
let increment = 0;

while(condition) {
    if(increment == 10){
        condition = false;
    }
    console.log(`increment = ${increment}`);
    increment++;
};

//DO-WHILE Loop
//the same as a while loop, but it always runs at least ONCE
let a = false;

do{
    console.log('this loop is running')
} while (a);

//SWITCH CASES
let num = 0;

switch(num) {
    case 0:
        console.log('the number is equal to 0')
        break;
    case 1:
        console.log('the number is equal to 1')
        break;
    case 5:
        console.log('the number is equal to 5')
        break;
    case 10:
        console.log('the number is equal to 10')
        break;
    default:
        console.warn('not sure what you are doing here')
};

//tutorial
//flowchart 1:
for(let A = 100; A <= 200; A++) {
    console.log(`A = ${A}`)
};

//flowchart 2:
for(let A = 100; A <= 200; A++) {
    var B = A % 2;
    switch(B) {
        case 0:
            console.log('-')
            break;
        case 1:
            console.log('*')
    }
};

//numbers loop

for (let num = 1; num <=10; num++) {
    for (let count = 1; count <= 10; count++) {
        console.log(count)
    }
};

//day switch case
let day = 'Monday'

switch(day){
    case 'Monday':
        console.log('Monday')
    case 'Tuesday':
        console.log('Tuesday')
    case 'Wednesday':
        console.log('Wednesday') 
    case 'Thursday':
        console.log('Thursday')
    case 'Friday':
        console.log('Friday')
        break;
    case 'Saturday':   
        console.log('Saturday')
        break;  
    case 'Sunday':   
        console.log('Sunday')
        break;  
    default:
        console.log('That is not a valid day')
}