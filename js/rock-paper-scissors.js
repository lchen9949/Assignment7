
function ropasciGame() {
    var userChoice="";
    var comChoice;

    // generate the choice of both human and computer
    while (true) {
        userChoice = prompt("Please enter a choice of Rock or Scissors or Paper to play.");
        while (userChoice !== "Rock" && userChoice !== "Paper" && userChoice !== "Scissors") {
            window.alert ("You should entry the valid name.");
            userChoice = prompt("Please enter a new choice of Rock or Scissors or Paper to play.");
        }
        var n = Math.floor(Math.random() * 3);
        if (n==0) {
            comChoice = "Rock";
        } else if (n==1) {
            comChoice = "Scissors";
        } else if (n==2) {
            comChoice = "Paper";
        }
        if (userChoice != comChoice) {
            break;
        }
        window.alert("It turns out as a tie... try again");
    }

    window.alert("Yours is: " + userChoice + "; The computer is: " + comChoice);

    if (userChoice == "Rock") {

            if (comChoice == "Scissors") {
                window.alert ("User win!");
            }else if (comChoice == "Paper") {
                window.alert ("Computer win!");
            }else {
                window.alert ("User and the Computer are in a tie.");
            }
    }

    if (userChoice == "Scissors") {
        
            if (comChoice == "Paper") {
                window.alert ("User win!");
            }else if (comChoice == "Rock") {
                window.alert ("Computer win!");
            }else {
                window.alert ("User and the Computer are in a tie.");
            }
    }
    if (userChoice == "Paper") {
        
            if (comChoice == "Rock") {
                window.alert ("User win!");
            }else if (comChoice == "Scissors") {
                window.alert ("Computer win!");
            }else {
                window.alert ("User and the Computer are in a tie.");
                
            }
    }
}

function main() {
    "use strict";
    
    var playagain = "y";
    while (playagain === "y") {
        ropasciGame();
        playagain = window.prompt("Do you want to play again (y/n)?");
    }
    window.alert("Thanks for playing!");

}

main();
