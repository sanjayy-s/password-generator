
// Function to generate the password based on the selected length and difficulty
function generatePassword() {
    // Get the values from the HTML inputs
    const length = document.getElementById('length').value; // Password length
    const difficulty = document.getElementById('difficulty').value; // Difficulty level

    // Define the character sets for each difficulty level
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/";

    // Initialize the character set based on the selected difficulty
    let characters = lowercase; // Default is lowercase

    // Add additional character sets based on difficulty level
    if (difficulty >= 2) characters += numbers; // Add numbers for Medium and above
    if (difficulty >= 3) characters += uppercase; // Add uppercase for Hard and above
    if (difficulty == 4) characters += specialChars; // Add special characters for Very Hard

    // Initialize the generated password as an empty string
    let password = '';

    // Loop to generate a random password of the specified length
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex]; // Add a random character to the password
    }

    // Display the generated password in the output area
    document.getElementById('passwordOutput').textContent = password;
}

// Event listener for the button click to generate the password
document.querySelector("button").addEventListener("click", generatePassword);
