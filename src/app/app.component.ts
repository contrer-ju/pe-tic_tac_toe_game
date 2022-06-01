import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  userChoice = '';
  winner = '';
  counterMovements = 0;
  winningCoordinates = ['', '', ''];

  reset(): void {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
    this.userChoice = '';
    this.winner = '';
    this.counterMovements = 0;
    this.winningCoordinates = ['', '', ''];
  }

  onUserSelected(user: string): void {
    this.userChoice = user;
  }

  onCellClicked(cell: string): void {
    this.board[Number(cell.substring(0, 1))][Number(cell.substring(1))] =
      this.userChoice;

    this.userChoice === 'X'
      ? (this.userChoice = 'O')
      : this.userChoice === 'O'
      ? (this.userChoice = 'X')
      : (this.userChoice = '');

    for (let i = 0; i < 3; i++) {
      if (
        this.board[i][0] === this.board[i][1] &&
        this.board[i][0] === this.board[i][2] &&
        this.board[i][0] !== ''
      ) {
        this.userChoice = '';
        this.winner = this.board[i][0];
        this.winningCoordinates = [i + '0', i + '1', i + '2'];
      }
    }

    for (let i = 0; i < 3; i++) {
      if (
        this.board[0][i] === this.board[1][i] &&
        this.board[0][i] === this.board[2][i] &&
        this.board[0][i] !== ''
      ) {
        this.userChoice = '';
        this.winner = this.board[0][i];
        this.winningCoordinates = ['0' + i, '1' + i, '2' + i];
      }
    }

    if (
      this.board[0][0] === this.board[1][1] &&
      this.board[0][0] === this.board[2][2] &&
      this.board[0][0] !== ''
    ) {
      this.userChoice = '';
      this.winner = this.board[0][0];
      this.winningCoordinates = ['00', '11', '22'];
    }

    if (
      this.board[2][0] === this.board[1][1] &&
      this.board[2][0] === this.board[0][2] &&
      this.board[2][0] !== ''
    ) {
      this.userChoice = '';
      this.winner = this.board[2][0];
      this.winningCoordinates = ['20', '11', '02'];
    }

    if (this.userChoice !== '') this.counterMovements++;
    if (this.counterMovements > 8) this.userChoice = '';
  }
}
