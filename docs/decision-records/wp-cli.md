---
id: CLI
title: CLI for Wordpress
sidebar_label: Wordpress CLI
tags: cli, wp-cli, maintenance, security, updates, user-roles, plugin-updates
---

This document is an overview of the required information that a developer needs to have in order to use WP-CLI in any of the WordPress projects.

### Overview

WP-CLI is a command line interface which allows the users to manage their WordPress websites from the command prompt. To upgrades and install plugins/themes, to generate backups, new posts can be published and most of the regular admin actions can be performed with a set of commands.

The beauty of the WP-CLI is that it gives us direct control over site. Anything that we do in WordPress admin dashboard can be done using WP-CLI instead. 

**Pre requisites**
- UNIX-like environment (OS X, Linux, FreeBSD, Cygwin); limited support in Windows 
- PHP 5.6 or later.
- WordPress 3.7 or later.

### Installation of WP-CLI

Run the below commands in terminal:

```
curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
``` 
```
php wp-cli.phar --info
```
```
chmod +x wp-cli.phar
```
```
sudo mv wp-cli.phar /usr/local/bin/wp
```

### Use Cses of WP-CLI

- Manage plugins and themes
    - Installing the WordPress software, themes, and/or plugins
    - Activating/deactivating/updating themes and plugins
    - Resolving conflicts between plugins and themes
    - Creating a child theme
    - Updating core WordPress via WP CLI
- Quick security check for wordpress core and plugins
- Usage in deployment scripts
    - Search and Replace Command
- Create loads of dummy content for testing
- User management via WP CLI
    - Creating or managing users, including changing passwords and other user information
- Configuring WP-Cron to run like a real cron via WP CLI for stability
    - Test WP Cron spawning system is running properly
    - Run, schedule, delete, reschedule posts
- Editing or optimizing your database, such as deleting post revisions
- Generating test data 
- Add your own command
- Managing comments
- Custom command in WP-CLI
- DB Migration
- Run commands on the remote server

