/**
 * TouchSpin Angular - Bootstrap 3 Renderer
 */

import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  TOUCH_SPIN_INPUTS,
  TOUCH_SPIN_OUTPUTS,
  TouchSpinComponent,
} from '@touchspin/angular';
import { Bootstrap3Renderer } from '@touchspin/renderer-bootstrap3';

@Component({
  selector: 'touch-spin',
  standalone: true,
  template: `
    <div [class]="wrapperClass" [attr.data-testid]="testId">
      <input
        #input
        type="number"
        [name]="name"
        [id]="id"
        [class]="inputClass"
        [disabled]="disabled"
        [readonly]="readOnly"
        [attr.data-testid]="inputTestId"
        [attr.role]="'spinbutton'"
        [attr.aria-valuenow]="currentValue"
        [attr.aria-valuemin]="min"
        [attr.aria-valuemax]="max"
        [attr.aria-label]="ariaLabel"
        [attr.aria-labelledby]="ariaLabelledBy"
        (blur)="onInputBlur()"
        (focus)="onInputFocus()"
      />
      @if (name) {
        <input type="hidden" [name]="name + '_display'" [value]="currentValue" />
      }
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TouchSpinBootstrap3Component),
      multi: true,
    },
  ],
  inputs: [...TOUCH_SPIN_INPUTS],
  outputs: [...TOUCH_SPIN_OUTPUTS],
})
export class TouchSpinBootstrap3Component extends TouchSpinComponent {
  override renderer = Bootstrap3Renderer;
}

// Export types
export type {
  TouchSpinChangeMeta,
  TouchSpinHandle,
  TouchSpinInputs,
  TouchSpinOutputs,
} from '@touchspin/angular';
