// const minNum = 1;
// const maxNum = 20;  
// const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;


// let attempts = 0;
// let guess;
// let running = true;

// while (running) {
//     guess = window.prompt(`Guess a number between  ${minNum}  - ${maxNum}`);
//     guess = Number(guess);
//     console.log(typeof guess, guess);

//     if (isNaN(guess)) {
//         window.alert("Please enter a valid number");
//     }
//     else if (guess < minNum || guess > maxNum) {
//         window.alert("please enter a valid number"); 
//     }
//     else{
//         attempts++;
//         if(guess < answer){
//             window.alert("Too low! Try again");

//         }
//         else if (guess > answer){
//             window.alert("Too high! Try again");
//         }
//         else{
//             window.alert(`Correct! the answer was ${answer}. It took you ${attempts} attempts`);
//             running = false;
//         }
//     }
// };

const minNum = 1;
const maxNum = 20;  
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;

const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');

guessButton.addEventListener('click', () => {
    const guess = Number(guessInput.value);

    if (isNaN(guess) || guess < minNum || guess > maxNum) {
        message.textContent = `Please enter a number between ${minNum} and ${maxNum}.`;
        message.style.color = 'red';
    }
     else {
        attempts++;
        if (guess < answer) {
            message.textContent = "Too low! Try again.";
            message.style.color = 'orange';
        }
         else if (guess > answer) {
            message.textContent = "Too high! Try again.";
            message.style.color = 'orange';
        }
         else {
            message.textContent = `Correct! The answer was ${answer}.`;
            message.style.color = 'green';
            guessButton.disabled = true; // Disable button after correct guess
            guessInput.disabled = true;
        }
        attemptsDisplay.textContent = `Attempts: ${attempts}`;
    }

    guessInput.value = ''; // Clear input field after submission
    guessInput.focus();
});







// // var abc = 123;
// // console.log(abc);
