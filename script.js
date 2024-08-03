function getComputerChoice(choices){
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
};
function getHumanChoice(choices){
    let choice = null;
    while (!choices.includes(choice)){
        choice = window.prompt("what's your choice hon").toLowerCase();
        if (!choices.includes(choice)) {
            alert(`"${choice}" is not a valid choice. Please try again.`);
        }
    }
    return choice
}
function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        return { result: "It's a tie, hon!" };
    }
    const winningConditions = {
        // prolly should've passed choices and used the array to map
        // the options to avoid spelling mistakes

        rock:'scissors',
        paper:'rock',
        scissors:'paper'
    }
    if (humanChoice === winningConditions[computerChoice]){
        return { result: "You win, hon!" };
    } else{
        return { result: "You lose, sorry hon." };
    }
}
function playGame(choices){
    let humanScore = 0;
    let computerScore = 0;
    let humanChoice = null;
    let computerChoice = null;
    let result = null;
    for (let i=0;i<5;i++){
        humanChoice = getHumanChoice(choices);
        computerChoice = getComputerChoice(choices);
        result = playRound(humanChoice, computerChoice);
        switch(result){
            case "It's a tie, hon!":
                alert(result);
                break;
            case "You win, hon!":
                humanScore++;
                alert(result);
                break;
            case "You lose, sorry hon.":
                computerScore++;
                alert(result);
                break;
            default:
                break;
        }
    }
    if(humanScore>computerScore){
        alert("you are the winner");
    }else{
        alert("you are the loser");
    }
}

let choices = ["rock", "paper", "scissors"];
playGame(choices);
// console.log(getComputerChoice(choices));
// console.log(getHumanChoice(choices));