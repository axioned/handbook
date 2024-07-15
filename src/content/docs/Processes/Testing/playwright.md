---
id: playwright
title: Playwright Setup
sidebar:
  label: Playwright Setup
---

## Pre-requisites

- [Install Node.js](https://nodejs.org/en/download/)
- [Visual Studio Code](https://code.visualstudio.com/download)
- [GitHub Desktop](https://desktop.github.com/) (Really handy if you don't want to deal with direct CLI/terminal with [Git](https://git-scm.com/downloads), especially when you are starting off)

## Installation

- Open this directory in VS Code or terminal where you want to manage the project
- Follow the fresh installation steps from [Playwright documentation](https://playwright.dev/docs/intro#installing-playwright) - or do it [directly from VS Code](https://playwright.dev/docs/getting-started-vscode).

:::tip
For any production use, we recommend using TypeScript when prompted by the installation script. You might want to also agree to Add a GitHub Actions workflow to easily run tests on CI - this comes in handy later on. Other default options are fine.

Don't forget to accept the prompt to install the browsers.
:::

:::caution[Execution Policy Error]
Windows PowerShell's default settings help prevent malicious scripts from being run (eg: VS Code). You can update the policy by running the following command in PowerShell (as Administrator):

```shell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

You can read more about it [here](https://stackoverflow.com/questions/47023796/visual-studio-code-unsigned-powershell-scripts).
:::

## Folder structure

```text
.
├── tests/                    // This folder contains your actual test scripts
│   └── example.spec.ts       // Example test script
├── .gitignore                // This file helps avoid committing unnecessary files
├── playwright.config.ts      // Global configuration file for Playwright
├── package.json              // To help to track dependencies and scripts
└── package-lock.json
```

## Running tests

You read more about running tests in [Playwright documentation](https://playwright.dev/docs/intro#running-the-example-test).

```bash
# Run all tests (in headless mode)
npx playwright test

# Run specific tests (in headless mode)
npx playwright test tests/example.spec.ts

# View the report
npx playwright show-report

# Run all tests (in UI mode, or headed/headful mode)
npx playwright test --ui

# Run all tests in a specific browser
npx playwright test --browser=firefox


```

## Recommended VS Code extensions

- [Playwright Test for VSCode](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) - Run Playwright Test tests in Visual Studio Code.
- [Trailing Spaces](https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces) - Highlight trailing spaces and delete them in a flash!

## Syncing with GitHub

Syncing (and signing in) with your GitHub is a really useful way to not have to remember your local setup - and not worry as much about setting up on a new system.

Read more about it [Settings Sync](https://code.visualstudio.com/docs/editor/settings-sync).
