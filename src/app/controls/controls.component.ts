import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css'],
})
export class ControlsComponent {
  @Input() userChoice!: string;
  @Input() winner!: string;
  @Input() counterMovements!: number;
  @Output() selectUserEvent = new EventEmitter<string>();

  onUserSelect(user: string): void {
    if (
      this.userChoice === '' &&
      this.winner === '' &&
      this.counterMovements < 9
    )
      this.selectUserEvent.emit(user);
  }
}
