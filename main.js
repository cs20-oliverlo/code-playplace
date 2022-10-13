// Magic 8-Ball Start

// Variables

let ballSpecificAnswer = document.getElementById("8ball-answer");
let ballAnswer = document.getElementById("8ball-answer");

// Event Listeners

document.getElementById("ball-click").addEventListener("click", answer);

// Preset Answer Array

const possible8BallAnswer = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good", "Yes.", "Signs point to yes." ,"Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."];


// Function
function answer() {
    let ballQuestion = document.getElementById("8ball-question").value.toLowerCase();

    if (ballQuestion === "do you say ay-arnav or arnav?") {
        ballAnswer.innerHTML = "Ay-arnav";
    } else if (ballQuestion === "what is gagaball?") {
        ballAnswer.innerHTML = "What.";
    } else if (ballQuestion === "how many if/else if statements did you do?") {
        ballAnswer.innerHTML = "3, the else statement not included.";
    } else {
    let random = Math.trunc(Math.random() * possible8BallAnswer.length);
    ballAnswer.innerHTML = possible8BallAnswer[random];
    }
}

// Magic 8-Ball End

// Graphics and Animation Demo Start

// Variables

// Set up canvas and 2D graphics context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

// Solid Rectangle
    ctx.fillStyle = "blue";
    ctx.fillRect(50, 50, 100, 60);

// Outlined Rectangle
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 4;
    ctx.strokeRect(50, 130, 100, 60);

// Solid Text
    ctx.font = "30px Arial";
    ctx.fillStyle = "green";
    ctx.fillText("Canvas Text", 300, 100);

// Outline Text
    ctx.font = "36px Times";
    ctx.lineWidth = 1;
    ctx.strokeStyle = "red";
    ctx.strokeText("Canvas Text 2", 300, 130);

// Line
    ctx.lineWidth = 5;
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.moveTo(75, 50); // Start at (x1, y1)