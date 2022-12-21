"use strict";(self.webpackChunkhandbook=self.webpackChunkhandbook||[]).push([[8603],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(n),h=a,f=c["".concat(p,".").concat(h)]||c[h]||m[h]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1964:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={position:1,id:"WPCS",title:"WordPress Coding Standards",sidebar_label:"WordPress",tags:["wpcs","code sniffer","acf snippets","coding standards","phpcs","phpcbf","wordpress autocompletions","error reporting","wordpress sniffer"]},i=void 0,s={unversionedId:"processes/Coding standards/WPCS",id:"processes/Coding standards/WPCS",title:"WordPress Coding Standards",description:"Overview",source:"@site/docs/processes/Coding standards/wordpress.md",sourceDirName:"processes/Coding standards",slug:"/processes/Coding standards/WPCS",permalink:"/handbook/docs/processes/Coding standards/WPCS",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/processes/Coding standards/wordpress.md",tags:[{label:"wpcs",permalink:"/handbook/docs/tags/wpcs"},{label:"code sniffer",permalink:"/handbook/docs/tags/code-sniffer"},{label:"acf snippets",permalink:"/handbook/docs/tags/acf-snippets"},{label:"coding standards",permalink:"/handbook/docs/tags/coding-standards"},{label:"phpcs",permalink:"/handbook/docs/tags/phpcs"},{label:"phpcbf",permalink:"/handbook/docs/tags/phpcbf"},{label:"wordpress autocompletions",permalink:"/handbook/docs/tags/wordpress-autocompletions"},{label:"error reporting",permalink:"/handbook/docs/tags/error-reporting"},{label:"wordpress sniffer",permalink:"/handbook/docs/tags/wordpress-sniffer"}],version:"current",frontMatter:{position:1,id:"WPCS",title:"WordPress Coding Standards",sidebar_label:"WordPress",tags:["wpcs","code sniffer","acf snippets","coding standards","phpcs","phpcbf","wordpress autocompletions","error reporting","wordpress sniffer"]},sidebar:"tutorialSidebar",previous:{title:"Sentry.io",permalink:"/handbook/docs/processes/observability/sentry"},next:{title:"axioned-hosted",permalink:"/handbook/docs/processes/Source control and Promotion/axioned-hosted"}},p={},l=[{value:"Overview",id:"overview",level:2},{value:"What is PHP CodeSniffer(PHPCS)?",id:"what-is-php-codesnifferphpcs",level:2},{value:"Prerequisite",id:"prerequisite",level:2},{value:"Composer",id:"composer",level:3},{value:"WPCS Repository Details",id:"wpcs-repository-details",level:3},{value:"PHP CodeSniffer Details",id:"php-codesniffer-details",level:3},{value:"Configure PHPCS for WPCS",id:"configure-phpcs-for-wpcs",level:2},{value:"Validating WP Functions",id:"validating-wp-functions",level:2},{value:"Important Extension for Development",id:"important-extension-for-development",level:2},{value:"Fixing Minor formatting issues",id:"fixing-minor-formatting-issues",level:2},{value:"Reference Link",id:"reference-link",level:2}],d={toc:l};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The purpose of the WordPress Coding Standards is to create a baseline for collaboration and review within various aspects of the WordPress open source project and community, from core code to themes to plugins."),(0,a.kt)("h2",{id:"what-is-php-codesnifferphpcs"},"What is PHP CodeSniffer(PHPCS)?"),(0,a.kt)("p",null,"PHP Code Sniffer (PHPCS) is a package for syntax checking. It can check code against defined rules covering anything from whitespace through doc comments to variable naming conventions and beyond."),(0,a.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,a.kt)("h3",{id:"composer"},"Composer"),(0,a.kt)("p",null,"For adding WPCS the Composer is required ",(0,a.kt)("em",{parentName:"p"},"( One time Installation )")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"First check if composer is installed in your system by using this command: ",(0,a.kt)("inlineCode",{parentName:"li"},"composer")),(0,a.kt)("li",{parentName:"ul"},"For Installing default composer version use this command: ",(0,a.kt)("inlineCode",{parentName:"li"},"sudo apt install composer")),(0,a.kt)("li",{parentName:"ul"},"Or check the Composer installation ref ",(0,a.kt)("a",{parentName:"li",href:"https://getcomposer.org/download/"},"link")," OR refer this ",(0,a.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/1zZfmWng-0qMgpyyaSrXDt5SkkPRCFabU4JLvdELKqqE/edit"},"Doc"),".")),(0,a.kt)("h3",{id:"wpcs-repository-details"},"WPCS Repository Details"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"WPCS clone command ",(0,a.kt)("inlineCode",{parentName:"li"},"git clone -b master  https://github.com/WordPress/WordPress-Coding-Standards.git wpcs")),(0,a.kt)("li",{parentName:"ul"},"WPCS GIT ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/WordPress/WordPress-Coding-Standards"},"Link"))),(0,a.kt)("h3",{id:"php-codesniffer-details"},"PHP CodeSniffer Details"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To globally install PHP_CodeSniffer use this below command: ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'composer global require "squizlabs/php_codesniffer=*"')))),(0,a.kt)("li",{parentName:"ul"},"Other ways to install code sniffer can be found ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/squizlabs/PHP_CodeSniffer#installation"},"here"),".")),(0,a.kt)("h2",{id:"configure-phpcs-for-wpcs"},"Configure PHPCS for WPCS"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Getting Composer ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"bin"))," directory")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- To get composer bin directory use this command `composer global config bin-dir --absolute`\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Updating Environment variable.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'- Open Terminal and add `echo $PATH`\n- Use this command  `nano ~/.bashrc` ( To Edit Environment variable in Ubuntu ).\n- On the 2nd last line of the file add the composer bin directory as mentioned below\n  ```html\n  eg: export PATH="<mark>/home/prdxn122/.composer/vendor/bin</mark>:$PATH"\n  ```\n  - Add your composer bin directory instead of yellow marked directory\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Saving the file")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- Ctrl + X ( For exiting editor )\n- Now it will ask for saving the changes press y and then enter\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"For check if your composer bin path is added successfully run this command ",(0,a.kt)("inlineCode",{parentName:"li"},"echo $PATH")),(0,a.kt)("li",{parentName:"ol"},"Now go to your WPCS cloned folder directory")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- Open the terminal and run this command `pwd`. This command will show the path of your directory\n- After getting the directory path, run this command `phpcs --config-set installed_paths {Your-WPCS-Path}`\n- After configuring phpcs for WP run this command: `phpcs -i` and check if you are getting the output as mentioned below:\n  - *The installed coding standards are `MySource, PEAR, PSR1, PSR2, PSR12, Squiz, Zend, WordPress, WordPress-Core, WordPress-Docs and WordPress-Extra`*\n")),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Check if PHPCS is working as excepted use this command on your theme directory ",(0,a.kt)("inlineCode",{parentName:"p"},'phpcs --standard="WordPress" header.php')),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"FILE: /var/www/html/folder/project-name/wp-content/themes/themeName/header.php\n\n-------------------------------------------------------\n\nFOUND 35 ERRORS AND 157 WARNINGS AFFECTING 1997 LINES\n\n-------------------------------------------------------\n4 | WARNING | Found precision alignment of 1 spaces.\n\n9 | ERROR   | Missing file doc comment\n\n9 | ERROR   | All output should be run through an escaping function\n\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"To check all phpcs flags use this Command: ",(0,a.kt)("inlineCode",{parentName:"p"},"phpcs \u2013help")),(0,a.kt)("h2",{parentName:"li",id:"dynamically-run-phpcs-and-phpcbf-command-on-saving-the-php-file"},"Dynamically Run Phpcs and Phpcbf command on saving the php file")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install ",(0,a.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=emeraldwalk.RunOnSave"},"Run on Save")," extension by ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"emeraldwalk"))," on Vscode")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"As Vscode setting is displayed in UI format we have to change it to JSON format"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'- Go To -` Vscode -> setting -> Workbench - setting Editor -> And change the Editor option to JSON`\n\n  ```json\n    "emeraldwalk.runonsave": {\n        "commands": [\n            {\n                "match": "\\\\.php$",\n                "cmd": "phpcbf --standard=\'WordPress\' ${file}",\n                "cmd": "phpcs --standard=\'WordPress\' ${file}",\n            },\n            {\n              "match": "\\\\.php$",\n              "cmd": "rm ${workspaceFolder}/errors/${fileBasenameNoExt}",\n              "cmd": "phpcs --standard=\'WordPress\' -a ${file} > ${workspaceFolder}/errors/${fileBasenameNoExt}.txt"\n            }\n        ]\n      }\n  ```\n\n  :::tip How to check PHPCS error\n  1. *After adding this restart vscode now on saving the .php file it will run added phpcs command. Now it will start throwing error related to WordPress.*\n  2. *For checking error in vscode go to `Terminal -> output -> on right hand side there will be a dropdown open it and select Run on Save` You will get the error here.*\n  3. *As we have set the reporting type to `.txt` format. For changing reporting type to `CSV, JSON, JUnit, etc`. Refer this git [reproting](https://github.com/squizlabs/PHP_CodeSniffer/wiki/Reporting) repository*\n  :::\n')),(0,a.kt)("h2",{id:"validating-wp-functions"},"Validating WP Functions"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add ",(0,a.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=bmewburn.vscode-intelephense-client"},"PHP Intelephense")," Vscode extension by ",(0,a.kt)("em",{parentName:"p"},"Ben Mewburn"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"For enabling this extension for WordPress go to ",(0,a.kt)("mark",null,"Vscode -> setting -> Extension -> Intelephense -> Intelephense Stubs")," and click on add item and add ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"WordPress")),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"As this function are not WordPress specific. It will give error for acf methods like get_field, have_rows.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"For removing the above error clone this ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/php-stubs/acf-pro-stubs"},"acf-pro-stubs")," in your document directory")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to Vscode setting in JSON format add the acf-pro-stubs directory for PHP Intelephense"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-array"},' "intelephense.stubs": [ \n   \u201cWordPress\u201d,\n   \u201d/var/www/html/stubs/acf-pro-stubs\u201d,\n ]\n')))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Now the ACF methods error will be gone.")),(0,a.kt)("h2",{id:"important-extension-for-development"},"Important Extension for Development"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Using ",(0,a.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=anthonydiametrix.ACF-Snippet"},"acf-snippets")," vscode extension by ",(0,a.kt)("em",{parentName:"li"},"Anthony Hubble")),(0,a.kt)("li",{parentName:"ul"},"Use below ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"emmet/snippets"))," for generating the acf code",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Eg: type ",(0,a.kt)("inlineCode",{parentName:"li"},"field:ifelse")," snippet and press enter")),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"field:ifelse",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php if ( get_field('field_name') ) : ?>\n<?php else: ?>\n<?php endif; ?>\n"))),(0,a.kt)("li",{parentName:"ol"},"field:if",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php if ( get_field('field_name') ) : ?>\n<?php endif; ?>\n"))),(0,a.kt)("li",{parentName:"ol"},"field:sub",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-php"},"  <?php if ( get_sub_field('field_name') ) : ?>\n    <?php echo get_sub_field('field_name'); ?>\n  <?php endif; ?>\n"))),(0,a.kt)("li",{parentName:"ol"},"field:image",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-php"},"  <?php if ( get_field('field_name') ) : ?>\n    <img src=\"<?php the_field('field_name'); ?>\" alt=\"<?php the_field(''); ?>\">\n  <?php endif; ?>\n"))),(0,a.kt)("li",{parentName:"ol"},"field:flex ",(0,a.kt)("em",{parentName:"li"},"(Flexible Content Field)"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-php"},"  <?php if ( have_rows( 'field_name' ) ) : ?>\n    <?php while ( have_rows('field_name' ) ) : the_row();\n      if ( get_row_layout() == 'layout_field' ) : ?>\n        <div class=\"class\">\n          <?php the_sub_field( 'field_name' ); ?>\n        </div>\n      <?php endif; ?>\n    <?php endwhile; ?>\n  <?php endif; ?>\n"))),(0,a.kt)("li",{parentName:"ol"},"field:relationship ",(0,a.kt)("em",{parentName:"li"},"(Relationship Field)"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-php"},"  <?php $posts = get_field('field_name'); ?>\n  <?php if ( $posts ): ?>\n    <ul>\n      <?php foreach ( $posts as $post ) : setup_postdata( $post ); ?>\n        <li>\n          <a href=\"<?php the_permalink(); ?>\"><?php the_title(); ?></a>\n        </li>\n      <?php endforeach; wp_reset_postdata(); ?>\n    </ul>\n  <?php endif; ?>\n"))),(0,a.kt)("li",{parentName:"ol"},"For more snippets checkout this ",(0,a.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/1CTLZ6f2agwWT4IiI7ZTEoQ0OrrZBDxDZxCHltRZrwG8/edit"},"link"),"."))),(0,a.kt)("li",{parentName:"ul"},"Use ",(0,a.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=laurencebahiirwa.classicpress-snippets"},"WordPress & ClassicPress snippets plus autocompletions")," by ",(0,a.kt)("em",{parentName:"li"},"Laurence Bahiirwa"),": For WordPress Method autocompletions")),(0,a.kt)("h2",{id:"fixing-minor-formatting-issues"},"Fixing Minor formatting issues"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"For fixing Some issues in a file use this command ",(0,a.kt)("inlineCode",{parentName:"li"},'phpcbf --standard="WordPress"  header.php')," ",(0,a.kt)("em",{parentName:"li"},"( This command will format your WP php file )")),(0,a.kt)("li",{parentName:"ol"},"To Fix some minor issue in all php file in a project use this command: ",(0,a.kt)("inlineCode",{parentName:"li"},"phpcbf -p -s -v -n . --standard=WordPress --extensions=php"))),(0,a.kt)("h2",{id:"reference-link"},"Reference Link"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"WPCS Installation and configuration ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/playlist?list=PLa_Xqm9JWuydw6f1yBSlrkWQZHJA3P9jA"},"https://www.youtube.com/playlist?list=PLa_Xqm9JWuydw6f1yBSlrkWQZHJA3P9jA")," ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"( Recommended )"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=pW9BzPUGYw4"},"https://www.youtube.com/watch?v=pW9BzPUGYw4")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://wpdevdesign.com/wp-coding-standards-in-vscode/"},"https://wpdevdesign.com/wp-coding-standards-in-vscode/"))))),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/WordPress/WordPress-Coding-Standards"},"WPCS Repository")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/squizlabs/PHP_CodeSniffer"},"Code Sniffer")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/squizlabs/PHP_CodeSniffer/wiki/Reporting"},"WPCS Reporting")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/46704783/storing-results-of-phpcs-fixer-into-a-file"},"Storing Reporting into a file")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://asphaltthemes.com/wordpress-visual-studio-code-extensions/"},"Important Wordpress Extensions")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/php-stubs"},"Stubs Repository")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/squizlabs/PHP_CodeSniffer/wiki/Fixing-Errors-Automatically"},"Phpcbf"))))}m.isMDXComponent=!0}}]);