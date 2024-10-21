/*eslint-env browser*/
function displayComm() {
    "use strict";
    window.console.log ("The Product Inventory Management System ");
    console.log ("view - Show all products.");
    console.log ("update - Update an existing product's inventory (quantity).");
    console.log ("exit - Exit the program.");
    console.log("");

}

function viewSto(stockPro) {
    "use strict";
    stockPro.sort();
    for (var item of stockPro) {
        console.log(`${item[0]} ${item[1]} (${item[2]}) $${item[3].toFixed(2)}`);
        
    }
    console.log("\n");

}

function updateSto(stockPro) {
    "use strict";
    var firstCho = parseInt(prompt("To enter a sku number."));
    var secondCho = parseInt(prompt("To enter a new stock quantity."));
    
    for (let oneItem of stockPro) {
        if (oneItem[0] === firstCho) {
            oneItem[2] = secondCho;
            window.alert (`The product of the sku No. ${firstCho} has been updated in quantity.`)
            return;
        }
    }

    window.alert ("The product of sku No. ${firstCho} hasn't been found.");
    

}


function inventory() {
    "use strict";
    var choice;

    displayComm();

    var stockPro =[
                  [4824, "Shirt", 10, 15.99],
                  [6343, "Jeans", 22, 39.99],
                  [3223, "Socks", 36, 9.99],
                  [2233, "Hat", 12, 14.99],
                  [9382, "Jacket", 5, 49.99],
    ];

    while (true) {
        choice = prompt ("Choose a command.");
        if (choice === "view" ) {
            viewSto(stockPro);
        } else if (choice === "update") {
            updateSto(stockPro);
        } else if(choice === "exit") {
            break;
        } else {
            console.log ("Please input a valid choice.");
        }
    }
 
}    

inventory();
