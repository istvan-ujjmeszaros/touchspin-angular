# TouchSpin Angular

Angular adapter for TouchSpin numeric input spinner - Native Angular components with full framework integration.

## Features

- Native Angular components with ControlValueAccessor
- Reactive and template-driven forms support
- Per-renderer subpath imports (Bootstrap 3/4/5, Tailwind, Vanilla)
- Standalone components (Angular 14+)
- SSR/Angular Universal compatible
- Full keyboard navigation and ARIA attributes
- Comprehensive test coverage
- Complete TouchSpin API support

## Installation

```bash
npm install @touchspin/angular @touchspin/core @touchspin/renderer-bootstrap5
# or
yarn add @touchspin/angular @touchspin/core @touchspin/renderer-bootstrap5
# or
pnpm add @touchspin/angular @touchspin/core @touchspin/renderer-bootstrap5
```

## Quick Start

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TouchSpinVanillaComponent } from '@touchspin/angular/vanilla';
import '@touchspin/renderer-vanilla/css';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, TouchSpinVanillaComponent],
  template: `
    <touch-spin
      [(ngModel)]="value"
      [min]="0"
      [max]="100"
      [step]="1"
    ></touch-spin>
    <p>Value: {{ value }}</p>
  `
})
export class AppComponent {
  value = 25;
}
```

## Available Renderers

Choose the renderer that matches your design system:

| Renderer | Import | CSS Import | Description |
|----------|--------|------------|-------------|
| **Vanilla** | `@touchspin/angular/vanilla` | `@touchspin/renderer-vanilla/css` | Clean, framework-free styling |
| **Bootstrap 5** | `@touchspin/angular/bootstrap5` | `@touchspin/renderer-bootstrap5/css` | Bootstrap 5 compatible |
| **Bootstrap 4** | `@touchspin/angular/bootstrap4` | `@touchspin/renderer-bootstrap4/css` | Bootstrap 4 compatible |
| **Bootstrap 3** | `@touchspin/angular/bootstrap3` | `@touchspin/renderer-bootstrap3/css` | Bootstrap 3 compatible |
| **Tailwind** | `@touchspin/angular/tailwind` | `@touchspin/renderer-tailwind/css` | Tailwind CSS styling |

## API Reference

### Inputs (Properties)

#### Value Management
```typescript
<TouchSpin
  [(ngModel)]="controlledValue"        // Template-driven forms
  [value]="controlledValue"            // Reactive forms
  [defaultValue]="initialValue"        // Uncontrolled mode
  (valueChange)="onValueChange($event)" // Value change event
/>
```

#### Configuration
```typescript
<TouchSpin
  [min]="number"                       // Minimum value
  [max]="number"                       // Maximum value
  [step]="number"                      // Increment/decrement step
  [decimals]="number"                  // Decimal places
  [prefix]="'string'"                  // Text before input
  [suffix]="'string'"                  // Text after input
/>
```

#### State & Behavior
```typescript
<TouchSpin
  [disabled]="boolean"                 // Disable input and buttons
  [readOnly]="boolean"                 // Make input read-only
/>
```

#### Form Integration
```typescript
<TouchSpin
  [name]="'fieldName'"                 // Form field name
  [id]="'fieldId'"                     // Input element ID
/>
```

#### Styling
```typescript
<TouchSpin
  [class]="'custom-class'"             // Wrapper CSS class
  [inputClass]="'input-class'"         // Input CSS class
/>
```

#### Events
```typescript
<TouchSpin
  (blur)="onBlur()"                   // Input blur event
  (focus)="onFocus()"                 // Input focus event

  // TouchSpin Events
  (onMin)="onMin()"                   // Fired at minimum boundary
  (onMax)="onMax()"                   // Fired at maximum boundary
  (onStartSpin)="onStartSpin()"       // Fired when spinning starts
  (onStopSpin)="onStopSpin()"         // Fired when spinning stops
  (onStartUpSpin)="onStartUpSpin()"   // Fired when upward spinning starts
  (onStartDownSpin)="onStartDownSpin()" // Fired when downward spinning starts
  (onStopUpSpin)="onStopUpSpin()"     // Fired when upward spinning stops
  (onStopDownSpin)="onStopDownSpin()" // Fired when downward spinning stops
  (onSpeedChange)="onSpeedChange()"   // Fired when spin speed increases
