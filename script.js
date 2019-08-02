//**** Game functionality ****//

//Colors in game
var colors = generateRandomColors(6)

// Creating Picked Color for winning color  
var pickedcolor = pickColor();
//Defining Reset Button 
var resetbutton = document.getElementById("resetbutton")



// Selecting Easy and Hard Buttons 
var btnEasy = document.getElementById("btn-easy")
var btnHard = document.getElementById("btn-hard")

var gamemodehard = true

//Click Listeners
btnEasy.addEventListener("click", function(){
    //alert("EasyBTN clicked")
    btnHard.classList.remove("selected")
    btnEasy.classList.add("selected")
    
    reset(3);
    for(i= 3; i < squares.length; i++) { 
        squares[i].style.display = ("none")
    }
    gamemodehard = false 
});

btnHard.addEventListener("click", function(){
    //alert("HardBTN has been clicked s")
    btnEasy.classList.remove("selected")
    btnHard.classList.add("selected")
    for(i= 3; i < squares.length; i++) { 
        squares[i].style.display = ("block")
    }
    reset(6);
    gamemodehard = true;
});

//reset button 
resetbutton.addEventListener("click", function(){
    if (gamemodehard == true) { 
        reset(6);
    }
    else { 
        reset(3);
    }
});

// **** Styling of Game **** // 

// Assinging Color to Squares 
var squares = document.querySelectorAll(".square");
for( i = 0; i < squares.length; i++) { 
    //Addinging Colors to Square
    squares[i].style.backgroundColor = colors[i];
  
    //Adding Click Listener to sqaures
    squares[i].addEventListener("click", function(){ 
         //Grabbing Clicked Color 
    var clickedcolor = this.style.backgroundColor; 
        
        //Checking for win or not 
        if(clickedcolor == pickedcolor){ //Win
            
            message.textContent = ("Correct")
            changeColors(clickedcolor);
            document.getElementById("title").style.backgroundColor = pickedcolor
            resetbutton.textContent = ("Play Again ? ")
        }
        else { //Lost
            this.style.backgroundColor = "#222831";
            message.textContent = ("Try Again")
            //alert("Try Again") 
        }
    });

}



// Updating Display to picked color
var colordisplay = document.getElementById("colordisplay")
colordisplay.textContent = pickedcolor

// Try Again or Winner Message 
var message = document.getElementById("message")

// Adding Color style to sqaures
function changeColors(color) { 
    for(i = 0; i < squares.length; i++) { 
        squares[i].style.backgroundColor = color;
    }
};


 // *** Functions **** // 

// Picking a randolm color in the array for winning color
function pickColor() { 
var random = Math.floor(Math.random() * colors.length)
return colors[random]
}

// This functions builds the array by calling the random color function 
function generateRandomColors(num) { 
    var arr = []
    for (i = 0; i < num; i++) { 
       arr.push(randomColor()) 
    }
    return arr 
}

//This functions generates a random RGB color 
function randomColor() { 
 var r =  Math.floor(Math.random() * 256)
 var g =  Math.floor(Math.random() * 256)
 var b =  Math.floor(Math.random() * 256)
return ("rgb(" + r + ", " + g + ", " + b + ")")
}

//Reset the game 
function reset(num) { 
    colors = generateRandomColors(num);
    pickedcolor = pickColor();
    for( i = 0; i < squares.length; i++) { 
        //Addinging Colors to Square
        squares[i].style.backgroundColor = colors[i];
    } 
colordisplay.textContent = pickedcolor
resetbutton.textContent = ("New Colors");
document.getElementById("title").style.backgroundColor = ("#204969")
message.textContent = ("")
};


//Bug List 
// colordisplay = not updating 