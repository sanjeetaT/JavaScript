// This variable keeps track of whose turn it is.
let activePlayer = 'X';
// This array stores an array of moves .We must determine with condition.
let selectedSquares = [];

// This function is for placing an x or o in a square
function placeXorO(squareNumber){
    // If contains the square number  click on
    if(!selectedSquares.some(element => element.includes(squareNumber) )){
        // This varible retrives the html element id that was clicked.
        let select = document.getElementById(squareNumber);
        // This condition checks whose turn it is.
        if(activePlayer === 'X'){
            // if active player is equal to X the x png is placed in html
         select.style.backgroundImage = 'url("images/x.png")';
        } else{
          // if active player is equal to o the o png is placed in html.
          select.style.backgroundImage = 'url("images/o.png")';
        }

        //square number and activeplayer are connected together.
        selectSquares.push(squareNumber + activePlayer);
        // This call a function for check any condition
        checkWinCondition();
        // This condition is for changing the active player
        if(activePlayer === 'X'){
            // if active player is x chage it to 'o'.
            activePlayer = 'O';

            // if active player anything other than 'X'.

        } else {
            // change the activePlayer to 'X'
             activePlayer = 'X';
        }
    


        // This is  a function plays placement sound.
audio('./media/place.mp3');
// This condition checks to see if it is computers turn.
if(activePlayer ==='O'){
    // This function disables clicking for computer choice.
    disableClick();
    //This function waits 1 second before computer places image and enables click.
    setTimeout(function () {computersTurn();}, 1000)
}
// Returning true is needed for our computersTurn() function to work.
  return true;
    }

    // This function result in a random square being selected.
    function computersTurn(){
        // This boolen is needed for our  while loop
        let success = false;
        // This variable stores a random number 0-8.
        let pickASquare;
        //  This condition allow our while loop  to keep trying if a squre is selected already.
        while(!success){
            // A random number between 0-8 is selected.
            pickASquare = String(Math.floor(Math.random() * 9));
            // if the random number  evaluted return true , the squre hasn't been selected yet.
            if(placeXorO(pickASquare)){
                //This line calls the function 
                placeXorO(pickASquare);
                // This changes our boolean ends the loop.
                success = true;
            };
        }
    }

}

//  in this parses  the selectSquares array to search for win conditions.

function checkWinCondition(){
    // X, 0,1, 2 condition.
    if  (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100)}
     // X, 3,4, 5 condition.
    else if  (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304)}
      // X, 6,7, 8 condition.
    else if  (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508)}
     // X, 0,3, 6 condition.
    else if  (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558)}
      // X, 1,4, 7 condition.
    else if  (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558)}
     // X, 2,5, 8 condition.
     else if  (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558)}
     // X, 6,4, 2 condition.
    else if  (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90)}
     // X, 0,4, 8 condition.
     else if  (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520)}

      // O, 0,1, 2 condition.
    else if  (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100)}
    // O, 3,4, 5 condition.
    else if  (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304)}
     // O, 6,7, 8 condition.
   else if  (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508)}
    // O, 0,3, 6 condition.
    else if  (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558)}
     // O, 1,4, 7 condition.
   else if  (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558)}
    // O, 2,5, 8 condition.
    else if  (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558)}
    // O, 6,4, 2 condition.
   else if  (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90)}
    // O, 0,4, 8 condition.
    else if  (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520)}

    else if(selectedSquares.length >= 9) {
        audio('./media/tie.mp3');
        // This function sets a .3 second timer before the reset game
        setTimeout(function() {resetGame();}, 1000);
    }

    //  This function checks if an array includes 3 strings.
    function arrayIncludes(squareA, squareB, squareC) {
        // These 3 variable will be used to check for 3 in a row.
        const a = selectedSquares.includes(squareA)
        const b = selectedSquares.includes(squareB)
        const c = selectedSquares.includes(squareC)

        // return and our else if condition  excuse the drawWinLine function

        if(a === true && b  === true && c === true){return true}
    }


    

}

// This function makes our body element temporarily unclickable.
function disableClick(){
    // This makes our body unclickable
    body.style.pointerEvents = 'none';
    // This makes our body clickable again after 1 second
    setTimeout(function() {body.style.pointerEvents = 'auto' ;}, 1000);
}

// This function takes string parameter of the path you set earlier
function audio(audioURL) {
    // we create new audio and pass the path as a parameter
    let audio = new Audio(audioURL);
    // play method plays our audio sound.
    audio.play();
}


// This function utilizes html canves  to draw win lines 
function drawWinLine(coordX1, coordY1, coordX2, coordY2){
    // this lines access our html canvas element.
    const canvas = document.getElementById('win-lines')
    // This lines give us access to method and property to use on canvas.
    const c = canvas.getContext('2d');
    // This lines indicates where the start of the lines X axis is.
    let x1 = coordX1,
     // This lines indicates where the start of the lines Y axis is.
      y1 = coordY1,
       // This lines indicates where the start of the lines X axis is.
      x2 = coordX2
        // This lines indicates where the start of the lines X axis is.
        y2 = coordY2

        // This variable stores temporary x axix data we update our animation loop.
         x = x1,
          // This variable stores temporary x axix data we update our animation loop.
          y = y1;


    // This function interact with the canves
    function animateLineDrawing(){
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        // This method clears content  from last loop iteration.
        c.clearRect(0,0,608,608)
        // This method stars a new path
        c.beginPath();
        // This method moves us to a starting point for our line.
        c.moveTo(x1, y1)
        // This method indicated the end  point in our line 
        c.lineTo(x,y)
        // this method sets the width  of  our lines 
        c.lineWidth = 10;
        // this method set the color of line 
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        // This method draws everything we laid out above.
        c.stroke();
        // This condition checks if we've reached the endpoint.
        if(x1 <= x2 && y1 <= y2) {
            // This condion add to the previous the end x points.
            if(x < x2) { x += 10;}
             // This condion add to the previous the end y points.
             if( y< y2) { y += 10;}
        

        // This condition cancels our animation loop 
        // if we reached the end points
        if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop);}
    }

    // This condition is similor to the one above 
    // This is necessary for the 6,4,2 win condition
    if (x1 <= x2 && y1 >= y2){
        if(x < x2) { x += 10;}
        if(y > y2) { y -= 10;}
        if(x >= x2 && y <= y2){ cancelAnimationFrame(animationLoop); }

    }


// This function clears our canves after our win line is drawn.
function clear(){
    // This lines start our animation loop
    const animationLoop = requestAnimationFrame(clear);
    // This line clear our canvas
    c.clearRect(0,0,608,608);
    //This line stop our animation loop
    cancelAnimationFrame(animationLoop);
}

// This line disallows clicking while the win sound is playing
disableClick();
// This is plays the win sound
audio('./media/winGame.mp3');
// this lines calls our main animation loop
animateLineDrawing();
// This lines wait 1 second . Then clear canvas, reset game, and allow clicking again.
setTimeout(function () { clear(); resetGame(); }, 1000);
}


// This function reset the game in the event of a tie or a win
function resetGame(){
    // This for loops iterates through each html square element
    for (let i = 0; i < 9; i++){
        // This varible gets the html element of i.
        let square = document.getElementById(String(i))
        // This removes our elements 
        square.style.backgroundImage = ''
    }
    // this resets our array so it is empty and we can start over.
    selectedSquares = [];
}
}