/>
```

### Imperative API (ViewChild)

```typescript
import { Component, ViewChild } from '@angular/core';
import { TouchSpinVanillaComponent } from '@touchspin/angular/vanilla';

@Component({
  selector: 'app-example',
  template: `
    <touch-spin #touchSpinRef [defaultValue]="50"></touch-spin>
    <button (click)="increment()">+1</button>
  `
})
export class ExampleComponent {
  @ViewChild('touchSpinRef') touchSpin!: TouchSpinVanillaComponent;

  increment() {
    this.touchSpin.increment();
  }
}
```

#### TouchSpinHandle Methods

```typescript
interface TouchSpinHandle {
  // Focus Management
  focus(): void;                    // Focus the input
  blur(): void;                     // Blur the input

  // Value Control
  increment(): void;                // Increment by step
  decrement(): void;                // Decrement by step
  getValue(): number;               // Get current value
  setValue(value: number): void;    // Set new value

  // Continuous Spinning
  startUpSpin(): void;              // Start continuous upward spinning
  startDownSpin(): void;            // Start continuous downward spinning
  stopSpin(): void;                 // Stop any continuous spinning

  // Configuration
  updateSettings(opts: Partial<TouchSpinCoreOptions>): void;
                                  // Update settings at runtime
}
```

## Usage Examples

### Basic Controlled Component

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TouchSpinVanillaComponent } from '@touchspin/angular/vanilla';

@Component({
  selector: 'app-basic',
  standalone: true,
  imports: [FormsModule, TouchSpinVanillaComponent],
  template: `
    <div>
      <touch-spin
        [(ngModel)]="value"
        [min]="0"
        [max]="100"
        [step]="5"
      ></touch-spin>
      <p>Value: {{ value }}</p>
    </div>
  `
})
export class BasicComponent {
  value = 25;
}
```

### With Prefix/Suffix

```typescript
import { Component } from '@angular/core';
import { TouchSpinVanillaComponent } from '@touchspin/angular/vanilla';

@Component({
  selector: 'app-currency',
  standalone: true,
  imports: [TouchSpinVanillaComponent],
  template: `
    <touch-spin
      [(ngModel)]="price"
      [min]="0"
      [max]="1000"
      [step]="0.01"
      [decimals]="2"
      [prefix]="'$'"
      [suffix]="' USD'"
    ></touch-spin>
  `
})
export class CurrencyComponent {
  price = 29.99;
}
```

### Event Handling

```typescript
import { Component } from '@angular/core';
import { TouchSpinVanillaComponent } from '@touchspin/angular/vanilla';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [TouchSpinVanillaComponent],
  template: `
    <div>
      <touch-spin
        [defaultValue]="50"
        [min]="0"
        [max]="100"
        (onMin)="addEvent('Reached minimum')"
        (onMax)="addEvent('Reached maximum')"
        (onStartSpin)="addEvent('Spin started')"
        (onStopSpin)="addEvent('Spin stopped')"
      ></touch-spin>

      <h3>Event Log:</h3>
      <ul>
        <li *ngFor="let event of events; trackBy: trackByIndex">{{ event }}</li>
      </ul>
    </div>
  `
})
export class EventsComponent {
  events: string[] = [];

  addEvent(message: string) {
    this.events.unshift(`${new Date().toLocaleTimeString()}: ${message}`);
  }

  trackByIndex(index: number) {
    return index;
  }
}
```

### Imperative Control

