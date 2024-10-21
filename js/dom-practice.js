/*eslint-env browser*/

//STEP 1
function getClicked() {
    window.alert ("I have been clicked.");
}


//STEP 2

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("mySecButton").onclick = function () {
        alert ("I have been clicked.");
    }
});



//STEP 3

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("myThirdButton").addEventListener("click", function () {
        alert ("I have been clicked.");
    });
});


//STEP 4

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("myForButton").addEventListener("click", () => {
        alert ("I have been clicked.");
    });
});



//STEP 5

