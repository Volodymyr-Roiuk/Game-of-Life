const fieldSize = 5;
const rowsNumber = 100;
const columnsNumber = 100;
const backgroundColor = 'lightGray';
const fieldColor = 'red';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const lifeGame = new LifeGame(rowsNumber, columnsNumber);

console.log(lifeGame);

start = () => {
  canvas.width = fieldSize * columnsNumber;
  canvas.height = fieldSize * rowsNumber;



  lifeGame.doLife(rowsNumber * columnsNumber / 3);
  lifeGame.drawFields(drawFeild);
  setInterval(timeout, 100);
};

clearCanvas = () => {
  context.fillStyle = backgroundColor;
  context.beginPath();
  context.rect(0, 0, canvas.width, canvas.height);
  context.fill();
}

function drawFeild(x, y) { 
  context.fillStyle = fieldColor;
  context.beginPath();
  context.rect(x * fieldSize, y * fieldSize, fieldSize, fieldSize);
  context.fill();
};

function timeout() {
  clearCanvas();
  lifeGame.changeMap();
  lifeGame.drawFields(drawFeild);
};


start();


