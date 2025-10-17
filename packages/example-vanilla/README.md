# TouchSpin Angular - Vanilla Renderer Example

Interactive example application demonstrating all features of the TouchSpin Angular adapter with the Vanilla CSS renderer.

## Quick Start

From the repository root:

```bash
# Install dependencies
yarn install

# Start the dev server
yarn dev:vanilla
```

Or from this directory:

```bash
yarn dev
```

The app will be available at http://localhost:5173

## What's Demonstrated

This example showcases all major features:

1. **Basic Usage** - Simple two-way binding with `ngModel`
2. **Reactive Forms** - `FormControl` integration with validators
3. **Template-Driven Forms** - Complete form with validation
4. **Kitchen Sink** - All options (prefix, suffix, decimals, min, max, step)
5. **Events Demo** - All event outputs with console logging
6. **Keyboard Navigation** - Full keyboard shortcut support
7. **Imperative API** - Programmatic control via component reference
8. **States** - Disabled and readonly state management

## Keyboard Shortcuts

Focus any TouchSpin input and use:

- `↑` / `↓` - Increment/decrement by step
- `Page Up` / `Page Down` - Large increments (10× step)
- `Home` / `End` - Jump to min/max values

## Code Structure

- `src/main.ts` - Application bootstrap
- `src/app.component.ts` - Main demo component with all 8 sections
- `src/styles.css` - Minimal global styles

## Building

```bash
yarn build
```

Output will be in `dist/`

## License

MIT