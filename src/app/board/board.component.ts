import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent {
  @Input() board!: string[][];
  @Input() winningCoordinates!: string[];
  @Output() cellClickedEvent = new EventEmitter<string>();

  onCellClicked(rowIndex: number, cellIndex: number): void {
    const coordinate = rowIndex.toString() + cellIndex.toString();
    this.cellClickedEvent.emit(coordinate);
  }
}
