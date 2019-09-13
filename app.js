
var playerTurn = 0;

var playerPlacement = ['x','o']    

var topLeft;
var topMiddle;
var topRight;
var middleLeft;
var middleMiddle;
var middleRight;
var bottomLeft;
var bottomMiddle;
var bottomRight;    

function userPlays( place ) {

    var whoPlays = playerTurn % 2;
    var topLeft = document.getElementById("0");
    var topMiddle = document.getElementById("1");
    var topRight = document.getElementById("2");
    var middleLeft = document.getElementById("3");
    var middleMiddle = document.getElementById("4");
    var middleRight = document.getElementById("5");
    var bottomLeft = document.getElementById("6");
    var bottomMiddle = document.getElementById("7");
    var bottomRight = document.getElementById("8");
    
    if (place == 1) {
        if (topLeft.innerHTML == "") {
            topLeft.innerHTML = playerPlacement[whoPlays];
            winCheck();
            playerTurn++;
        } else {
           alert('You cannot place here');
        }

    } else if (place == 2) {
        if (topMiddle.innerHTML == "") {
            topMiddle.innerHTML = playerPlacement[whoPlays];
            winCheck();
            playerTurn++;
       } else {
           alert('You cannot place here');
       }

    } else if (place == 3) {
        if (topRight.innerHTML == "") {
            topRight.innerHTML = playerPlacement[whoPlays];
            winCheck();
            playerTurn++;
        } else {
        alert('You cannot place here');
    }

    }  else if (place == 4) {
        if (middleLeft.innerHTML == "") {
            middleLeft.innerHTML = playerPlacement[whoPlays];
            winCheck();
            playerTurn++;
        } else {
            alert('You cannot place here');
        }

    } else if (place == 5) {
        if (middleMiddle.innerHTML == "") {
            middleMiddle.innerHTML = playerPlacement[whoPlays];
            winCheck();
            playerTurn++;
        } else {
           alert('You cannot place here');
        }

    } else if (place == 6) {
        if (middleRight.innerHTML == "") {
            middleRight.innerHTML = playerPlacement[whoPlays];
            winCheck();
            playerTurn++;
        } else {
           alert('You cannot place here');
        }

    } else if (place == 7) {
        if (bottomLeft.innerHTML == "") {
            bottomLeft.innerHTML = playerPlacement[whoPlays];
            winCheck();
            playerTurn++;
        } else {
           alert('You cannot place here');
        }

    } else if (place == 8) {
        if (bottomMiddle.innerHTML == "") {
            bottomMiddle.innerHTML = playerPlacement[whoPlays];
            winCheck();
            playerTurn++;
            
        } else {
           alert('You cannot place here');
        }

    } else if (place == 9) {
        if (bottomRight.innerHTML == "") {
            bottomRight.innerHTML = playerPlacement[whoPlays];
            winCheck();
            playerTurn++;
            
        } else {
           alert('You cannot place here');
        }

      }
    }


function winCheck() {
    var topLeft = document.getElementById("0");
    var topMiddle = document.getElementById("1");
    var topRight = document.getElementById("2");
    var middleLeft = document.getElementById("3");
    var middleMiddle = document.getElementById("4");
    var middleRight = document.getElementById("5");
    var bottomLeft = document.getElementById("6");
    var bottomMiddle = document.getElementById("7");
    var bottomRight = document.getElementById("8");

    if (topLeft.innerHTML == "x" && topMiddle.innerHTML == "x" && topRight.innerHTML == "x") {
        alert ("X wins!!!");
    } else if (topLeft.innerHTML == "x" && middleMiddle.innerHTML == "x" && bottomRight.innerHTML == "x") {
        alert ("X wins!!!");   
    } else if (topLeft.innerHTML == "x" && middleLeft.innerHTML == "x" && bottomLeft.innerHTML == "x") {
        alert ("X wins!!!");
    } else if (topMiddle.innerHTML == "x" && middleMiddle.innerHTML == "x" && bottomMiddle.innerHTML == "x") {
        alert ("X wins!!!");
    } else if (topRight.innerHTML == "x" && middleMiddle.innerHTML == "x" && bottomLeft.innerHTML == "x") {
        alert ("X wins!!!");
    } else if (topRight.innerHTML == "x" && middleRight.innerHTML == "x" && bottomRight.innerHTML == "x") {
        alert ("X wins!!!");
    } else if (middleLeft.innerHTML == "x" && middleMiddle.innerHTML == "x" && middleRight.innerHTML == "x") {
        alert ("X wins!!!");
    } else if (bottomLeft.innerHTML == "x" && bottomMiddle.innerHTML == "x" && bottomRight.innerHTML == "x") {
        alert ("X wins!!!");
    } else if (topLeft.innerHTML == "o" && topMiddle.innerHTML == "o" && topRight.innerHTML == "o") {
        alert ("O wins!!!");
    } else if (topLeft.innerHTML == "o" && middleMiddle.innerHTML == "o" && bottomRight.innerHTML == "o") {
        alert ("O wins!!!");   
    } else if (topLeft.innerHTML == "o" && middleLeft.innerHTML == "o" && bottomLeft.innerHTML == "o") {
        alert ("O wins!!!");
    } else if (topMiddle.innerHTML == "o" && middleMiddle.innerHTML == "o" && bottomMiddle.innerHTML == "o") {
        alert ("O wins!!!");
    } else if (topRight.innerHTML == "o" && middleMiddle.innerHTML == "o" && bottomLeft.innerHTML == "o") {
        alert ("O wins!!!");
    } else if (topRight.innerHTML == "o" && middleRight.innerHTML == "o" && bottomRight.innerHTML == "o") {
        alert ("O wins!!!");
    } else if (middleLeft.innerHTML == "o" && middleMiddle.innerHTML == "o" && middleRight.innerHTML == "o") {
        alert ("O wins!!!");
    } else if (bottomLeft.innerHTML == "o" && bottomMiddle.innerHTML == "o" && bottomRight.innerHTML == "o") {
        alert ("O wins!!!");
    } 
}















//if the var=1 then can click if var=something else cant click