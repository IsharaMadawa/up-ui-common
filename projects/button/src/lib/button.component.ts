import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-button',
  styleUrls: ['./button.component.scss'],
  template: `
    <button [disabled]="disabled" class="upButton">{{text}}</button>
  `
})
export class ButtonComponent {
  @Input() text: string;
  @Input() disabled: boolean;
}
