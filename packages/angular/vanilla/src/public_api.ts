/**
 * TouchSpin Angular - Vanilla CSS Renderer
 */

import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { TouchSpinComponent } from '@touchspin/angular';
import { VanillaRenderer } from '@touchspin/renderer-vanilla';

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
      useExisting: forwardRef(() => TouchSpinVanillaComponent),
      multi: true,
    },
  ],
})
export class TouchSpinVanillaComponent extends TouchSpinComponent {
  override renderer = VanillaRenderer;
}

// Export types
export type {
  TouchSpinChangeMeta,
  TouchSpinHandle,
  TouchSpinInputs,
  TouchSpinOutputs,
} from '@touchspin/angular';
