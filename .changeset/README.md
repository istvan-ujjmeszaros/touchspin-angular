# Changesets

This project uses [Changesets](https://github.com/changesets/changesets) to manage package versioning and publishing.

## Common commands

- `yarn changeset` — create a new release entry. Choose the package(s) and bump type, then write a summary.
- `yarn version-packages` — apply pending changesets (updates versions, changelog, and lockfile).
- `yarn release` — publish packages to npm.

## Workflow

1. **Create a changeset** whenever you make a change that should be released.
2. Review the generated `.changeset/*.md` file and commit it with your code changes.
3. For prereleases, run the release workflow or execute `yarn version-packages` followed by `yarn release`.

Refer to the Changesets documentation for advanced usage and configuration details.
