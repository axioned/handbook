---
id: automation
title: Test Automation
tags: [ 'testing', 'product', 'qa', 'quality assurance', 'E2E testing', 'engineering']

---

- We automate what we feel is worth automating.
- We need to be pragmatic about the value addition of these tests.
- We are not rushing for a rigid or an objective x% coverage.
- The goal is to automate what we should so that we can use the remaining time for higher value things.
- We don’t want to add or create more work for someone else while we do this.

:::caution
Any automation script that require manual intervention (and can't run on-demand) is not automation.
:::

## What to automate?

Prime candidates for automation are:

- **Smoke tests** - These are the tests that we run to make sure that the critical functionalities are working fine. You might identify these based on the [happy path](https://en.wikipedia.org/wiki/Happy_path) of the application, or your fragile areas of the application based on your experience.

Next up are:

- **Regression tests** - These are the tests that we run to make sure that the existing functionality is not broken. And are more thorough (not just the happy path)

Finally:

- **End-to-end tests** - These are the tests that we run to make sure that the entire flow is working as expected.
