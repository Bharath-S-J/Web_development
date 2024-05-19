// Declare a global variable named v2 and assign it the value "hello_bro"
let v2 = "hello_bro";

// Define a function named x
function x() {
    // Declare a local variable named v2 and assign it the value "Hi_Bro"
    let v2 = "Hi_Bro";
    // Log the value of the local variable v2
    console.log(v2);
}

// Log the value of the global variable v2
console.log(v2);

// Call the function x
x();

// Shadowing means creating/editing variables with the same name in different scopes
