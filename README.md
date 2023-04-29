# Automation Challenge

The project is using the following tech stack:

Playwright

Node.js (>=14.17.0)

Allure Report

ESLint

## Setup

- Clone the project:

```git
git clone https://github.com/#####.git
```

- Install the dependencies:

```npm
npm install
```
Followed by the following command in order to download the browsers playwright uses for the tests:

```npm
npx playwright install
```

- In order to run the tests sucessfully, you need to set the data required in the **`.env`**. Use the **`.env.template`** as an example.

- You can run the tests locally with or without docker, just pick up one of the scripts bellow.

## Available scripts

- In case you want to run all tests locally (without Docker) and then execute one of the scripts bellow (headless or non headless mode) to run the tests:
- By default tests will run on chromium, you can also run on firefox and safari e.g. test:local:safari (check package.json for all commands)

```npm
npm run test:local
```

```npm
npm run test:local:headless
```

- Run all tests locally with Docker:

```npm
npm run test:docker:local
```

- In case you want to check linting errors:

```npm
npm run lint
```

- To fix any fixable linting errors:

```npm
npx run lintfix
```

## Debugging

Just add '-- --debug' to the above commands you're running to access playwright debugger.

*NOTE*: Adding '--' before the argument '--debug' is not a typo, npm requires -- to pass the argument, and then the argument is --debug. (if we use Yarn instead of npm we would just be able to do --debug)

## Reporting

Allure is being used for test reports, running the following command will generate the report and open it in your browser

```npm
npm allure-generate
```

## Wiki references

<https://playwright.dev/docs/intro>
