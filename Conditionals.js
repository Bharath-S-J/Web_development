// Define a function named voting which takes age as input and returns true if the age is 18 or above, otherwise false
function voting(agee) {
    if (agee >= 18) { // If age is greater than or equal to 18
        return true; // Return true (eligible to vote)
    } else {
        return false; // Otherwise, return false (not eligible to vote)
    }
}

// Call the voting function with age 34 and store the result in a variable named eligibility
const eligibility = voting(34);

// Check the eligibility result and log an appropriate message to the console
if (eligibility) {
    console.log("You are eligible to vote. Please do vote!"); // If eligible, log message to vote
} else {
    console.log("You aren't eligible to vote. Please wait until you turn 18 to vote!"); // If not eligible, log message to wait
}
