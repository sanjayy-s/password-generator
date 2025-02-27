
// Function to generate a random password
function generatePassword() {
    // Get password length and difficulty level from the input fields
    const length = document.getElementById('length').value;
    const difficulty = document.getElementById('difficulty').value;
    
    // Define character sets for different difficulty levels
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
    
    let characterSet = lowercase; // Default to lowercase for easy difficulty

    // Adjust character set based on selected difficulty
    if (difficulty == '2') {
        characterSet += numbers; // Add numbers for medium difficulty
    } else if (difficulty == '3') {
        characterSet += uppercase + numbers; // Add uppercase & numbers for hard difficulty
    } else if (difficulty == '4') {
        characterSet += uppercase + numbers + specialChars; // Add special characters for very hard difficulty
    }

    // Generate the random password using the character set
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }

    // Display the generated password
    document.getElementById('passwordOutput').textContent = password;
}

// Event listener for the Generate Password button
document.querySelector('button').addEventListener('click', generatePassword);
