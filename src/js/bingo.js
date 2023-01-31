var arGame = []; // Create a new array
var strGame = ""; // Create a string to hold the HTML to insert into the document.

function initGame (){
    // get bingo card header
    getHeaderRow()
 
    // for each row
    for (y = 0; y < 5; y++){
        arGame [y] = [];
        // for each column
        for (x = 0; x < 5; x++){
            // init board to all zero's
            arGame [y][x] = randomNumberRange(0,50);
            strGame = strGame + "<a class ='btn btn-info bingo' id='x"+x+"-y"+y+"' onClick= 'selectButton ("+x+", "+y+")' >" +arGame[y][x]+ "</a>";
            }
        strGame = strGame + "<br>";
    }
    document.getElementById("bingogame").innerHTML = strGame;
    strGame = "";
}

function getHeaderRow () {
    strGame = strGame + (
        "<a class ='btn btn-secondary bingo'>B</a>" +
        "<a class ='btn btn-secondary bingo'>I</a>" +
        "<a class ='btn btn-secondary bingo'>N</a>" +
        "<a class ='btn btn-secondary bingo'>G</a>" +
        "<a class ='btn btn-secondary bingo'>O</a><br>"
    );
}

function selectButton (xVal, yVal){
    var strElementId = 'x' + xVal + "-y" + yVal
    
    // update btn color and update to selected 
    document.getElementById(strElementId).classList.replace('btn-info', 'btn-danger');
    arGame[xVal][yVal] = 1;

    // check if game won
    checkForWinRow();
    checkForWinCol();
    checkForWinDiag();
}

function checkForWinRow(){
    // for each row
    for (yCheck = 0; yCheck < 5; yCheck++) {
        yCheckTotal = 0;

        // for each col
        for (xCheck = 0; xCheck < 5; xCheck++){
            // count how many rows selected
            yCheckTotal = yCheckTotal + arGame[yCheck][xCheck];
        }

        // if total row count is 5, game won
        if (yCheckTotal == 5) {
            alert("You Win!");
            initGame();
        }
    }
}

function checkForWinCol(){
    // for each col
    for (xCheck = 0; xCheck < 5; xCheck++) {
        xCheckTotal = 0;

        // for each row
        for (yCheck = 0; yCheck < 5; yCheck++){
            xCheckTotal = xCheckTotal + arGame[yCheck][xCheck];
        }

        // if total col count is 5, game won
        if (xCheckTotal == 5) {
            alert("You Win!");
            initGame();
        }
    }
}

function checkForWinDiag(){
    // get diagonal count
    diagACheckTotal = arGame[0][0] + arGame[1][1] + arGame[2][2] + arGame[3][3] + arGame[4][4];
    diagBCheckTotal = arGame[4][0] + arGame[3][1] + arGame[2][2] + arGame[1][3] + arGame[0][4];

    // if either diagonal total is 5, game won
    if ((diagACheckTotal == 5) || (diagBCheckTotal == 5)) {
        alert("You Win!");
        initGame();
    }
    
}

function randomNumberRange(min, max) {
    return Math.floor(Math.random()*(max-min)) + min;
}