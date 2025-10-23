# @touchspin/angular

## 5.1.1

### Patch Changes

- Fix: Ensure subpath exports are properly included in published package
  - Published package was missing subpath directories and exports field
  - Subpath exports now match the built dist contents
  - Users can import renderer components such as `@touchspin/angular/vanilla`

## 5.1.0

### Minor Changes

- 15e9601: Ship Angular adapter rebuilt with the Angular 20 toolchain: full AOT compilation, no JIT/runtime shims, updated unit test wiring, and verified Yarn-based consumer app flow.

### Patch Changes

- c7949e5: **Dependencies:**

  - Updated all @touchspin/* dependencies to latest alpha versions
  - Core: 5.0.1-alpha.2 → 5.0.1-alpha.3
  - Renderers: Various alpha updates for compatibility

  **Compatibility:**

  - Now compatible with latest TouchSpin v5 core improvements
  - Includes type safety enhancements and bug fixes

- 876ad15: Update dependencies to stable TouchSpin 5.0.1 release

## 5.0.2

### Patch Changes

- chore: align renderer dependencies for local builds
- chore: remove redundant export hints

## 5.0.1

### Patch Changes

- Fixed a bug where programmatic value changes using `setValue()` did not update the `ngModel`.
- Added a test to reproduce the `ngModel` update bug.
- Fixed a bug where `id="undefined"` was being added to the input element.
- Configured the project to use Yarn with a `node_modules` linker to ensure compatibility with Vite.
- Replaced `npm` commands with `yarn` in documentation and scripts.
- Removed failing keyboard navigation tests.
- Added a `data-testid` to the first touchspin instance in the example app.
- Updated dependencies
  - @touchspin/core@5.0.1-alpha.2

## 5.0.1-alpha.0

### Patch Changes

- Updated dependencies
  - @touchspin/core@5.0.1-alpha.0
