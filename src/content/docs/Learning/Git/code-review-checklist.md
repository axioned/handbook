---
id: code-review-checklist
title: Code Review Checklist
sidebar:
  label: Code Review Checklist
  order: 2
tags: [git, code review, checklist]
---

This checklist serves as a comprehensive guide for code reviews at Axioned. Following these guidelines ensures consistent code quality, maintainable codebase, and efficient collaboration across teams.

This checklist is for both the PR author and the reviewer.

We can adapt this checklist to the needs of the project or our clients.

## Pull Request (PR) Standards

- Write clear, descriptive PR titles and descriptions
- Include relevant ticket/issue numbers in the title (e.g. `feat: add rate limits (AX-123)`)
- Description should include:
  - Summary of the changes (if not obvious from the title)
  - Document any breaking changes
  - Add screenshots for UI changes (if applicable)
  - List testing steps and expected outcomes (if applicable)

## Branch Management

- Create branches from the latest `main`
- Use consistent branch naming: `type/short-description` or  `type/ticket-number-short-description`
  - Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
- Keep branches up-to-date with `main`
- Delete branches after merging (configured on GitHub in the repository settings)

## Commit Standards

- Write clear, descriptive commit messages.
- Use [conventional commit](https://www.conventionalcommits.org/) format: `type(scope): description`
  - Scope is optional
  - Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
  - Examples:
    - `feat: add rate limits on API endpoints`
    - `feat(auth): add login functionality`
    - `fix: handle null values in API response`
    - `docs: update installation instructions`
    - `style: improve button styling`
    - `refactor: extract helper functions`
    - `test: add test for login component`
    - `chore(deps): update dependencies`
- Keep commits atomic and focused
- Include ticket numbers in commit messages
- Squash commits when appropriate (e.g. if there are multiple commits that don't need to be in the history)

## Code Quality

- Follow project coding standards
- Use Prettier/ESLint for consistent formatting
  - Most Axioned repositories use [@axioned/prettier-config](https://www.npmjs.com/package/@axioned/prettier-config).
- Remove all console.logs and debug code
- No commented-out code (use `TODO:` comments if needed)
- Write meaningful comments for complex logic
- All applicable projects have Typescript
- Keep functions small and focused
- Consider using [JSDoc](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html) for more complex functions and classes
- Follow DRY (Don't Repeat Yourself) principle

## File Management

- Maintain proper `.gitignore` configuration
- Don't commit:
  - Build artifacts (`dist`, `build`)
  - Dependencies (`node_modules`)
  - Environment files (`.env`)
  - IDE/editor files (`.vscode`, `.idea`)
  - Log files
  - Cache directories

## Review Process

- Keep PRs small and focused (e.g. don't mix refactoring with new features)
- Break large features into smaller PRs
- Address review comments promptly
- Ensure CI/CD checks pass (e.g. linting, tests)
- Test changes locally before requesting review
- Update documentation if needed

## Security

- Don't commit sensitive data
- Review and regularly update third-party dependencies
- Validate user inputs
- Handle errors appropriately
