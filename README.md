# TouchSpin Angular

Angular adapter for TouchSpin numeric input spinner with ControlValueAccessor (v5.0.1-alpha.0)

## Installation

```bash
npm install @touchspin/angular@alpha @touchspin/core@alpha
```

## Usage

Import from per-renderer subpaths:

```typescript
import { TouchSpinBootstrap5Component } from '@touchspin/angular/bootstrap5';

@Component({
  standalone: true,
  imports: [FormsModule, TouchSpinBootstrap5Component],
  template: `
    <touch-spin [(ngModel)]="value" [min]="0" [max]="100" [step]="5" />
  `
})
export class AppComponent {
  value = 50;
}
```

## Available Renderers

- `@touchspin/angular/bootstrap3` - Bootstrap 3 renderer
- `@touchspin/angular/bootstrap4` - Bootstrap 4 renderer
- `@touchspin/angular/bootstrap5` - Bootstrap 5 renderer
- `@touchspin/angular/tailwind` - Tailwind CSS renderer
- `@touchspin/angular/vanilla` - Vanilla CSS renderer

## Development

```bash
yarn install
yarn build
yarn test
```

## Examples

See `packages/examples/` for full examples (to be implemented).

## License

MIT
