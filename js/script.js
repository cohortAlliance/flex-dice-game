//    For: Dice roll flex example before Cohort. 12/25/2015
//    By: Patrick Bridgemon
function rollDice(){
    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var die3 = document.getElementById("die3");
    var die4 = document.getElementById("die4");
    var die5 = document.getElementById("die5");			
    var status = document.getElementById("status");

    // Comment these for DEBUG testing...
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var d3 = Math.floor(Math.random() * 6) + 1;
    var d4 = Math.floor(Math.random() * 6) + 1;
    var d5 = Math.floor(Math.random() * 6) + 1;		

    // UnComment these for DEBUG -- TESTING ...
    // var d1 = 3;
    // var d2 = 3;
    // var d3 = 3;
    // var d4 = 2;
    // var d5 = 1;
    // ********************
    
    var diceTotal = d1 + d2 + d3 + d4 + d5;
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    die3.innerHTML = d3;
    die4.innerHTML = d4;
    die5.innerHTML = d5;			
    status.innerHTML = "You rolled "+diceTotal+".";

    if (d1 == d2 && d1 == d3 && d1 == d4 && d1 == d5) {
        status.innerHTML = status.innerHTML + " Yahtzee (five of a kind)! ";
    }    
    else if (d1 == d2 && d1 == d3 && d1 == d4) {
        status.innerHTML = status.innerHTML + " (Four of a kind)! ";
    }    
    else if (d2 == d3 && d2 == d4 && d2 == d5) {
        status.innerHTML = status.innerHTML + " (Four of a kind)! ";
    }
    else if (d1 == d2 && d1 == d3 || d2 == d3 && d2 == d4 || d3 == d4 && d3 == d5) {
        status.innerHTML = status.innerHTML + " (Three of a kind)! ";
    }
    else if (d1 == d2 || d2 == d3 || d3 == d4 || d4 == d5) {
        status.innerHTML = status.innerHTML + " (Two of a kind!) ";
    }    
}
