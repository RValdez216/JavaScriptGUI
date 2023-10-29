// Define a simple function to calculate the sum of two numbers
function addNumbers(a, b) {
    return a + b;
}

// Use the function
const result = addNumbers(5, 3);

// Update the "result" element with the computed result
document.getElementById("result").textContent = `The sum of 5 and 3 is: ${result}`;
