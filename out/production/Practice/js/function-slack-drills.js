(()=>{

// # Function Drills
//
// Functions using conditionals but not loops or arrays:
//
// - Make a function named `isOdd(number)`
    const isOdd = (num) => {
        return (num % 2 !== 0);
    };
// - Make a function named `isEven(number)`
    const isEven = (num) => {
        return (num & 2 === 0);
    };
// - Make a function named `identity(input)` that returns the input exactly as
// provided.
    const identity = (input) => {
        return input;
    };
// - Make a function named `isFive(input)`
    const isFive = (num) => {
        return (num === 5);
    };
// - Make a function named `addFive(input)` that adds five to some input.
    const addFive = (num) => {
        return num + 5;
    };
// - Make a function named `isMultipleOfFive(input)`
    const isMultipleOfFive = (input) => {
        return (input % 5 === 0);
    };
// - Make a function named `isThree(input)`
    const isThree = (input) => {
        return (input === 3);
    };
// - Make a function named `isMultipleOfThree(input)`
    const isMultipleOfThree = (input) => {
        return (input % 3 === 0);
    };
    // console.log(isMultipleOfThree(12));
// - Make a function named `isMultipleOfThreeAndFive(input)`
    const isMultipleOfThreeAndFive = (input) => {
        return (input % 5 === 0 && input % 3 === 0);
    };

    //console.log(isMultipleOfThreeAndFive(30));
// - Make a function named `isMultipleOf(target, n)` which checks if target is
// evenly divisible by `n`
    const isMultipleOf = (target, n) => {
        return (target % n === 0);
    };
    // console.log(isMultipleOf(12, 3));
// - Make a function named `isTrue(boolean)`
    const isTrue = (boolean) => {
        return (boolean === true);
    }
    // console.log(isTrue(true));
// - Make a function named `isFalse(boolean)`
    const isFalse = (boolean) => {
        return (boolean === false);
    }
    // console.log(isFalse(false));

// - Make a function named `isTruthy(input)`, remember that values other than true
// will behave like true
    const isTruthy = (input) => {
        return (input !== 0 && input !== -0 && input !== 0n && input !== "" && input !== null
        && input !== undefined && input !== false && input !== NaN);
    };
    // console.log(isTruthy(null));
// - Make a function named `isFalsy(input)`, remember that values other than false
// behave like false
    const isFalsy = (input) => {
        return (input === 0 || input === -0 || input === 0n || input === "" || input === null
        || input === undefined || input === false);
    };
    // console.log(isFalsy(null));
// - Make a function named `isVowel(letter)`
    const isVowel = (input) => {
        let result = input.toLowerCase();
        return (result === "a" || result === "e" || result === "i" || result === "o" || result === "u");
    };
    // console.log(isVowel("a"));
// - Make a function named `isConsonant(letter)`
    const isConsonant = (str) => {
        let letter = str.toLowerCase();
        return !(letter === "a"||letter === "e" ||letter === "i" ||letter === "o"||letter === "u");
    };
    // console.log(isConsonant("B"))
// - Make a function named `isCapital(letter)`
    const isCapital = (letter) => {
        return isNaN(letter) && letter === letter.toUpperCase();
    }
    // console.log(isCapital("A"));
// - Make a function named `isLowerCase(letter)`
    const isLowerCase = (letter) => {
        return isNaN(letter) && letter === letter.toLowerCase();
    }
    // console.log(isLowerCase("c"))
// - Make a function named `hasLowerCase(string)` that returns if a string has any
// lower cased letter
    const hasLowerCase = (str) => {
        return (/[a-z]/.test(str));
    }
        // console.log(hasLowerCase("EZRA"));
// - Make a function named `isSpace(letter)` that returns if a character is a space
// character
    const isSpace = (letter) => {
        return (/[" "]/.test(letter));
    };
    // console.log(isSpace(" "))
// - Make a function named `isZero(number)`
    const isZero = (number) => {
        return (number == 0);
    }
    // console.log(isZero(0));
// - Make a function named `notZero(input)` that returns true if the input is not
// zero
    const notZero = (input) => {
        return (input > 0 || !isNaN(input));
    }
    // console.log(notZero(21));
// - Write a function named `lowerCase(string)`
    const lowerCase = (string) => {
        return string.toLowerCase();
    }
// - Write a function named `double(n)` that returns a number times two
    const double = (n) => {
        return n * 2;
    }
// - Write a function named `triple(n)` that returns a number times 3
    const triple = (n) => {
        return n * 3;
    }
// - Write a function named `quadruple(n)` that returns a number times 4
    const quadruple = (n) => {
        return n * 4;
    }
// - Write a function named `half(n)` that returns 1/2 of the provided input
    const half = (n) => {
        return (n / 2).toFixed(2);
    }
    // console.log(half(7));
// - Write a function named `subtract(a, b)` that returns `a` minus `b`
    const subtract = (a, b) => {
        return a - b;
    }
// - Write a function named `multiply(a, b)` that returns the product of `a` times
//     `b`
    const multiply = (a, b) => {
        return a * b;
    }
// - Write a function named divide(a, b) that returns `a` divided by ~b~
    const divide = (a,b) => {
        return (a / b).toFixed(2)
    }
    // console.log(divide(12,3));
//- Write a function named `remainder(a, b)` that returns the remainder after
// dividing a by b
    const remainder = (a, b) => {
        return (a / b).toFixed(2)
    }
    // console.log(remainder(12, 5.3));
// - Make a function named `modulo(a, b)` that returns the remainder
// after dividing a by b
    const modulo = (a, b) => {
        return (a % b);
    }
    // console.log(modulo(12,10));
// - Write a function named `cube(n)` that returns n * n * n
    const cube = (n) => {
        return n * n * n;
    }
// - Write a function named `squareRoot(n)` that returns the square root of the
// input
    const squareRoot = (n) => {
        return Math.sqrt(n).toFixed(2);
    }
    // console.log(squareRoot(22.5));
// - Write a function named `cubeRoot(n)` that returns the cube root of the input
    const cubeRoot = (n) => {
        return Math.cbrt(n);
    }
// - Write a function named `invertSign(number)` that returns a negative version of
// a postive number, a positve version of negative, and false for all else.
    const invertSign = (number) => {
        if (number > 0){
           return number * -1;
        } else if ( number < 0){
            return Math.abs(number);
        } else {
            return false;
        }
    }
    // console.log(invertSign(-21))
// - Write a function named `degreesToRadians(number)`
    const degreesToRadians = (number) => {
        return (number * (Math.PI/180)).toFixed(2);
    }
    // console.log(degreesToRadians(100));
// - Write a function named `radiansToDegrees(number)`
    const radiansToDegrees = (number) => {
        return (number * (180/Math.PI)).toFixed(2);

    }
    // console.log(radiansToDegrees(1));
// - Make a function named `isBlank(input)` that determines if a given input is
// spaces, newline characters, or tabs.
    const isBlank = (input) => {
        return (input === " " || input === "\n" || input === "\t");
    }
    // console.log(isBlank("\n"));
// - Make a function named `trim(string)` that removes empty spaces before and
// after the input.
    const trim = (string) => {
        return string.trim();
    }
    // console.log(trim("    hi   "))
// - Make a function named `areEqual(input1, input2)` that returns if both inputs
// have the same value
    const areEqual = (input1, input2) => {
        return input1 == input2;
    }
    // console.log(areEqual(2, "2"));
// - Make a function named `areIdentical(input1, input2)` that returns if both
//     inputs are same value and data type.
    const areIdentical = (input1, input2) => {
        return input1 === input2;
    }
    // console.log(areIdentical(2, 2));
// - Make a function named `not(input)` returns the input with a flipped boolean
    const not = (input) => {
        return !input;
    }
// - Make a function named `notNot(input)` that the negation of the negation of the
// input.
    const notNot = (input) => {
        return !!input;
    }
// - Make a function named `and(predicate1, predicate2)` that returns the logical
// operation of AND
    const and = (predicate1, predicate2) => {
        return (predicate1 % 2 === 0 && predicate2 % 2 === 0);
    }
    // console.log(and(4, 3));
// - Make a function named `or(predicate1, predicate2)` that returns the logical
// operation of OR
    const or = (predicate1, predicate2) => {
        return (predicate1 % 2 === 0 || predicate2 % 2 === 1);
    }
    // console.log(or(17 , 3))
// - Write a function called `reverseString(string)` that reverses a string
    function reverseString(string) {
        if (string === "") {
            return "";
        } else {
            return reverseString(string.substr(1)) + string.charAt(0);
        }
    }
    // console.log(reverseString("hello"));
// - Make a function named `absoluteValue(number)` that returns the absolute value
// of a number.
    const absoluteValue = (number) => {
        return Math.abs(number);
    }
    console.log(absoluteValue(-75));
// - Make a function named `rollDice(sides)` that takes in an argument containing
// the number of sides the die should have. Generate a random number between 1 up
// to and including the number of sides.
    const rollDice = (sides) => {
        return Math.floor(Math.random(1 * sides)* 100);
    }



// ## Simple Function Drills
//
// 1. Make a function called returnTwo() that returns the number 2 when called
//
// Test this function with `console.log(returnTwo())`
//
//     1. Make a function called sayHowdy() which console.logs the string "Howdy!"
//
// Test this function by directly calling `sayHowdy()`
//
// Remember this function does not need a defined return value
//
// 1. Make a function called returnName() that returns the string of your name
//
// Test this function with `console.log(returnName())`
//
//     1. Make a function called addThree() which takes in a number input and returns the number plus 3.
//
// Test this function with `console.log(addThree(5))`
//
//     1. Make a function called sayString() which returns the string input passed in.
//
// Test this function with `console.log(sayString('codeup'))`
//
//
//     ## Challenge Function Drills
//
// - Write a function called `identity(input)` that takes in an argument called
// input and returns that input.
//
// - Write a function called `getRandomNumber(min, max)` that returns a random
// number between min and max values sent to that function call.
//
// - Write a function called `first(input)` that returns the first character in the
// provided string.
//
// - Write a function called `last(input)` that returns the last character of a
// string
//
// - Write a function called `rest(input)` that returns everything but the first
// character of a string.
//
// - Write a function called `reverse(input)` that takes a string and returns it
// reversed.
//
// - Write a function called `isNumeric(input)` that takes an input and returns a
// boolean if the input is numeric.
//
// - Write a function called `count(input)` that takes in a string and returns the
// number of characters.
//
// - Write a function called `add(a, b)` that returns the sum of a and b
//
// - Write a function called `subtract(a, b)` that return the difference between
// the two inputs.
//
// - Write `multiply(a, b)` function that returns the product
//
// - Write a `divide(numerator, denominator)` function that returns a divided by b
//
// - Write a `remainder(number, divisor)` function that returns the remainder left
// over when dividing `number` by the `divisor`
//
// - Write the function `square(a)` that takes in a number and returns the number
// multiplied by itself.
//
// - Write a function called `sumOfSquares(a, b)` that uses only your `add()` function
// and your square function and not + or * operators
//
// - Write a function called `doMath(operator, a, b)` that takes 3 parameters. The
// first parameter is the name of the math function you want to apply. a and b
// are the two numbers to run that function on.
//
// ## Even More Function Bonuses
//
// 1. Create a function that will return how many whitespace characters are at the
// beginning and end of a string.
//
// 1. Create a function that takes in two string inputs.
//
// - If the second string input is present in the first, return the first input
// string with the second input string removed from it.
// - If the second string input is present multiple times in the first, the
// second string will only be removed where it first occurs in the first
// string.
// - If the second string input is not present in the first, return the first
// string as entered in the function.
//
// 1. Create a function that takes in a string and returns true if the last letter
// is an "a" (otherwise, return false).
//
// 1. EXTRA CHALLENGE: create a function that will return how many whitespace
// characters are at the beginning of a string (hint: use regex).
//
// 1. Create a function `returnTrueMessage()` that returns the string "Hey, it's true!"
//
// - Create a function `returnFalseMessage()` that returns the string "Hey, it's false!"
// - Create a function `returnMessage()` that takes in a function and returns the call to the function
// - Experiement passing in different functions.
//
// 1. Create a function, `willLoginUser()` that takes in a username string,
//     password string, user age, a boolean indicating if they are an admin.
//
//     The function will return true if the username is not the same as the
// password and the user is at least 18 years old. If the user is an admin,
//     they do not have to be a certain age but the password must still not match
// the username.

})();

