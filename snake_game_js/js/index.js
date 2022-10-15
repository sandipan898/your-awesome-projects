// Game constants and Variables
let inputDir = {x: 0, y: 0};
const foodSound = new Audio('music/food.mp3');
const gameOverSound = new Audio('music/gameover.mp3');
const moveSound = new Audio('music/move.mp3');
const musicSound = new Audio('music/music.mp3');
let score = 0;
let speed = 7;
let lastPaintTime = 0;
let snakeArr = [
    {x: 13, y: 15}
]
let food = {x: 6, y: 7};

// Game Functions
function main(ctime) {
    window.requestAnimationFrame(main);
    // console.log(ctime)
    speed = 7 + score /6;
    console.log(speed)
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}

const isCollide = (snake) => {
    // If you bump into yourself
    for (let i = 1; i < snakeArr.length; i++) {
        if(snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true;
        }
    }
    // Is you bump into the wall
    if(snake[0].x >= 18 || snake[0].x <= 0 || snake[0].y >= 18 || snake[0].y <= 0) {
        return true;
    }
    return false;
}

const gameEngine = () => {
    // Part 1: Updating the Snake array and Food
    // musicSound.play();
    if(isCollide(snakeArr)) {
        gameOverSound.play();
        musicSound.pause();
        inputDir = {x: 0, y: 0};
        alert("Game Over! Press any key to play again!");
        snakeArr = [{x: 13, y: 15}];
        // musicSound.play();
        score = 0;
        scoreBox.innerHTML = "Score: " + score;
    }

    // If you have eaten the food, increment the score and regenerate the food
    if(snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
        foodSound.play();
        score += 1;
        if(score>highScoreVal) {
            highScoreVal = score;
            localStorage.setItem("highScore", JSON.stringify(highScoreVal));
            highScoreBox.innerHTML = "Highest Score: " +  highScoreVal;
        }

        scoreBox.innerHTML = "Score: " + score; 
        snakeArr.unshift({
            x: snakeArr[0].x + inputDir.x,
            y: snakeArr[0].y + inputDir.y,
        });
        let a = 2;
        let b = 16;
        food = {
            x: Math.round(a + (b-a)*Math.random()),
            y: Math.round(a + (b-a)*Math.random()),
        };
    }

    // Moving the snake
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i+1] = {...snakeArr[i]};
    }    
    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;

    // Part 2: Render the snake and food
    // Display the snake
    board.innerHTML = "";
    snakeArr.forEach((e, index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;

        if(index === 0){
            snakeElement.classList.add('head');
        }
        else{
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    });
    // Display the food
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food')
    board.appendChild(foodElement);
} 

// Main Logic starts from here

// Retrieving high score
let highScore = localStorage.getItem('highScore');
if(highScore === null) {
    highScoreVal = 0;
    localStorage.setItem("highScore", JSON.stringify(highScoreVal));
} else {
    highScoreVal = JSON.parse(highScore);
    highScoreBox.innerHTML = "Highest Score: " + highScoreVal;
}

const arrowUpBtn = () => {
    console.log("ArrowUp");
    inputDir.x = 0;
    inputDir.y = -1;
};

const arrowLeftBtn = () => {
    console.log("ArrowLeft");
    inputDir.x = -1;
    inputDir.y = 0;
};

const arrowRightBtn = () => {
    console.log("ArrowRight");
    inputDir.x = 1;
    inputDir.y = 0;
};

const arrowDownBtn = () => {
    console.log("ArrowDown");
    inputDir.x = 0;
    inputDir.y = 1;
};

const startGame = () => {
    startBtn.style.display = "none";
    window.requestAnimationFrame(main);
    window.addEventListener('keydown', e => {
        inputDir = {x: 0, y: 0} // start the game
        moveSound.play();
        switch (e.key) {
            case "ArrowUp": 
                console.log("ArrowUp");
                inputDir.x = 0;
                inputDir.y = -1;
                break;

            case "ArrowDown": 
                console.log("ArrowDown");
                inputDir.x = 0;
                inputDir.y = 1;
                break;
            
            case "ArrowLeft": 
                console.log("ArrowLeft");
                inputDir.x = -1;
                inputDir.y = 0;
                break;

            case "ArrowRight": 
                console.log("ArrowRight");
                inputDir.x = 1;
                inputDir.y = 0;
                break;
        }
    })
};
