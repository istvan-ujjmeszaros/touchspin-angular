# @touchspin/angular

Angular adapter for TouchSpin providing native Angular components with per-renderer support.

## Features

- ✅ **ControlValueAccessor** implementation for seamless Angular forms integration
- ✅ **Reactive and template-driven forms** support
- ✅ **Per-renderer subpath imports** (Bootstrap 3/4/5, Tailwind, Vanilla)
- ✅ **Standalone components** (Angular 14+)
- ✅ **SSR/Angular Universal** compatible
- ✅ **Full keyboard navigation** (ArrowUp/Down, PageUp/Down, Home/End)
- ✅ **ARIA attributes** for accessibility (role="spinbutton", aria-valuenow, etc.)
- ✅ **Controlled/uncontrolled patterns** (value vs defaultValue)
- ✅ **Imperative API** via component reference

## Installation

```bash
npm install @touchspin/angular @touchspin/core @touchspin/renderer-bootstrap5
```

> **Note:** Install the renderer package that matches your UI framework.

## Setup

TouchSpin Angular ships fully AOT-compiled components. No runtime compiler imports or schema overrides are required—just install the package, import the renderer you need, and include its CSS in your global styles or component stylesheet.

### Compatibility

The adapter is built and tested in Angular CLI projects targeting **Angular 17, 18, 19, and 20**.  We maintain standalone example applications for each version in the [touchspin-angular-examples](https://github.com/istvan-ujjmeszaros/touchspin-angular-examples) repository.  When consuming the package in your own workspace, make sure to import the renderer stylesheet (for example `@touchspin/renderer-vanilla/css`) in your global styles or component stylesheet.

## Quick Start

### Import the Component

```typescript
import { Component } from '@angular/core';
import { TouchSpinBootstrap5Component } from '@touchspin/angular/bootstrap5';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TouchSpinBootstrap5Component],
  template: `
    <touch-spin
      [(ngModel)]="quantity"
      [min]="0"
      [max]="100"
      [step]="1"
    ></touch-spin>
  `
})
export class AppComponent {
  quantity = 10;
}
```

### Template-Driven Forms

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TouchSpinBootstrap5Component } from '@touchspin/angular/bootstrap5';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [FormsModule, TouchSpinBootstrap5Component],
  template: `
    <form>
      <label for="quantity">Quantity:</label>
      <touch-spin
        id="quantity"
        name="quantity"
        [(ngModel)]="quantity"
        [min]="1"
        [max]="100"
        [step]="1"
        (valueChange)="onQuantityChange($event)"
      ></touch-spin>
      <p>Selected: {{ quantity }}</p>
    </form>
  `
})
export class ExampleComponent {
  quantity = 10;

  onQuantityChange(value: number) {
    console.log('New quantity:', value);
  }
}
```

### Reactive Forms

```typescript
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TouchSpinBootstrap5Component } from '@touchspin/angular/bootstrap5';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [ReactiveFormsModule, TouchSpinBootstrap5Component],
  template: `
    <form>
      <label for="price">Price:</label>
      <touch-spin
        id="price"
        [formControl]="priceControl"
        [min]="0"
        [step]="0.01"
        [decimals]="2"
        prefix="$"
      ></touch-spin>
      <p>Selected: {{ priceControl.value | currency }}</p>
    </form>
  `
})
export class ExampleComponent {
  priceControl = new FormControl(9.99);
}
```

## Available Renderers

Import from per-renderer subpaths:

```typescript
// Bootstrap 3
import { TouchSpinBootstrap3Component } from '@touchspin/angular/bootstrap3';

// Bootstrap 4
import { TouchSpinBootstrap4Component } from '@touchspin/angular/bootstrap4';

// Bootstrap 5
import { TouchSpinBootstrap5Component } from '@touchspin/angular/bootstrap5';

// Tailwind CSS
import { TouchSpinTailwindComponent } from '@touchspin/angular/tailwind';

