---
id: CLI
title: CLI for Wordpress
sidebar_label: Wordpress CLI
tags: cli, wp-cli, maintenance, security, updates, user-roles, plugin-updates
---

This document is an overview of the required information that a developer needs to have in order to use WP-CLI in any of the WordPress projects.

# Overview

WP-CLI is a command line interface which allows the users to manage their WordPress websites from the command prompt. To upgrades and install plugins/themes, to generate backups, new posts can be published and most of the regular admin actions can be performed with a set of commands.

The beauty of the WP-CLI is that it gives us direct control over site. Anything that we do in WordPress admin dashboard can be done using WP-CLI instead. 

**Pre requisites**
- UNIX-like environment (OS X, Linux, FreeBSD, Cygwin); limited support in Windows 
- PHP 5.6 or later.
- WordPress 3.7 or later.

## Installation of WP-CLI

**Ubuntu:**

Run the below commands in terminal:

**For Linux:**

```
curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
php wp-cli.phar --info
chmod +x wp-cli.phar
sudo mv wp-cli.phar /usr/local/bin/wp
```

**For Windows:**

1. Download wp-cli.phar and save it in the ```/php``` directive of XAMPP installation.
2. Move to the ```/php``` folder using shell and create a wrapping batch script that will create ```wp.cmd``` in the folder
    ```echo @php "%~dp0wp-cli.phar" %* > wp.cmd```
3. Confirm that we have successfuly installed WP-CLI.
    ```wp --info```

*Note: For windows as wp cli provides limited support, some dependencies needs to be installed separately*

## Project Setup with WP-CLI

**Steps:**

1. Clone the repo.
2. Go to json file > Make the following changes to the file:
    - wordpress version
    - db details: dbuser, host, username, password
    - site detail: site url, site title, admin: name, email, password
3. Update the plugin version as per requirement in plugin list.
4. Run command ```wp --require=axioned.php setup```

## Use Cses of WP-CLI

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

## Some useful commands:

**1. WP Installation**

```
// download core wp files
wp core download 

// create config file
wp core config --dbname=wpcli_test --dbuser=phpmyadmin --dbpass=root --dbhost=localhost --dbprefix=wp_

// create db
wp db create

// install wp with admin user
wp core install --url=http://localhost/WP-Cli_Testing/wp --title="Your Blog Title" --admin_name=admin --admin_password=admin --admin_email=admin@example.com

//upgrade or downgrade wp core 
wp core update --version=5.8.4 --force
```

Reinstall WordPress Core

```
wp core download --skip-content --force
```

Change home and site url

```
wp option update home 'https://example.com'
wp option update siteurl 'https://example.com'
```

**2. Plugins play around**

```
wp plugin list

wp plugin install all-in-one-wp-migration
wp plugin delete all-in-one-wp-migration

wp plugin activate hello
wp plugin deactivate hello

// install & activate
wp plugin install all-in-one-wp-migration --activate

// install specific version
wp plugin install all-in-one-wp-migration --version=7.60
```

**3. Db Migration**
import, export and search replace

```
wp db import [<file name>]
wp db export
wp search-replace http://example.com http://newexample.com
```

**4. User Management**
```
wp user list 
wp user get admin

// create user 
wp user create ndg ndg@xyz.com --role=editor --first_name=alfa --last_name=beta --user_pass=admin

// manage user capabilities 
wp user list-caps ndg

wp user add-cap ndg edit_plugins
wp user remove-cap ndg edit_plugins

// manage user role
wp user add-role ndg administrator
wp user remove-role ndg administrator

wp user delete ndg
```

**5. Security check**

Core files security check:

```
wp core verify-checksums --version=$(wp core version)
```

Plugins security check:
```
wp plugin verify-checksums --all
```

**WP CLI Command details can be found [here](https://make.wordpress.org/cli/handbook/guides/commands-cookbook/)**

**Troubleshooting details:**
https://make.wordpress.org/cli/handbook/guides/troubleshooting/

**References:** 
https://wp-cli.org/
https://make.wordpress.org/cli/handbook/