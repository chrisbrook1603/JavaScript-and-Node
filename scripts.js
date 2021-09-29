// Create a function that takes in 2 parameters num1 and num2 and subtracts the two numbers.

function subtraction(arr) 
 {
  if (Object.prototype.toString.call(arr) === '[object Array]') {
    var total = arr[0];
    if (typeof (total) !== 'number') {
      return false;
    }
    for (var i = 1, length = arr.length; i < length; i++)
    {
      if (typeof (arr[i]) === 'number')
      {
        total -= arr[i];
      } 
      else 
      return false;
    }
    return total;
   } 
    else
     return false;
  }

console.log(subtraction([7,3, 2,-1]));

// Create a function expression called welcome that take in name and age as a parameters. The outcome should be like so:

function welcome(name, age) {
    let fullString = 'My name is ' + name + ', I am ' + age + 'years old'

    return fullString

}

console.log(welcome('Chris', 30))


// Create an arrow function called powerUp that takes in two values n1 and n2. The arrow function will return the power of the two numbers.
//e.g:
powerUp = (n1, n2) => Math.pow(n1, n2);
num1 = 2;
num2 = 8;
console.log(powerUp(num1, num2));