```typescript
import { Component, ViewChild } from '@angular/core';
import { TouchSpinVanillaComponent } from '@touchspin/angular/vanilla';

@Component({
  selector: 'app-imperative',
  standalone: true,
  imports: [TouchSpinVanillaComponent],
  template: `
    <div>
      <div>
        <button (click)="setValue42()">Set to 42</button>
        <button (click)="startSpinning()">Start Spinning Up</button>
        <button (click)="stopSpinning()">Stop Spinning</button>
        <button (click)="showValue()">Show Current Value</button>
      </div>

      <touch-spin
        #touchSpin
        [defaultValue]="25"
        [min]="0"
        [max]="100"
      ></touch-spin>

      <p>Current value: {{ currentValue }}</p>
    </div>
  `
})
export class ImperativeComponent {
  @ViewChild('touchSpin') touchSpin!: TouchSpinVanillaComponent;
  currentValue = 0;

  setValue42() {
    this.touchSpin.setValue(42);
  }

  startSpinning() {
    this.touchSpin.startUpSpin();
  }

  stopSpinning() {
    this.touchSpin.stopSpin();
  }

  showValue() {
    this.currentValue = this.touchSpin.getValue();
  }
}
```

### Reactive Forms

```typescript
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { TouchSpinVanillaComponent } from '@touchspin/angular/vanilla';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [ReactiveFormsModule, TouchSpinVanillaComponent],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <label>
        Quantity:
        <touch-spin
          formControlName="quantity"
          [min]="1"
          [max]="99"
        ></touch-spin>
      </label>
      <button type="submit">Add to Cart</button>
    </form>
  `
})
export class ReactiveComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      quantity: [1]
    });
  }

  onSubmit() {
    console.log('Quantity:', this.form.value.quantity);
  }
}
```

## Advanced Configuration

### Custom Core Options

```typescript
import { Component } from '@angular/core';
import { TouchSpinVanillaComponent } from '@touchspin/angular/vanilla';

@Component({
  selector: 'app-advanced',
  standalone: true,
  imports: [TouchSpinVanillaComponent],
  template: `
    <touch-spin
      [defaultValue]="50"
      [min]="0"
      [max]="100"
      [step]="1"
      [coreOptions]="{
        verticalbuttons: true,
        buttonup_class: 'custom-up',
        buttondown_class: 'custom-down'
      }"
    ></touch-spin>
  `
})
export class AdvancedComponent {}
```

## Testing

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TouchSpinVanillaComponent } from '@touchspin/angular/vanilla';

describe('TouchSpinComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, TouchSpinVanillaComponent, TestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should increment value', () => {
    const touchSpin = fixture.nativeElement.querySelector('touch-spin');
    const incrementBtn = touchSpin.querySelector('button:last-child');

    incrementBtn.click();
    fixture.detectChanges();

    expect(component.value).toBe(6);
  });
});

@Component({
  selector: 'test-component',
  template: '<touch-spin [(ngModel)]="value" [defaultValue]="5"></touch-spin>'
})
class TestComponent {
  value = 5;
}
```

## Development

```bash
# Install dependencies
yarn install

# Build all packages
yarn build

# Run tests
yarn test

# Run tests with coverage
yarn test:coverage

# Run tests in watch mode
yarn test:watch

# Type checking
yarn typecheck

# Linting
yarn lint
```

## Related Packages

### Core
- **@touchspin/core** - Core TouchSpin logic and API

### Renderers
- **@touchspin/renderer-vanilla** - Vanilla CSS renderer
- **@touchspin/renderer-bootstrap3** - Bootstrap 3 renderer
- **@touchspin/renderer-bootstrap4** - Bootstrap 4 renderer
- **@touchspin/renderer-bootstrap5** - Bootstrap 5 renderer
- **@touchspin/renderer-tailwind** - Tailwind CSS renderer

### Adapters
- **@touchspin/angular** - Angular adapter (this package)
- **@touchspin/react** - React adapter
- **@touchspin/jquery** - jQuery plugin
- **@touchspin/webcomponent** - Web Components
- **@touchspin/standalone** - Standalone bundle

## Contributing

Contributions welcome! Please see the [main TouchSpin repository](https://github.com/istvan-ujjmeszaros/touchspin) for [contribution guidelines](https://github.com/istvan-ujjmeszaros/touchspin/blob/main/CONTRIBUTING.md).

## License

MIT © Istvan Ujj-Meszaros