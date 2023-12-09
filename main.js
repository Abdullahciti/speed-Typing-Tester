// Array Of Words
const words = [
    "Hello",
    "Programming",
    "Code",
    "Javascript",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Destructuring",
    "Paradigm",
    "Styling",
    "Cascade",
    "Documentation",
    "Coding",
    "Funny",
    "Working",
    "Dependencies",
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing"
];

function generateWords(){
    let randomWord = words[Math.floor(Math.random() * words.length)];
    myWord.innerHTML = randomWord;
    let wordIndex = words.indexOf(randomWord);
    words.splice(wordIndex, 1);
}


let message = document.querySelector(".message .lvl"),
seconds = document.querySelector(".seconds"),
myWord = document.querySelector(".the-word"),
input = document.querySelector(".input"),
startBtn = document.querySelector(".start"),
wordsContainer = document.querySelector(".upcoming-words"),
timer = document.querySelector(".time span"),
result = document.querySelector(".score .got"),
maxScore = document.querySelector(".score .total"),
gameOver = document.querySelector(".finish")

// Settings 
maxScore.textContent = words.length;
scoreAttempts = 0;

const timerOptions = [6, 3, 4];
const easyModeTimer = timerOptions[0];
const mediumModeTimer = timerOptions[1];
const hardModeTimer = timerOptions[2];
seconds.innerHTML = mediumModeTimer;

let modes = ["Easy", "medium", "hard"];
message.innerHTML = modes[Math.floor(Math.random() * modes.length)];
timer.innerHTML = seconds.innerHTML;


startBtn.addEventListener("click", () => {
    startBtn.remove();
    startPlay()
});
function startPlay(){
    input.focus()
    startBtn.remove()
    handleTimeOut()
    generateWords()
    for (let i = 0; i < words.length; i++){
        let myDiv = document.createElement("div");
        myDiv.textContent = words[i];
        wordsContainer.appendChild(myDiv);
    }
}
function handleTimeOut(){    
    let myInterval = setInterval(() => {
        timer.innerHTML--;
        if(timer.innerHTML === "0" || parseInt(timer.innerHTML) <= 0){
            timer.innerHTML = 4
            if(input.value.toLowerCase() === myWord.innerHTML.toLowerCase()){
                scoreAttempts++;
                result.innerHTML = scoreAttempts;
                myWord.innerHTML = '';
                input.value = '';
                generateWords()
            }else{
                if (parseInt(result.innerHTML) >= 25){
                    gameOver.innerHTML = `<span class="perfect">Game Over</span>`
                }else if (parseInt(result.innerHTML) >= 12 && parseInt(result.innerHTML) < 25){
                    gameOver.innerHTML = `<span class="good">Game Over</span>`
                }else if(parseInt(result.innerHTML) >= 0){
                    gameOver.innerHTML = `<span class="bad">Game Over</span>`
                }
                clearInterval(myInterval)
                timer.innerHTML = "D:"
                input.disabled = true
            };
        }
    }, 1000);
}
