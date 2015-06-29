# CareerBuilder Employer Experience UI/UX Style Guide

A visual [style guide](http://en.wikipedia.org/wiki/Style_guide) providing sensible UI/UX examples for a unified CareerBuilder Employer experience. See it in action [here](http://cb-talent-development.github.io/employer-style-guide/)!

### Building/Watching

Install some global dependencies, then project dependencies:

```sh
$ npm -g install bower gulp
$ npm install
$ bower install
```

Now you can build or watch the project! Compiled assets will be plopped into the `dist` directory.

```sh
$ gulp build
or
$ gulp watch
````

### Deploying

If you need to deploy a new version to Github Pages, simply execute the deploy task:

```sh
$ gulp deploy
```

This will build, commit and push the compiled assets to the `gh-pages` branch.
