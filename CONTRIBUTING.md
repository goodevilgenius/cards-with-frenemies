# Contributing

We love pull requests from everyone. By participating in this project, you agree to abide by the thoughtbot [code of conduct].

[code of conduct]: https://thoughtbot.com/open-source-code-of-conduct

## Getting Started

* Make sure you have a [GitHub account](https://github.com/signup/free)
* Submit a ticket for your issue, assuming one does not already exist.
  - Clearly describe the issue including steps to reproduce when it is a bug.
  - Make sure you fill in the earliest version that you know has the issue.
* Fork the repository on GitHub

## Making Changes

I use the git flow workflow for working on features, and ask that you do as well when contributing.

If you would like to install `git-flow`, you can use the supplied `scripts/setup.sh` to setup the necessary `git-flow` settings to match the project.

Then do the following:

* Create a feature branch from where you want to base your work.
  - This should be the `develop` branch
  - It should be named `feature/<name>`
  - If you have `git flow` installed, simply run `git flow feature start <name>`.
* Make commits of logical units.
* Check for unnecessary whitespace with `git diff --check` before committing.

## Pull Request

Once you are satisfied with your work, submit a pull request from your feature branch to the upstream `develop` branch.

I will review your code, and potentially ask you to make changes. Once everything looks good, I'll merge it into
`develop`, and it will be included in the next release.

## Copyrighted material

If submitting new decks, do not submit material that is copyrighted. If you knowingly submit copyrighted material in a PR, all future PRs and issues you submit will be immediately closed.
