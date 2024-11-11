//Define operators

const operators = ['+', '-', '*', '/'];

const calcOperations = {
    '+' : add,
    '-' : subtract,
    '*' : multiply,
    '/' : divide
}; 

const args = process.argv.slice(2);



//write functions which used in calculator

//addition Function
function add(x, y) {
    return x + y;
}

//subtraction Function
function subtract(x, y) {
    return x - y;
}

//Multiplication Function
function multiply(x, y) {
    return x * y;
}

//Division Function
function divide(x, y) {
    if(y === 0) {
        return "Cannot be Divide by Zero"
    }
        return x / y;
    }

    

//Error-Handling


if (args.length !== 3) {
    console.error('Error: provide 3 arguments.Example: 5 + 3');
    process.exit(1);
}

const num1 = parseFloat(args[0]);
const operator = args[1];
const num2 = parseFloat(args[2]);

if (!operators.includes(operator)) {
    console.error("Error: Not a valid operator.Use '+ , - , * , /'");
    process.exit(1);
}

if (isNaN(num1) || isNaN(num2)) {
    console.error('Error: num1 & num2 has to be a valid number');
    process.exit(1);
}

//Result

const result = calcOperations[operator](num1,num2);

console.log(`Result: ${num1} ${operator} ${num2} = ${result}`);
