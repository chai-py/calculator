# calculator

## Brief Description of Calculator

This program is a simple command-line calculator written in JavaScript. It supports four basic arithmetic operations: addition (+), subtraction (-), multiplication (*), and division (/). Users can perform calculations by providing two numbers and an operator as arguments. The calculator handles errors such as invalid operators, non-numeric inputs, and division by zero.

Please note:

- The calculator works perfectly in PowerShell.
- For Git Bash, use '*' for multiplication, but / (division) does not work properly in Git Bash.
- It is recommended to use PowerShell for running the calculator without any errors.

## Instructions on how to run calculator

- Save the code in a file named calculator.js.
- Open a terminal or command line.
- Navigate to the directory where the file is saved.
- Run the calculator using the node command followed by three arguments:
- First argument: The first number.
- Second argument: The operator (+, -, *, /).
- Third argument: The second number.

### Example command:

- node calculator.js 5 + 3

- Result: 5 + 3 = 8


## challenges you faced or insights you gained.

- __Command-Line Arguments__: Using process.argv to handle inputs from the command line was something new to learn. I hadn’t used it before, and it was interesting to see how JavaScript can interact with the system outside a browser.
- __Division by Zero__: Handling division by zero as a special case ensured the calculator didn’t give incorrect results or fail unexpectedly.
- __Code Organization__: Storing operators and their corresponding functions in an object made the code cleaner, easier to manage, and more readable.