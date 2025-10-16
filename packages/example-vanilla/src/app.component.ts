import { Component, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { TouchSpinVanillaComponent } from '@touchspin/angular/vanilla';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TouchSpinVanillaComponent, ReactiveFormsModule, FormsModule],
  template: `
    <div class="container">
      <header>
        <h1>TouchSpin Angular - Vanilla Renderer</h1>
        <p>Interactive examples demonstrating all features</p>
      </header>

      <!-- Section 1: Basic Usage -->
      <section>
        <h2>1. Basic Usage</h2>
        <p>Simple two-way binding with ngModel</p>
        <div class="demo">
          <touch-spin
            [(ngModel)]="basicValue"
            [min]="0"
            [max]="100"
            [step]="1"
            ariaLabel="Basic quantity input"
          ></touch-spin>
          <p class="output">Current value: <strong>{{ basicValue }}</strong></p>
        </div>
      </section>

      <!-- Section 2: Reactive Forms -->
      <section>
        <h2>2. Reactive Forms</h2>
        <p>FormControl with validators (required, min: 10, max: 50)</p>
        <div class="demo">
          <touch-spin
            [formControl]="reactiveControl"
            [min]="10"
            [max]="50"
            [step]="5"
            ariaLabel="Reactive form input"
          ></touch-spin>
          <p class="output">
            Value: <strong>{{ reactiveControl.value }}</strong>
            @if (reactiveControl.invalid) {
              <span class="error">
                (Invalid: {{ reactiveControl.errors | json }})
              </span>
            }
          </p>
        </div>
      </section>

      <!-- Section 3: Template-Driven Forms -->
      <section>
        <h2>3. Template-Driven Forms</h2>
        <p>Complete form with validation</p>
        <form #form="ngForm" class="demo">
          <label for="quantity">Quantity:</label>
          <touch-spin
            id="quantity"
            name="quantity"
            [(ngModel)]="formValue"
            [min]="1"
            [max]="100"
            required
            ariaLabel="Quantity"
          ></touch-spin>
          <p class="output">
            Form value: <strong>{{ formValue }}</strong><br>
            Form valid: <strong>{{ form.valid }}</strong>
          </p>
        </form>
      </section>

      <!-- Section 4: Kitchen Sink -->
      <section>
        <h2>4. Kitchen Sink</h2>
        <p>All options: prefix, suffix, decimals, min, max, step</p>
        <div class="demo">
          <touch-spin
            [(ngModel)]="priceValue"
            [min]="0"
            [max]="999.99"
            [step]="0.01"
            [decimals]="2"
            prefix="$"
            suffix=" USD"
            ariaLabel="Price in USD"
          ></touch-spin>
          <p class="output">Price: <strong>{{ priceValue }}</strong></p>
        </div>
      </section>

      <!-- Section 5: Events Demo -->
      <section>
        <h2>5. Events Demo</h2>
        <p>All events logged to console (open DevTools)</p>
        <div class="demo">
          <touch-spin
            [(ngModel)]="eventsValue"
            [min]="0"
            [max]="100"
            (valueChange)="onValueChange($event)"
            (change)="onChange($event)"
            (focused)="onFocused()"
            (blurred)="onBlurred()"
            ariaLabel="Events demo"
          ></touch-spin>
          <p class="output">Value: <strong>{{ eventsValue }}</strong></p>
          <p class="hint">Interact with the spinner and check the console</p>
        </div>
      </section>

      <!-- Section 6: Keyboard Navigation -->
      <section>
        <h2>6. Keyboard Navigation</h2>
        <p>Focus the input and try these keyboard shortcuts:</p>
        <ul class="shortcuts">
          <li><kbd>↑</kbd> Arrow Up - Increment by step</li>
          <li><kbd>↓</kbd> Arrow Down - Decrement by step</li>
          <li><kbd>Page Up</kbd> - Increment by 10× step</li>
          <li><kbd>Page Down</kbd> - Decrement by 10× step</li>
          <li><kbd>Home</kbd> - Jump to minimum value</li>
          <li><kbd>End</kbd> - Jump to maximum value</li>
        </ul>
        <div class="demo">
          <touch-spin
            [(ngModel)]="keyboardValue"
            [min]="0"
            [max]="100"
            [step]="1"
            ariaLabel="Keyboard navigation demo"
          ></touch-spin>
          <p class="output">Value: <strong>{{ keyboardValue }}</strong></p>
        </div>
      </section>

      <!-- Section 7: Imperative API -->
      <section>
        <h2>7. Imperative API</h2>
        <p>Programmatic control via component reference</p>
        <div class="demo">
          <touch-spin
            #spinner
            [(ngModel)]="imperativeValue"
            [min]="0"
            [max]="100"
            [step]="1"
            ariaLabel="Imperative API demo"
          ></touch-spin>
          <p class="output">Value: <strong>{{ imperativeValue }}</strong></p>
          <div class="button-group">
            <button (click)="spinner.increment()">Increment</button>
            <button (click)="spinner.decrement()">Decrement</button>
            <button (click)="spinner.setValue(50)">Set to 50</button>
            <button (click)="spinner.focus()">Focus</button>
            <button (click)="spinner.blur()">Blur</button>
            <button (click)="logValue(spinner)">Log getValue()</button>
          </div>
        </div>
      </section>

      <!-- Section 8: States -->
      <section>
        <h2>8. States</h2>
        <p>Toggle disabled and readonly states</p>
        <div class="demo">
          <touch-spin
            [(ngModel)]="statesValue"
            [min]="0"
            [max]="100"
            [disabled]="isDisabled"
            [readOnly]="isReadOnly"
            ariaLabel="States demo"
          ></touch-spin>
          <p class="output">Value: <strong>{{ statesValue }}</strong></p>
          <div class="button-group">
            <button (click)="isDisabled = !isDisabled">
              {{ isDisabled ? 'Enable' : 'Disable' }}
            </button>
            <button (click)="isReadOnly = !isReadOnly">
              {{ isReadOnly ? 'Make Editable' : 'Make ReadOnly' }}
            </button>
          </div>
          <p class="hint">
            Disabled: <strong>{{ isDisabled }}</strong>,
            ReadOnly: <strong>{{ isReadOnly }}</strong>
          </p>
        </div>
      </section>

      <footer>
        <p>
          <a href="https://github.com/istvan-ujjmeszaros/touchspin-angular" target="_blank">
            GitHub
          </a>
        </p>
      </footer>
    </div>
  `,
})
export class AppComponent {
  // Section 1: Basic
  basicValue = 10;

  // Section 2: Reactive Forms
  reactiveControl = new FormControl(25, [
    Validators.required,
    Validators.min(10),
    Validators.max(50),
  ]);

  // Section 3: Template-Driven Forms
  formValue = 5;

  // Section 4: Kitchen Sink
  priceValue = 19.99;

  // Section 5: Events
  eventsValue = 0;

  // Section 6: Keyboard
  keyboardValue = 50;

  // Section 7: Imperative API
  imperativeValue = 25;

  // Section 8: States
  statesValue = 10;
  isDisabled = false;
  isReadOnly = false;

  // Event handlers
  onValueChange(value: number) {
    console.log('valueChange:', value);
  }

  onChange(event: { value: number; meta: any }) {
    console.log('change:', event);
  }

  onFocused() {
    console.log('focused');
  }

  onBlurred() {
    console.log('blurred');
  }

  logValue(spinner: any) {
    console.log('getValue():', spinner.getValue());
  }
}
