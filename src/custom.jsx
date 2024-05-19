import React from "react";

// Define a functional component named Custom that accepts props as input
function Custom(props) {
    // Render an <h1> element displaying a personalized greeting using props.name
    return <h1>Hello {props.name}</h1>;
}

// Export the Custom component as the default export of this module
export default Custom;