// Vanilla CSS
import { TouchSpinVanillaComponent } from '@touchspin/angular/vanilla';
```

## API Reference

### Inputs

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `value` | `number \| null` | - | Controlled value (use with `valueChange` output) |
| `defaultValue` | `number \| null` | - | Initial value (uncontrolled mode) |
| `min` | `number` | - | Minimum allowed value |
| `max` | `number` | - | Maximum allowed value |
| `step` | `number` | `1` | Increment/decrement amount |
| `decimals` | `number` | `0` | Number of decimal places |
| `prefix` | `string` | - | Text to prepend to the value |
| `suffix` | `string` | - | Text to append to the value |
| `disabled` | `boolean` | `false` | Disable the input |
| `readOnly` | `boolean` | `false` | Make the input read-only |
| `name` | `string` | - | Form control name |
| `id` | `string` | - | Element ID |
| `class` | `string` | - | CSS class for wrapper element |
| `inputClass` | `string` | - | CSS class for input element |
| `ariaLabel` | `string` | - | ARIA label for accessibility |
| `ariaLabelledBy` | `string` | - | ARIA labelledby for accessibility |
| `coreOptions` | `Partial<TouchSpinCoreOptions>` | - | Advanced core options |

### Outputs

| Output | Type | Description |
|--------|------|-------------|
| `valueChange` | `EventEmitter<number>` | Emitted when value changes |
| `change` | `EventEmitter<{value: number, meta: TouchSpinChangeMeta}>` | Detailed change event with metadata |
| `blurred` | `EventEmitter<void>` | Emitted when input loses focus |
| `focused` | `EventEmitter<void>` | Emitted when input gains focus |

### Imperative Methods

Access via component reference:

```typescript
import { Component, ViewChild } from '@angular/core';
import { TouchSpinBootstrap5Component } from '@touchspin/angular/bootstrap5';

@Component({
  selector: 'app-example',
  template: `
    <touch-spin #spinner [min]="0" [max]="100"></touch-spin>
    <button (click)="spinner.increment()">+</button>
    <button (click)="spinner.decrement()">-</button>
  `
})
export class ExampleComponent {
  @ViewChild('spinner') spinner!: TouchSpinBootstrap5Component;

  ngAfterViewInit() {
    this.spinner.setValue(50);
    console.log(this.spinner.getValue()); // 50
  }
}
```

| Method | Description |
|--------|-------------|
| `focus(): void` | Focus the input element |
| `blur(): void` | Blur the input element |
| `increment(): void` | Increment value by step |
| `decrement(): void` | Decrement value by step |
| `getValue(): number` | Get current value |
| `setValue(value: number): void` | Set value programmatically |
| `getCore(): TouchSpinCorePublicAPI \| null` | Access core API instance |

## Keyboard Support

| Key | Action |
|-----|--------|
| `ArrowUp` | Increment by `step` |
| `ArrowDown` | Decrement by `step` |
| `PageUp` | Increment by `step * 10` |
| `PageDown` | Decrement by `step * 10` |
| `Home` | Jump to `min` value |
| `End` | Jump to `max` value |

## Accessibility

The component includes proper ARIA attributes for screen readers:

- `role="spinbutton"` - Identifies the widget type
- `aria-valuenow` - Current value
- `aria-valuemin` - Minimum value
- `aria-valuemax` - Maximum value
- `aria-label` / `aria-labelledby` - Accessible label

```html
<label id="price-label">Price</label>
<touch-spin
  [ariaLabelledBy]="'price-label'"
  [min]="0"
  [max]="1000"
></touch-spin>
```

## SSR / Angular Universal

The component is fully compatible with Angular Universal (SSR). Browser-specific code is only executed when `isPlatformBrowser` returns true.

```typescript
import { Component } from '@angular/core';
import { TouchSpinBootstrap5Component } from '@touchspin/angular/bootstrap5';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [TouchSpinBootstrap5Component],
  template: `<touch-spin [min]="0" [max]="100"></touch-spin>`
})
export class ExampleComponent {
  // Component works seamlessly in SSR
}
```

## Controlled vs Uncontrolled

### Uncontrolled (defaultValue)

```html
<!-- Value managed internally by component -->
<touch-spin
  [defaultValue]="10"
  (valueChange)="onValueChange($event)"
></touch-spin>
```

### Controlled (value + valueChange)

```html
<!-- Value managed by parent component -->
<touch-spin
  [value]="quantity"
  (valueChange)="quantity = $event"
></touch-spin>
```

### With ngModel (Recommended)

```html
<!-- Angular forms integration -->
<touch-spin [(ngModel)]="quantity"></touch-spin>
```

## Advanced Examples

### With Validators

```typescript
import { Component } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { TouchSpinBootstrap5Component } from '@touchspin/angular/bootstrap5';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [ReactiveFormsModule, TouchSpinBootstrap5Component],
  template: `
    <touch-spin
      [formControl]="quantityControl"
      [min]="1"
      [max]="100"
    ></touch-spin>
    <div *ngIf="quantityControl.invalid && quantityControl.touched">
      Please select a quantity between 1 and 100
    </div>
  `
})
export class ExampleComponent {
  quantityControl = new FormControl(10, [
    Validators.required,
    Validators.min(1),
    Validators.max(100)
  ]);
}
```

### With Prefix/Suffix

```html
<!-- Currency -->
<touch-spin
  [value]="price"
  [prefix]="'$'"
  [decimals]="2"
  [step]="0.01"
></touch-spin>

<!-- Percentage -->
<touch-spin
  [value]="percentage"
  [suffix]="'%'"
  [min]="0"
  [max]="100"
></touch-spin>
```

## License

MIT © TouchSpin Contributors
