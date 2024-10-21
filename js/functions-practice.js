
var anum;
var bnum;
var numb;
var nummo;

//STEP 1
var halfNumber = function (anum) {
    numb = anum / 2;
    return console.log (`Half of ${anum} is ${numb}.`);
}
//halfNumber(8);

//STEP 2
var squareNumber = function (anum) {
    numb = anum ** 2;
    return console.log (`The result of squaring the number ${anum} is ${numb}.`);
}
//squareNumber (3);

//STEP 3
var percentOf = function (anum, bnum) {

    return console.log (`${anum} is ${anum / bnum * 100}% of ${bnum}.`);

}
//percentOf(8,4);

//STEP 4
var findModulus = function (anum, bnum) {
    nummo = bnum % anum;
    return console.log (`${nummo} is the modulus of ${anum} and ${bnum}.`);

}
//findModulus(3,10);

//STEP 5


function sumList() {
    numcoll = prompt("Enter numbers delimited by commas:");
    if (numcoll ) {
        var numList = numcoll.split(",");
        var sumNum = 0;
        for (let i = 0; i < numList.length; i++ ) {
            const numtri = parseFloat(numList[i]);
            if (!isNaN(numtri)) {
                sumNum += numtri;
            }
            else {
                window.alert("Invalid input, please input again.")
                break;
            }
        }
        window.alert (`Sum is: ${sumNum}`);
    }
    else {
        window.alert ("No number input, please input again.");
    }
}

function main() {
    "use strict";

    var playagain = "y";
    while (playagain === "y") {
        sumList();
        playagain = window.prompt("Do you want to play again (y/n)?");
    }
    window.alert("Thanks for playing!");

}
main ();


