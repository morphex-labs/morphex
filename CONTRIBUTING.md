# Contributing

When contributing to this repository, please first **discuss the change you wish to make** via issue,
email, or any other method with the owners of this repository before making a change.

Please note we have a **code of conduct**, please follow it in all your interactions with the project.

## Contributions

There’s **several ways** to contribute, not just by writing code.

### Improve docs

As a user you’re perfect for helping us **improve our docs**.
Typo corrections, error fixes, better explanations, new examples, etcetera.

### Improve issues

Some issues lack information, aren’t reproducible, or are just incorrect.
You can help by trying to make them easier to resolve.
Existing issues might benefit from your unique experience or opinions.

### Write code

Code contributions are _very welcome_.
It’s probably a good idea to first post a question or **open an issue** to report a
bug or **suggest a new feature** before creating a pull request.

## How to Contribute

### Prerequisites

In order to not waste your time implementing a change that has already been declined, or is generally not needed, start by [opening an issue](https://github.com/morphex-labs/morphex/issues/new/choose) describing the problem you would like to solve.

### Setup your environment

```bash
# Install dependencies
yarn
```

```bash
# Start Dev Server
yarn dev
```

### Implement your changes

When making commits, make sure to follow the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) guidelines, i.e. prepending the message with `feat:`, `fix:`, `chore:`, `docs:`, etc... You can use `git status` to double check which files have not yet been staged for commit:

```bash
git add <file> && git commit -m "feat/fix/chore/docs: commit message"
```

### When you're done

Check that your code follows the project's style guidelines by running:

```bash
# Runs ESLint and Prettier
yarn run check
```

Write unit tests (if necessary).

When all that's done, it's time to file a pull request to upstream:

**NOTE**: All pull requests should target the `main` branch.

## Pull Request Process

1. Update the README.md with details of changes to the interface, this includes new environment
   variables, exposed ports, useful file locations and container parameters.
2. You may merge the Pull Request in once you have the sign-off of two other developers, or if you
   do not have permission to do that, you may request the second reviewer to merge it for you.
