function getComputerChoice(choices){
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
};
function getHumanChoice(choices){
    let choice = null;
    while (!choices.includes(choice)){
        choice = window.prompt("what's your choice hon")
        if (!choices.includes(choice)) {
            alert(`"${choice}" is not a valid choice. Please try again.`);
        }
    }
    return choice
}

let choices = ["rock", "paper", "scissors"];

console.log(getComputerChoice(choices));
console.log(getHumanChoice(choices));