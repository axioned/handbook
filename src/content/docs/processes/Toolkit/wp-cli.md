---
id: WP-CLI
title: WP-CLI
sidebar:
  label: WP-CLI
tags: [cli, wp-cli, maintenance, security, updates, user-roles, plugin-updates]
---

This document is an overview of the required information that a developer needs to have in order to use WP-CLI in any of the WordPress projects.

## Overview

WP-CLI is a command line interface which allows the users to manage their WordPress websites from the command prompt. To upgrade and install plugins/themes, to generate backups, new posts can be published and most of the regular admin actions can be performed with a set of commands.

The beauty of the WP-CLI is that it gives us direct control over site. Anything that we do in WordPress admin dashboard can be done using WP-CLI instead.

## Installation of WP-CLI

For the most up to date instructions, go to the [official documentation](https://wp-cli.org/#installing).

## Project Setup with WP-CLI

1. Clone the repo
2. Go to json file > Make the following changes to the file:
   - wordpress version
   - db details: dbuser, host, username, password
   - site detail: site url, site title, admin: name, email, password
3. Update the plugin version as per requirement in plugin list.
4. Run command to install

```bash
wp --require=axioned.php setup
```

## Use Cases of WP-CLI

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

## Creating custom commands in WP CLI

WP-CLI supports registering any callable class, function, or closure as a command. WP_CLI::add_command() is used for both internal and third-party command registration.

The synopsis of a command defines which positional and associative arguments a command accepts. Let’s take a look at the synopsis for wp plugin install:

```bash
wp plugin install <plugin|zip|url>... [--version=<version>] [--force] [--activate] [--activate-network]
```

In this example, `<plugin|zip|url>...` is the accepted positional argument. In fact, wp plugin install accepts the same positional argument (the slug, ZIP, or URL of a plugin to install) multiple times. `[--version=<version>]` is one of the accepted associative arguments. It’s used to denote the version of the plugin to install. Notice, too, the square brackets around the argument definition; square brackets mean the argument is optional.

WP-CLI also has a series of [global arguments](https://make.wordpress.org/cli/handbook/config/) which work with all commands. For instance, including --debug means your command execution will display all PHP errors, and add extra verbosity to the WP-CLI bootstrap process.

Using similar approach we have created a script that installs wp, creates db, registers user, installs a plugin - activates and deactivates wp plugins via single command. Below is the script for your reference:

```php
function setup_command() {

  // Read the JSON file
  $json = file_get_contents('axioned.json');
  $json_data = json_decode($json, true);

  $path = $json_data['path'];
  $ver = $json_data['version'];

  $dbname = $json_data['dbname'];
  $dbuser = $json_data['dbuser'];
  $dbpass = $json_data['dbpass'];
  $dbhost = $json_data['dbhost'];

  $site_url = $json_data['site_url'];
  $title = $json_data['title'];
  $admin_name = $json_data['admin_name'];
  $admin_password = $json_data['admin_password'];
  $admin_email = $json_data['admin_email'];

  $pluginListInstall = $json_data['pluginListInstall'];
  $pluginListUninstall = $json_data['pluginListUninstall'];

  $acf_key = $json_data['acf_key'];
  $axioned_theme = $json_data['axioned_theme'];

  WP_CLI::runcommand('core download --path="'.$path.'" --version='.$ver);
  WP_CLI::runcommand('core config --dbname="'.$dbname.'" --dbuser="'.$dbuser.'" --dbpass="'.$dbpass.'" --dbhost="'.$dbhost.'" --dbprefix=wp_ --path="'.$path.'"');
  WP_CLI::runcommand('db create --path="'.$path.'"');
  WP_CLI::line("WordPress installation started...");
  WP_CLI::runcommand('core install --url="'.$site_url.'" --title="'.$title.'" --admin_name="'.$admin_name.'" --admin_password="'.$admin_password.'" --admin_email="'.$admin_email.'" --path="'.$path.'"');
  WP_CLI::runcommand('core verify-checksums --version='.$ver.' --path="'.$path.'"',['exit_error' => false]);
  WP_CLI::line("Plugin installation started...");
  install($pluginListInstall, $path, $acf_key);
  uninstall($pluginListUninstall, $path);
  WP_CLI::runcommand('plugin verify-checksums --all --path="'.$path.'"', ['exit_error' => false]);
  WP_CLI::runcommand('theme install '.$axioned_theme.' --activate --path="'.$path.'"');

  WP_CLI::success('Setup Website successfully.');
}
WP_CLI::add_command('setup', 'setup_command');

function install($pluginList, $path, $acf_key) {
    $plugCount = count($pluginList);
    $progress = \WP_CLI\Utils\make_progress_bar('Creating Posts', $plugCount);
    $options = ['exit_error' => false];

    foreach ($pluginList as $plug) {
      $name = $plug["name"];
      $status = ($plug["status"] ? $plug["status"] : "");
      $ver = ($plug["version"] ? $plug["version"] : "");

      if($name == "acf-pro") {
        if (file_put_contents('acf-pro.zip', file_get_contents("https://connect.advancedcustomfields.com/index.php?t=$ver&p=pro&a=download&k=$acf_key") ) ) {
          WP_CLI::line("ACF Pro downloaded successfully.");
          WP_CLI::runcommand("plugin install ./acf-pro.zip");
          unlink("acf-pro.zip");
          WP_CLI::runcommand("plugin activate advanced-custom-fields-pro");
        } else {
          WP_CLI::line("ACF Pro downloading failed.");
        }
        continue;
      }

      $cli = "plugin install ".$name." ".($status? " --activate ":" ").($ver? "--version=".$ver : " ").' --path="'.$path.'" ';

      WP_CLI::runcommand($cli,$options);

      $progress->tick();
    }
    $progress->finish();
    WP_CLI::success($plugCount.' Plugins Installed !!!!');
}

function uninstall($pluginList, $path) {
    $plugCount = count($pluginList);
    $progress = \WP_CLI\Utils\make_progress_bar('Creating Posts', $plugCount);

    WP_CLI::line("Exicution Started.");

    foreach ($pluginList as $plug) {
      $name = $plug["name"];

      WP_CLI::runcommand("plugin deactivate ".$name.' --path="'.$path.'" ');
      WP_CLI::runcommand("plugin uninstall ".$name.' --path="'.$path.'" ');

      $progress->tick();
    }
    $progress->finish();
    WP_CLI::success($plugCount.' Plugins Uninstalled !!!!');
}
```

## Useful commands

### Install Wordpress

```bash
wp core download # Download core wp files

wp core config --dbname=wpcli_test --dbuser=phpmyadmin --dbpass=root --dbhost=localhost --dbprefix=wp_ # Create config file, change values as necessary

wp db create

wp core install --url=http://localhost/WP-Cli_Testing/wp --title="Your Blog Title" --admin_name=admin --admin_password=admin --admin_email=admin@example.com # Install WordPress and setup an admin user, please do change the password
```

### Update WP core

```bash
wp core update --version=5.8.4 --force
```

### Reinstall WordPress Core

```bash
wp core download --skip-content --force
```

### Change home and site url

```bash
wp option update home 'https://example.com'
wp option update siteurl 'https://example.com'
```

### Working with plugins

#### List all plugins

```bash
wp plugin list
```

#### Install or uninstall a plugin

```bash
wp plugin install all-in-one-wp-migration
wp plugin delete all-in-one-wp-migration
```

Activate or deactivate a plugin

```bash
wp plugin activate hello
wp plugin deactivate hello
wp plugin install all-in-one-wp-migration # Install and activate in a single command
```

#### Install specific version

```bash
wp plugin install all-in-one-wp-migration --version=7.60
```

**3. Db Migration**
import, export and search replace

```bash
wp db import [<file name>]
wp db export
wp search-replace http://example.com http://newexample.com
```

### User Management

#### Fetching users

```bash
wp user list
wp user get admin
```

#### Create or delete user user

```bash
wp user create ndg ndg@xyz.com --role=editor --first_name=alfa --last_name=beta --user_pass=admin
wp user delete ndg
```

#### Manage user capabilities

```bash
wp user list-caps ndg
wp user add-cap ndg edit_plugins
wp user remove-cap ndg edit_plugins
```

#### Manage user role

```bash
wp user add-role ndg administrator
wp user remove-role ndg administrator
```

### Security check

Core files security checks:

```bash
wp core verify-checksums --version=$(wp core version)
```

Plugins security check:

```bash
wp plugin verify-checksums --all
```

## References

- [Official website](https://wp-cli.org/)
- [Official CLI Handbook](https://make.wordpress.org/cli/handbook/)
- [WP CLI Commands](https://make.wordpress.org/cli/handbook/guides/commands-cookbook/)
- [Official Troubleshooting Guide](https://make.wordpress.org/cli/handbook/guides/troubleshooting/)

**References:**
