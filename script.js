let clickCount = 0;

function moveButton() {
    const noButton = document.getElementById('noButton');
    const messageElement = document.getElementById('message'); // Get the message element
    noButton.style.position = 'absolute'; // Ensure the button can move freely

    // Increment the click counter
    clickCount++;

    // Determine position and message based on the click count
    let message = "";
    switch (clickCount) {
        case 1:
            noButton.style.left = '-300px'; // Position for the 1st click
            noButton.style.top = '20px';
            message = "Are you sure?";
            break;
        case 2:
            noButton.style.left = '500px'; // Position for the 2nd click
            noButton.style.top = '300px';
            message = "Really sure?";
            break;
        case 3:
            noButton.style.left = '300px'; // Position for the 3rd click
            noButton.style.top = '600px';
            message = "Absolutely sure?";
            break;
        case 4:
            noButton.style.left = '400px'; // Position for the 4th click
            noButton.style.top = '-100px';
            message = "Positively sure?";
            break;
        case 5:
            noButton.style.left = '20px'; // Position for the 5th click
            noButton.style.top = '650px';
            message = "You really don't want to be my Valentine?";
            break;
        case 6:
            noButton.remove(); // Completely remove the button element
            message = "Nah, you don't get the choice anymore.";
            clickCount = 0; // Reset click count if needed for other interactions
            yesButton.style.fontSize = '50px'; // Increase font size
            yesButton.style.padding = '15px 30px'; // Increase padding
            break;
    }

    messageElement.textContent = message; // Update the message element's text content
}

function showResponse(isYes) {
    const messageElement = document.getElementById('message'); // Get the message element

    if (isYes) {
        messageElement.textContent = "Thats batty bro."; // Set the message
        yesGif.style.display = 'block'; // Show the GIF
        noButton.style.display = 'none'; // Hide the No button
    } else {
        // Optionally, hide the GIF if "No" is clicked or handle other cases
        yesGif.style.display = 'none';
    }
}