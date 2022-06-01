import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {
  @Output() clickResetEvent = new EventEmitter<string>();

  onResetSelect(): void {
    this.clickResetEvent.emit();
  }
}
