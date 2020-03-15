# Contributing

## Feature requests

When you have an idea on how we could improve, please check our [issues](https://github.com/aplanalacurva/aplanalacurva-components/issues) to see if there are similar ideas. If there are none, please [submit](https://github.com/aplanalacurva/aplanalacurva-components/issues/new) your feature request as an issue. Add a clear description of what you expect from the improvement and what the use case is. The issue will be tagged as new and included in the backlog when the issue is ready to be developed will be moved to To Do and any developer could take it and solve it. If you want to solve any issue, assing it to you and make a PR whe it is ready.

## Existing components: we love pull requests ♥

Help out the whole _Aplana la curva_ community by sending your merge requests and issues. Check out how to set it up:

Setup:

```
# Clone the repo:
git clone https://github.com/aplanalacurva/aplanalacurva-components.git
cd aplanalacurva-components

# Install dependencies
# We require yarn as we use yarn workspaces
yarn install

# Create a branch for your changes
git checkout -b fix/buttonSize
```

Make sure everything works as expected:

```
# Format
npm run format

# Linting
npm run lint

# Tests
npm run test

# Storybook Demo
npm run storybook
```

Create a Pull Request:

- At https://github.com/aplanalacurva/aplanalacurva-components click on fork (at the right top)

  ```
  # add fork to your remotes
  git remote add fork https://github.com/<username>/aplanalacurva-components.git

  # push new branch to your fork
  git push -u fork fix/buttonSize
  ```

- Go to your fork and create a Pull Request
- Keep your branch [rebased](https://git-scm.com/book/en/v2/Git-Branching-Rebasing) over master to ensure it's possible to merge as a [--ff-only option](https://git-scm.com/docs/merge-options#Documentation/merge-options.txt---ff-only).

Some things that will increase the chance that your merge request is accepted:

- Write tests.
- Write a [good commit message](https://www.conventionalcommits.org/).

## How to create a new component

Steps to create a new component `alc-[component]` where `[component]` is the name of your component with slashes if it has more than 1 word:

```
$ cd components
$ npm init @open-wc
  ✔ What would you like to do today? › Scaffold a new project
  ✔ What would you like to scaffold? › Web Component
  ✔ What would you like to add? › Testing
  ✔ Would you like to scaffold examples files for? › Testing
  ✔ What is the tag name of your application/web component? … [alc-component]
  ✔ Do you want to write this file structure to disk? › Yes
  ✔ Do you want to install dependencies? › No
$ mv [alc-component] [component]
$ cd [alc-component]
$ rm karma.*
$ rm .editorconfig
$ rm .gitignore
$ mv index.js src/
$ mv [alc-component].js src/
```

Finally, we have to do some changes in `pakage.json`:

- `"name": "@aplanalacurva/[component]"`
- `"scripts"` --> copy from `_config/pakage-scripts.json`
- `"main": "src/index.js"`
- `"module": "src/index.js"`
