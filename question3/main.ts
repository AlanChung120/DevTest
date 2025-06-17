export class Connect4 {
  board: number[][]; // game board
  rows: number; // number of rows
  columns: number; // number of columns
  turn: 1 | 2; // player's turn
  finished: boolean; // game is finished or not

  constructor(rows: number = 6, columns: number = 7) {
    this.turn = 1;
    this.finished = false;
    this.rows = rows;
    this.columns = columns;
    this.board = [];
    for (let row = 0; row < rows; row++) {
      let boardRow: number[] = [];
      for (let column = 0; column < columns; column++) {
        boardRow.push(0);
      }
      this.board.push(boardRow);
    }
  }

  // show the game board on console
  show() {
    let gameBoard = "";
    for (let row = 0; row < this.rows; row++) {
      for (let column = 0; column < this.columns; column++) {
        gameBoard += this.board[row][column];
      }
      gameBoard += "\n";
    }
    console.log(gameBoard);
  }

  // play a turn given the column to play
  play(col: number): string {
    if (this.finished) {
      return "Game has finished!";
    }

    // insert to the column
    let fullColumn = true;
    for (let row = this.rows - 1; row >= 0; row--) {
      if (this.board[row][col] === 0) {
        this.board[row][col] = this.turn;
        fullColumn = false;
        break;
      }
    }

    if (fullColumn) {
      return "Column full!";
    } else {
      // check for winers
      let possibleWinnter = this.winCheck();
      if (possibleWinnter === 1) {
        this.finished = true;
        return "Player 1 wins!";
      } else if (possibleWinnter === 2) {
        this.finished = true;
        return "Player 2 wins!";
      } else {
        if (this.turn === 1) {
          this.turn = 2;
          return "Player 1 has a turn";
        } else {
          this.turn = 1;
          return "Player 2 has a turn";
        }
      }
    }
  }

  // check if a player has won
  winCheck(): number {
    // vertical check
    for (let row = 0; row < this.rows - 3; row++) {
      for (let column = 0; column < this.columns; column++) {
        if (
          this.board[row][column] !== 0 &&
          this.board[row][column] === this.board[row + 1][column] &&
          this.board[row + 1][column] === this.board[row + 2][column] &&
          this.board[row + 2][column] === this.board[row + 3][column]
        ) {
          return this.board[row][column];
        }
      }
    }

    // horizontal Check
    for (let column = 0; column < this.columns - 3; column++) {
      for (let row = 0; row < this.rows; row++) {
        if (
          this.board[row][column] !== 0 &&
          this.board[row][column] === this.board[row][column + 1] &&
          this.board[row][column + 1] === this.board[row][column + 2] &&
          this.board[row][column + 2] === this.board[row][column + 3]
        ) {
          return this.board[row][column];
        }
      }
    }

    // ascending diagonal check
    for (let row = 3; row < this.rows; row++) {
      for (let column = 0; column < this.columns - 3; column++) {
        if (
          this.board[row][column] !== 0 &&
          this.board[row][column] === this.board[row - 1][column + 1] &&
          this.board[row - 1][column + 1] === this.board[row - 2][column + 2] &&
          this.board[row - 2][column + 2] === this.board[row - 3][column + 3]
        ) {
          return this.board[row][column];
        }
      }
    }

    // descending diagonal check
    for (let row = 0; row < this.rows - 3; row++) {
      for (let column = 0; column < this.columns - 3; column++) {
        if (
          this.board[row][column] !== 0 &&
          this.board[row][column] === this.board[row + 1][column + 1] &&
          this.board[row + 1][column + 1] === this.board[row + 2][column + 2] &&
          this.board[row + 2][column + 2] === this.board[row + 3][column + 3]
        )
          return this.board[row][column];
      }
    }
    // no one won
    return 0;
  }
}
