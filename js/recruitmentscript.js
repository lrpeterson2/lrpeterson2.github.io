// Called when the form is submitted
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent actual form submission

    const name = document.getElementById("name").value;
    const message = document.getElementById("message");

    // Example of an if-then-else statement
    if (name.length >= 3) {
        message.innerHTML = `Thank you for your interest! We'll be in touch.`;
        message.style.color = "gold";
    } else {
        message.innerHTML = "Please enter a valid full name (at least 3 characters).";
        message.style.color = "red";
    }
}

// Called when the form is reset
function handleFormReset() {
    const message = document.getElementById("message");
    message.innerHTML = ""; // Clear the message
}

// Hook up events after page loads
window.onload = function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", handleFormSubmit);
    form.addEventListener("reset", handleFormReset);
};

  
