// Initialize an empty array to store friends
let frnds = [];

// Define a function to add a new friend to the frndcircle
function frndcircle(newfrnd) {
    // Add the new friend to the frnds array
    frnds.push(newfrnd);
    // Log the current state of the frnds array
    console.log(frnds);
    // Log the number of members in the frndcircle
    console.log("Currently my frndcircle has " + frnds.length + " members\n");
}

// Add friends to the frndcircle
frndcircle("Bharath");
frndcircle("Abhi");
frndcircle("Amogh");
frndcircle("Abdul");

// Remove the last friend from the frndcircle
frnds.pop();
console.log("May be after college ends it might hv " + frnds.length + " members as last frnd might go\n");

// Remove another friend from the frndcircle
frnds.pop();
console.log("May be after that it might hv " + frnds.length + " members as last frnd might go\n");

// Remove another friend from the frndcircle
frnds.pop();
console.log("May be after that it might hv " + frnds.length + " members as last frnd might go\n");

// Remove the last remaining friend from the frndcircle
frnds.pop();
console.log("May be lastly I would hv no one in my current friend circle as past friends would be: " + frnds.length + "\n");
