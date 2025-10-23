# TouchSpin Angular Example

This workspace hosts a minimal Angular 20 application that demonstrates how to consume `@touchspin/angular` using the vanilla renderer.

## Commands

```bash
yarn install
# start the dev server on http://localhost:4200
yarn workspace example-angular start
# build a production bundle
yarn workspace example-angular build
```

The app lives in `packages/example-angular/src` and only imports `TouchSpinVanillaComponent`—swap in other renderers as needed.
