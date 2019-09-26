let cellsize = 25
let ncells = 20
let side=cellsize*ncells
let grid
let snake
let apple
let r1
let r2
let lastmove
let score

function setup() {
	lastmove = 3
	createCanvas(side+1, side+1)
	grid = new GameBoard(ncells,ncells)
	createSnake()
	createApple();
	let r = random(0,255)
 	setInterval(function(){    automove()	},150);
}

function automove(){
	if (lastmove==1) {
  	moveSnake(0,-1)
  	
  } 
  if (lastmove==2) {
  	moveSnake(0,1)
	
  }
  if (lastmove==3) {
  	moveSnake(-1,0)
	
  }
  if (lastmove==4) {
  	moveSnake(1,0)
  	
  }
}

function draw() {
	checkCollisions()
	drawBgMatrix();
	drawSnake();
	checkApple()
	drawScoreBoard()
}

function drawScoreBoard(){
	push()
	textFont('Helvetica')
	fill(255)
	textSize(20)
	text('Score: ' + (snake.body.length-5) + '',10,30)
	pop()
}

function createApple(){
	r1 = int(random(0,20))
	r2 = int(random(0,20))
	apple = new Pos(r1,r2)
	drawApple()
}

function checkApple(){
	if(snake.body[0].getX() == apple.getX() && snake.body[0].getY() == apple.getY()){
		snake.addBody()
		createApple()
	}
	drawApple()
}

function drawApple(){
	strokeWeight(1);
	stroke(20)
	fill(255,0,0)
	rect(apple.getX()*cellsize, apple.getY()*cellsize, cellsize, cellsize)
}


function keyPressed() {
  if (keyCode === UP_ARROW && lastmove != 1) {
  	lastmove=1
  	automove()
  } 
  if (keyCode === DOWN_ARROW && lastmove != 2) {
	lastmove=2
	automove()
  }
  if (keyCode === LEFT_ARROW && lastmove != 3) {
	lastmove=3
	automove()
  }
  if (keyCode === RIGHT_ARROW && lastmove != 4) {
  	lastmove=4
  	automove()
  }
}

function checkCollisions(){
	if(snake.checkCollisions()){
		gameOver()
	}
}

function gameOver(){
	snake = new Snake()
}

function moveSnake(a,b){

	snake.move(a,b)
}

function createSnake(x,y){
	snake = new Snake(x,y)
	drawSnake()
}

function drawBgMatrix(){
	for (var i = 0; i <=grid.getCols(); i++) {
		for (var j = 0; j <=grid.getRows(); j++) {
			drawCell(i,j)
		}
	}
}

function drawCell(i,j){
	let size=cellsize;
	strokeWeight(1);
	stroke(20)
	fill(0)
	rect(i*size, j*size, cellsize, cellsize)
}

function drawSnake(){
	push()
	let size = cellsize
	fill(188, 35, 153)
	for (var aux = 0; aux < snake.getLength(); aux++) {
		let i = snake.body[aux].getX()
		let j = snake.body[aux].getY()
		rect(i*size, j*size, cellsize, cellsize)
	}
	fill(158, 5, 123)
	rect(snake.body[0].getX()*size, snake.body[0].getY()*size, cellsize, cellsize)
	
	pop()
}