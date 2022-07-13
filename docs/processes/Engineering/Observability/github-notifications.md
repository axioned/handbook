---
id: GithubNotifications
title: GitHub Notifications on Slack
sidebar_label: GitHub Notifications
tags: [GitHub, Slack, Notifications, Observability]
---

We have [GitHub application](https://slack.github.com/) already installed on Slack to be able us to receive notifications to Slack when a new commit, PR, comment, etc is made to a repository hosted with our Axioned organisation account.

## Create a notifications-only channel

We recommend this to make sure those who need to be alerted about these (eg: developers) are always notified instantly.

Ask your Project manager or IT team to create another channel with the suffix of `-notifications` to your main channel.

:::tip Example
Eg: If your project channel name is `#live-axioned-website`, then your notifications channel name should be `#live-axioned-website-notifications`
:::

## Stay up to date

Stay up to date
Use `/github subscribe [repository name]` in Slack to start receiving updates about activities like:

By default, you would start to receive notifications for:

- `issues` - Opened or closed issues
- `pulls` - New or merged pull requests, as well as draft pull requests marked "Ready for Review"
- `commits` - New commits on the default branch (usually main)
- `releases` - Published releases
- `deployments` - Deployment review notifications and Deployment status updates.

These are disabled by default, and can be enabled with the `/github subscribe owner/repo [feature]` command:

- `reviews` - Pull request reviews
- `comments` - New comments on issues and pull requests
- `branches` - Created or deleted branches
- `commits:*` - All commits pushed to any branch
- `+label:"your label"` - Filter issues, pull-requests and comments based on their labels.
- `discussions` - Discussions created or answered

## Advanced Settings

Head on over to the [official documentation](https://github.com/integrations/slack#customize-your-notifications) for further customization.
