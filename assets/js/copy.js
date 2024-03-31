function copy() {
    // Get the text to copy
    var textToCopy = "pip install BetterMaths";

    // Create a temporary input element
    var tempInput = document.createElement("input");
    
    // Set the input value to the text you want to copy
    tempInput.setAttribute("value", textToCopy);

    // Append the input element to the DOM
    document.body.appendChild(tempInput);

    // Select the text inside the input element
    tempInput.select();

    // Execute the copy command
    document.execCommand("copy");

    // Remove the temporary input from the DOM
    document.body.removeChild(tempInput);

    // Optionally, provide feedback to the user
    alert("Text copied to clipboard: " + textToCopy);
}