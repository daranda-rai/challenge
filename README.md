# Automation Challenge

The project is using the following tech stack:

Playwright

Node.js (>=14.17.0)

Allure Report

ESLint

## Setup

- Clone the project:

```git
git clone https://github.com/daranda-rai/challenge.git
```

- Install the dependencies:

```
Install Node.js (>=14.17.0) (might need to restart ide/terminal after) https://nodejs.org/en/download
```

```npm
npm install
```
- Download the browsers playwright uses for the tests:

```npm
npx playwright install
```
- Install allure for reporting

```
https://docs.qameta.io/allure/#_installing_a_commandline
```


In order to run the tests sucessfully, you need to set the data required in the **`.env`**. Use the **`.env.template`** as an example.

For the challenge, the necessary **`.env`** is provided already


## Available scripts

- You can run the tests locally with or without docker, just pick up one of the scripts bellow.

In case you want to run tests locally (without Docker) execute one of the scripts bellow to run the tests

*NOTE!!!* For windows we must first set debug in the environment **`$env:DEBUG="pw:api"`**(in the terminal) and then run manually the commands from package.json e.g. **`npx playwright test --headed --project=chromium`**

```npm
npm run test:local
```

- Run tests locally with Docker:

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

- Just add **`--debug`** to the above commands you're running to access playwright debugger.

*NOTE*:Might need to add **`--`** before the argument **`--debug`**

## Reporting

Allure is being used for test reports, running the following command will generate the report and open it in your browser

```npm
npm allure-generate
```

## Wiki references

<https://playwright.dev/docs/intro>
