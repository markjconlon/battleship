document.addEventListener('DOMContentLoaded', () => {
  // ships pieces 5"L",4"M",3"N",3"O",2"P"
  const ships = {
    names: {
      aircraftCarrier: { length: 5, symbol: 'L' },
      battleship: { length: 4, symbol: 'M' },
      submarine: { length: 3, symbol: 'N' },
      cruiser: { length: 3, symbol: 'O' },
      destroyer: { length: 2, symbol: 'P' },
    },
  };

  let playerBoard = {
    a: ['', '', '', '', '', '', '', '', '', ''],
    b: ['', '', '', '', '', '', '', '', '', ''],
    c: ['', '', '', '', '', '', '', '', '', ''],
    d: ['', '', '', '', '', '', '', '', '', ''],
    e: ['', '', '', '', '', '', '', '', '', ''],
    f: ['', '', '', '', '', '', '', '', '', ''],
    g: ['', '', '', '', '', '', '', '', '', ''],
    h: ['', '', '', '', '', '', '', '', '', ''],
    i: ['', '', '', '', '', '', '', '', '', ''],
    j: ['', '', '', '', '', '', '', '', '', ''],
  };
  let playerOpponentsBoard = {
    a: ['', '', '', '', '', '', '', '', '', ''],
    b: ['', '', '', '', '', '', '', '', '', ''],
    c: ['', '', '', '', '', '', '', '', '', ''],
    d: ['', '', '', '', '', '', '', '', '', ''],
    e: ['', '', '', '', '', '', '', '', '', ''],
    f: ['', '', '', '', '', '', '', '', '', ''],
    g: ['', '', '', '', '', '', '', '', '', ''],
    h: ['', '', '', '', '', '', '', '', '', ''],
    i: ['', '', '', '', '', '', '', '', '', ''],
    j: ['', '', '', '', '', '', '', '', '', ''],
  };
  let opponentsBoard = {
    a: ['', '', '', '', '', '', '', '', '', ''],
    b: ['', '', '', '', '', '', '', '', '', ''],
    c: ['', '', '', '', '', '', '', '', '', ''],
    d: ['', '', '', '', '', '', '', '', '', ''],
    e: ['', '', '', '', '', '', '', '', '', ''],
    f: ['', '', '', '', '', '', '', '', '', ''],
    g: ['', '', '', '', '', '', '', '', '', ''],
    h: ['', '', '', '', '', '', '', '', '', ''],
    i: ['', '', '', '', '', '', '', '', '', ''],
    j: ['', '', '', '', '', '', '', '', '', ''],
  };
  let opponentsPlayerBoard = {
    a: ['', '', '', '', '', '', '', '', '', ''],
    b: ['', '', '', '', '', '', '', '', '', ''],
    c: ['', '', '', '', '', '', '', '', '', ''],
    d: ['', '', '', '', '', '', '', '', '', ''],
    e: ['', '', '', '', '', '', '', '', '', ''],
    f: ['', '', '', '', '', '', '', '', '', ''],
    g: ['', '', '', '', '', '', '', '', '', ''],
    h: ['', '', '', '', '', '', '', '', '', ''],
    i: ['', '', '', '', '', '', '', '', '', ''],
    j: ['', '', '', '', '', '', '', '', '', ''],
  };
  function generateOpponentsBoard() {
    for (let i = 0; i < 5; i++) {
      opponentsBoard.a[i] = 'L';
    }
    for (let i = 0; i < 4; i++) {
      opponentsBoard.b[i] = 'M';
    }
    for (let i = 0; i < 3; i++) {
      opponentsBoard.c[i] = 'N';
    }
    for (let i = 0; i < 3; i++) {
      opponentsBoard.d[i] = 'O';
    }
    for (let i = 0; i < 2; i++) {
      opponentsBoard.e[i] = 'P';
    }
  }
  function generatePlayersBoard() {
    let placedShips = [];
    let unplacedShips = Object.keys(ships.names);
    let ship = prompt(`Which ship would you like to place?[1 = ${unplacedShips[0]}] [2 = ${unplacedShips[1]}] [3 = ${unplacedShips[2]}] [4 = ${unplacedShips[3]}] [5 = ${unplacedShips[4]}]`) - 1;
    if (ship != 0 || ship != 1 || ship != 2 || ship != 3 || ship != 4)) {

    }
    let startPositionDirection = prompt('Enter the sqaure you wish to start and the direction as [R] for right and [D] for down. ex/ [1AD]');
    placedShips.push(unplacedShips[ship]);
    unplacedShips[ship] = "already placed";
    console.log(placedShips);
    console.log(unplacedShips);
  }
  generateOpponentsBoard();
  generatePlayersBoard();
  console.log(opponentsBoard);
});
