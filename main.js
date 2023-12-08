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



startBtn.addEventListener("click", () => {
    startBtn.remove();
    startPlay()
});

function startPlay (){
    input.focus()
    // Settings 
    generateWords()
    let levels = ["Easy", "Medium", "Hard"]
    randomIndex = Math.floor(Math.random() * levels.length);
    message.innerHTML = levels[randomIndex]
    if(levels[randomIndex] === "Easy"){
        myValueEasySenario();
    } else if (levels[randomIndex] === "Medium") {
        myValueMediumSenario();
    }
    else{
        myValueHardSenario()
    }
    words.forEach((e, index)=> {
        let myDiv = document.createElement("div");
        myDiv.innerHTML = words[index];
        wordsContainer.appendChild(myDiv);
    })
};
function myValueEasySenario(){
    document.addEventListener("keyup", (e) =>{
        if (e.key === "Enter" ){
            if(input.value.toLowerCase() === myWord.innerHTML.toLowerCase()){
                scoreAttempts++
                result.innerHTML = scoreAttempts
                myWord.innerHTML = ''
                input.value = ''
                if(words.length > 0){
                    generateWords()
                }
            }else{
                bad()
            }
        }
    });
};
function myValueMediumSenario(){
    document.addEventListener("keyup", (e) =>{
        if (e.key === "Enter" ){
            if(input.value.toLowerCase() === myWord.innerHTML.toLowerCase()){
                scoreAttempts++
                result.innerHTML = scoreAttempts
                myWord.innerHTML = ''
                input.value = ''
                if(words.length > 0){
                    generateWords()
                }
            }else{
                bad()
            }
        }
    });
};
function myValueHardSenario(){
    document.addEventListener("keyup", (e) =>{
        if (e.key === "Enter" ){
            if(input.value === myWord.innerHTML){
                scoreAttempts++
                result.innerHTML = scoreAttempts
                myWord.innerHTML = ''
                input.value = ''
                if(words.length > 0){
                    generateWords()
                }
            }else{
                bad()
            }
        }
    });
};
function good(){
    input.disabled = true
    myWord.remove();
    let mySpan = document.createElement("span");
    mySpan.classList.add("good")
    mySpan.textContent = `Congrats u did great`
    gameOver.appendChild(mySpan);
}
function bad(){
    input.disabled = true
    myWord.remove();
    let mySpan = document.createElement("span");
    mySpan.classList.add("bad");
    mySpan.textContent = `Game Over`
    gameOver.appendChild(mySpan);
};