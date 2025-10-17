# TouchSpin Angular

Angular adapter for the TouchSpin number input component with per-renderer support.

## Features

- ✅ Native Angular components with `ControlValueAccessor`
- ✅ Reactive and template-driven forms support
- ✅ Per-renderer subpath imports (Bootstrap 3/4/5, Tailwind, Vanilla)
- ✅ Standalone components (Angular 14+)
- ✅ SSR/Angular Universal compatible
- ✅ Full keyboard navigation and ARIA attributes
- ✅ Comprehensive test coverage

## Installation

```bash
yarn add @touchspin/angular @touchspin/core @touchspin/renderer-bootstrap5
```

## Quick Start

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TouchSpinBootstrap5Component } from '@touchspin/angular/bootstrap5';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, TouchSpinBootstrap5Component],
  template: `
    <touch-spin
      [(ngModel)]="quantity"
      [min]="0"
      [max]="100"
      [step]="1"
    ></touch-spin>
    <p>Quantity: {{ quantity }}</p>
  `
})
export class AppComponent {
  quantity = 10;
}
```

## Documentation

See the [package README](./packages/angular/README.md) for complete documentation, API reference, and examples.

## Development

```bash
# Install dependencies
yarn install

# Build the library
yarn build

# Run tests
yarn test

# Run tests with coverage
yarn test:coverage

# Run tests in watch mode
yarn test:watch
```

## Package Structure

```
touchspin-angular/
├── packages/
│   ├── angular/          # Main adapter package
│   └── examples/         # Example applications
```

## License

MIT © TouchSpin Contributors