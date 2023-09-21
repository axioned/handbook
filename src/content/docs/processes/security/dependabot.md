---
id: Dependabot
title: Dependabot for module updates
sidebar_label: Dependabot for module updates
tags: [GitHub, GitHub Actions, CI/CD, Dependabot, Maintenance]
---

Dependabot alleviates that pain by raising a PR against a particular module automatically, so you can spend less time updating dependencies and more time building.

**General notes:**

- You can not select the source branch for your dependency/package branch.
- To run the Dependabot, the `.yml` file needs to be in the default branch (main), If you want to run your Dependabot from any other branch, then you have to [change your default branch](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/changing-the-default-branch) to required one.
- Specify target branch should be present in the remote branches.

:::danger Caution
Before changing default branch: Make sure your CI/CD flow doesn’t get interrupted
:::

## Creating `.yml` config file for Dependabot

Please follow the below link:
[Configuration options for the dependabot.yml file - GitHub Docs](https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#about-the-dependabotyml-file)

## Steps to config Dependabot:

- Go to your repository
- Click on “insights” from top menus
- Select “Dependency Graph”
- Click on “Dependabot” option from the sub top-menus
- Click on “create config file”
- Paste the below code into config file:

```yaml
# To get started with Dependabot version updates, you'll need to specify which
# package ecosystems to update and where the package manifests are located.
# Please see the documentation for all configuration options:
# https://docs.github.com/github/administering-a-repository/configuration-options-for-dependency-updates

version: 2
updates:
  - package-ecosystem: "npm" # See documentation for possible values
    directory: "/" # Location of package manifests
    schedule:
      interval: "weekly"
      day: "monday"
      time: "05:00"
      # Use USA Standard Time (UTC +05:00)
      timezone: "America/New_York"
    # Allow up to 10 open pull requests for npm dependencies
    open-pull-requests-limit: 10
    # to npm package against the `main` or any other branch of your choice like `develop`
    target-branch: "main"
    # Labels on pull requests for version updates only
    labels:
      - "npm dependency"
    # Add assignees
    assignees:
      - "smayuraxioned"
    # Add reviewers
    reviewers:
      - "smayuraxioned"
```

- Commit the changes into the default branch
- After successfully configuring Dependabot, you will start getting mails about PR for module updates

## Future enhancement to keep eye out for:

- [Question about multiple target branches #889](https://github.com/Dependabot/feedback/issues/889)
- [Select where to create branch from #2721](https://github.com/Dependabot/Dependabot-core/issues/2721#ref-issue-865405957)
- [Command to switch target-branch of a specific Pull request #3546](https://github.com/Dependabot/Dependabot-core/issues/3546)
