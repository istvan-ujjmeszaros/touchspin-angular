# @touchspin/angular

## 5.0.1-alpha.2

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