---
position: 1
title: WordPress Coding Standards
---

## Overview

The purpose of the WordPress Coding Standards is to create a baseline for collaboration and review within various aspects of the WordPress open source project and community, from core code to themes to plugins.

## What is PHP CodeSniffer(PHPCS)?

PHP Code Sniffer (PHPCS) is a package for syntax checking. It can check code against defined rules covering anything from whitespace through doc comments to variable naming conventions and beyond.

## Prerequisite

### Composer

For adding WPCS the Composer is required *( One time Installation )*

  - First check if composer is installed in your system by using this command: `composer`
  - For Installing default composer version use this command: `sudo apt install composer`
  - Or check the Composer installation ref [link](https://getcomposer.org/download/) OR refer this [Doc](https://docs.google.com/document/d/1zZfmWng-0qMgpyyaSrXDt5SkkPRCFabU4JLvdELKqqE/edit).

### WPCS Repository Details

  - WPCS clone command `git clone -b master  https://github.com/WordPress/WordPress-Coding-Standards.git wpcs`
  - WPCS GIT [Link](https://github.com/WordPress/WordPress-Coding-Standards)

### PHP CodeSniffer Details

  - To globally install PHP_CodeSniffer use this below command: 
    - `composer global require "squizlabs/php_codesniffer=*"`
  - Other ways to install code sniffer can be found [here](https://github.com/squizlabs/PHP_CodeSniffer#installation).

## Configure PHPCS for WPCS

  1. Getting Composer ***bin*** directory
    - To get composer bin directory use this command `composer global config bin-dir --absolute`
  2. Updating Environment variable.
    - Open Terminal and add `echo $PATH`
    - Use this command  `nano ~/.bashrc` ( To Edit Environment variable in Ubuntu ).
    - On the 2nd last line of the file add the composer bin directory as mentioned below
      ```html
      eg: export PATH="<mark>/home/prdxn122/.composer/vendor/bin</mark>:$PATH"
      ```
      - Add your composer bin directory instead of yellow marked directory
  3. Saving the file
    - Ctrl + X ( For exiting editor )
    - Now it will ask for saving the changes press y and then enter
  4. For check if your composer bin path is added successfully run this command `echo $PATH`
  5. Now go to your WPCS cloned folder directory
    - Open the terminal and run this command `pwd`. This command will show the path of your directory
    - After getting the directory path, run this command `phpcs --config-set installed_paths {Your-WPCS-Path}`
    - After configuring phpcs for WP run this command: `phpcs -i` and check if you are getting the output as mentioned below:
      - *The installed coding standards are `MySource, PEAR, PSR1, PSR2, PSR12, Squiz, Zend, WordPress, WordPress-Core, WordPress-Docs and WordPress-Extra`*
  6. Check if PHPCS is working as excepted use this command on your theme directory `phpcs --standard="WordPress" header.php`

        ```
        FILE: /var/www/html/folder/project-name/wp-content/themes/themeName/header.php

        -------------------------------------------------------

        FOUND 35 ERRORS AND 157 WARNINGS AFFECTING 1997 LINES

        -------------------------------------------------------
        4 | WARNING | Found precision alignment of 1 spaces.

        9 | ERROR   | Missing file doc comment

        9 | ERROR   | All output should be run through an escaping function

        ``` 

  7. To check all phpcs flags use this Command: `phpcs –help`

 ## Dynamically Run Phpcs and Phpcbf command on saving the php file

  1. Install [Run on Save](https://marketplace.visualstudio.com/items?itemName=emeraldwalk.RunOnSave) extension by ***emeraldwalk*** on Vscode
  2. As Vscode setting is displayed in UI format we have to change it to JSON format
    - Go To -` Vscode -> setting -> Workbench - setting Editor -> And change the Editor option to JSON`

      ```json
        "emeraldwalk.runonsave": {
            "commands": [
                {
                    "match": "\\.php$",
                    "cmd": "phpcbf --standard='WordPress' ${file}",
                    "cmd": "phpcs --standard='WordPress' ${file}",
                },
                {
                  "match": "\\.php$",
                  "cmd": "rm ${workspaceFolder}/errors/${fileBasenameNoExt}",
                  "cmd": "phpcs --standard='WordPress' -a ${file} > ${workspaceFolder}/errors/${fileBasenameNoExt}.txt"
                }
            ]
          }
      ```

      :::tip How to check PHPCS error
      *After adding this restart vscode now on saving the .php file it will run added phpcs command. Now it will start throwing error related to wordpress.*
      *For checking error in vscode go to `Terminal -> output -> on right hand side there will be a dropdown open it and select Run on Save` You will get the error here.*
      :::
## Validating WP Functions

  1. Add [PHP Intelephense](https://marketplace.visualstudio.com/items?itemName=bmewburn.vscode-intelephense-client) Vscode extension by *Ben Mewburn*
  2. For enabling this extension for Wordpress go to <mark>Vscode -> setting -> Extension -> Intelephense -> Intelephense Stubs</mark> and click on add item and add ***Wordpress***.
  3. As this function are not wordpress specific. It will give error for acf methods like get_field, have_rows.
  4. For removing the above error clone this [acf-pro-stubs](https://github.com/php-stubs/acf-pro-stubs) in your document directory
  5. Go to Vscode setting in JSON format add the acf-pro-stubs directory for PHP Intelephense

       ```array
        "intelephense.stubs": [ 
          “WordPress”,
          ”/var/www/html/stubs/acf-pro-stubs”,
        ]
        ```
  - Now the ACF methods error will be gone.

## Important Extension for Development

  - Using [acf-snippets](https://marketplace.visualstudio.com/items?itemName=anthonydiametrix.ACF-Snippet) vscode extension by *Anthony Hubble*
    1. field:if / field:ifelse
        ```php
        <?php if ( get_field('field_name') ) : ?>
        <?php endif; ?>
        ```
    2. field:sub
        ```php
          <?php if ( get_sub_field('field_name') ) : ?>
            <?php echo get_sub_field('field_name'); ?>
          <?php endif; ?>
        ```
    3. field:image
        ```php
          <?php if ( get_field('field_name') ) : ?>
            <img src="<?php the_field('field_name'); ?>" alt="<?php the_field(''); ?>">
          <?php endif; ?>
        ```
    4. field:flex *(Flexible Content Field)*
        ```php
          <?php if ( have_rows( 'field_name' ) ) : ?>
            <?php while ( have_rows('field_name' ) ) : the_row();
              if ( get_row_layout() == 'layout_field' ) : ?>
                <div class="class">
                  <?php the_sub_field( 'field_name' ); ?>
                </div>
              <?php endif; ?>
            <?php endwhile; ?>
          <?php endif; ?>
        ```
    5. field:relationship *(Relationship Field)*
        ```php
          <?php $posts = get_field('field_name'); ?>
          <?php if ( $posts ): ?>
            <ul>
              <?php foreach ( $posts as $post ) : setup_postdata( $post ); ?>
                <li>
                  <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                </li>
              <?php endforeach; wp_reset_postdata(); ?>
            </ul>
          <?php endif; ?>
        ```
    6. For more snippets checkout this [doc](https://docs.google.com/document/d/1CTLZ6f2agwWT4IiI7ZTEoQ0OrrZBDxDZxCHltRZrwG8/edit).
  - Use [WordPress & ClassicPress snippets plus autocompletions](https://marketplace.visualstudio.com/items?itemName=laurencebahiirwa.classicpress-snippets) by *Laurence Bahiirwa*: For Wordpress Method autocompletions

## Fixing Minor formatting issues

1. For fixing Some issues in a file use this command `phpcbf --standard="WordPress"  header.php` *( This command will format your WP php file )*
2. To Fix some minor issue in all php file in a project use this command: `phpcbf -p -s -v -n . --standard=WordPress --extensions=php`

## Reference Link

1. https://www.youtube.com/watch?v=pW9BzPUGYw4
2. https://www.youtube.com/c/GregRickaby
3. https://wpdevdesign.com/wp-coding-standards-in-vscode/
4. https://github.com/WordPress/WordPress-Coding-Standards#introduction
5. Code_sniffer: https://github.com/squizlabs/PHP_CodeSniffer
