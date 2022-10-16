
const turnDiv = document.querySelector('.turn');
let gameStarted = true;
let oIsnext = true;

const xSymbol = 'X';
const oSymbol = 'O';


function showAlertx() {
    alert ("Player X won");
  }

function showAlerto() {
    alert ("Player O won");
  }



const checkStatus = () => {
    const topLeft = gridDivs[0].classList[4];
    const topMd = gridDivs[1].classList[4];
    const topRight = gridDivs[2].classList[4];
    const midLeft = gridDivs[3].classList[4];
    const midMd = gridDivs[4].classList[4];
    const midRight = gridDivs[5].classList[4];
    const btmLeft = gridDivs[6].classList[4];
    const btmMd = gridDivs[7].classList[4];
    const btmRight = gridDivs[8].classList[4];

   // check winner
  if (topLeft && topLeft === topMd && topLeft === topRight) {
    handleWin(topLeft);
    gridDivs[0].classList.add('won');
    gridDivs[1].classList.add('won');
    gridDivs[2].classList.add('won');
  } else if (midLeft && midLeft === midMd && midLeft === midRight) {
    handleWin(midLeft);
    gridDivs[3].classList.add('won');
    gridDivs[4].classList.add('won');
    gridDivs[5].classList.add('won');
  } else if (btmLeft && btmLeft === btmMd && btmLeft === btmRight) {
    handleWin(btmLeft);
    gridDivs[6].classList.add('won');
    gridDivs[7].classList.add('won');
    gridDivs[8].classList.add('won');
  } else if (topLeft && topLeft === midLeft && topLeft === btmLeft) {
    handleWin(topLeft);
    gridDivs[0].classList.add('won');
    gridDivs[3].classList.add('won');
    gridDivs[6].classList.add('won');
  } else if (topMd && topMd === midMd && topMd === btmMd) {
    handleWin(topMd);
    gridDivs[1].classList.add('won');
    gridDivs[4].classList.add('won');
    gridDivs[7].classList.add('won');
  } else if (topRight && topRight === midRight && topRight === btmRight) {
    handleWin(topRight);
    gridDivs[2].classList.add('won');
    gridDivs[5].classList.add('won');
    gridDivs[8].classList.add('won');
  } else if (topLeft && topLeft === midMd && topLeft === btmRight) {
    handleWin(topLeft);
    gridDivs[0].classList.add('won');
    gridDivs[4].classList.add('won');
    gridDivs[8].classList.add('won');
  } else if (topRight && topRight === midMd && topRight === btmLeft) {
    handleWin(topRight);
    gridDivs[2].classList.add('won');
    gridDivs[4].classList.add('won');
    gridDivs[6].classList.add('won');
  } else if (topLeft && topMd && topRight && midLeft && midMd && midRight && btmLeft && btmMd && btmRight) {
    gameStarted = false;
    turnDiv.innerHTML = '<span>Game</span> is tied!';
  } else {
    oIsnext = !oIsnext;
    if (oIsnext) {
      turnDiv.innerHTML = `<span>${xSymbol}</span> is next`;
    } else {
      turnDiv.innerHTML = `<span>${oSymbol}</span> is next`;
    }
  }
};

// 
const letterToSymbol = (letter) => letter === 'X' ? xSymbol : oSymbol;

const handleWin = (letter) => {
  gameStarted = false;
  if (letter === 'X') {
    turnDiv.innerHTML = `<span>${letterToSymbol(letter)}</span> has won!`;
    console.log(showAlertx())
  } else {
    turnDiv.innerHTML = `<span>${letterToSymbol(letter)}</span> has won!`;
    console.log(showAlerto())
  }
};



//  reset option 1
const rstDiv = document.querySelector('.reset');

const doReset = () => {
   oIsnext = true;
   turnDiv.innerHTML = `<span>${xSymbol}</span> is next`;
   for (const gridDiv of gridDivs) {
    gridDiv.classList.remove('X')
    gridDiv.classList.remove('O')
    gridDiv.classList.remove('won')
   }
   gameStarted = true;
};

rstDiv.addEventListener('click', doReset);

// clicks on boxes/btns
const gridDivs = document.querySelectorAll('.margin');

const gridClick = (e) => {
    const classList = e.target.classList;

   if (!gameStarted || classList[4] === "X" || classList[4] ==="O" ) {
    return;
   } 

    if(oIsnext) {
      classList.add('X');
        checkStatus();
    } else {
    classList.add('O');
        checkStatus();
    }
};



for (const gridDiv of gridDivs) {
    gridDiv.addEventListener('click', gridClick)
}


