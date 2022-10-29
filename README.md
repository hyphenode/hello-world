# Hello World

This project is just an example of deploying a Typescript library to NPM.

Included in this project:

- testing using `jest`
- typescript
- *todo*: external dependency

The current structure of the library has a `src` directory which will compile to a `dist` directory.
In order to publish to NPM without the `dist` folder will be needing to duplicate the `package.json` into the directory and publishing inside.

I will also need to clean the `package.json` file to exclude certain **key=value** pairs (for now, `devDependencies` and `scripts`).

Syncing the package version with github tags is easy with the `npm version (major|minor|patch)` command.

This library with also use github actions to automate the process.

## What I want to do?

To change directory into `dist` and push to NPM registry, then delete that folder on cleanup.

I would need to do the following `npm publish --access public`

More help with publishing can be found [here](https://dev.to/nljmsmnzls/publishing-your-first-typescript-npm-package-using-github-actions-3fbf)

Currently require a PR to commit to `main` branch.