---
id: php-checklist
title: PHP Code Review Checklist
description: PHP code review checklist for clean code.
sidebar:
  label: Code Review Checklist
  order: 2
tags: [PHP code review, PHP checklist, PHP tags, control structures, method arguments]
---

## Checklist

Sr No. | Check | Description |
:-: | --- | ---  
1 | **Backend Validation** | Does the validation present in .php file?
2 | **Site Scripting** | Does developer use htmlentities() to prevent their site from cross scripting? <br /><br />If you use the less than (<) or greater than (>) signs in your text, the browser might mix them with tags.<br />Character entities are used to display reserved characters in HTML.<br /><br />For Example -<br />```$company = htmlentities(trim($_POST['company']), ENT_COMPAT);```<br />```$services = htmlentities(trim($_POST['services']), ENT_COMPAT);```<br /><br /> How to check htmlentities() developer has used or not?<ol><li>Write ```<script>``` for alert box in form filed.</li><li>Submit the form.</li><li>Submit the form.</li></ol> If Alert appear in Backend then it is an issue.<br /><br />eg. Use below code:<br />```<script> function myFunction(){ alert("Hello World!"); } </script>```
3 | **Files MUST use only <?php and <?= tags.** | Does the developer use <?php and <?= tags only?
4 | **Class names MUST be declared in “StudlyCaps”.** | For Example -<br />```class EmployeeData {}```
5 | **Class constants MUST be declared in all upper-case with underscore separators.** | For Example -<br />```const VERSION = '1.0';```<br />```const MATH_PI = '3.14';```
6 | **Method names MUST be declared in “camelCase”.** | ```public function employeeReadData() {}```
7 | **Avoid fopen wrappers/reliance on fopen wrappers (PHP/SQL)** |
8 | **Avoid unsanitized variables (PHP/SQL)** |
9 | **Ensure all Functions are outside of Loops**
10 | **Create classes out of functions where appropriate**
11 | **Implement inheritance**
12 | **PHP Tags**
12.1 | PHP code MUST use the long <?php ?> tags or the short-echo <?= ?> tags. It MUST NOT use the other tag variations.
13 | **Files**
13.1 | All PHP files MUST use the Unix LF (line feed) line ending.
13.2 | All PHP files MUST end with a single blank line.
13.3 | The closing ?> tag MUST be omitted from files containing only PHP.
14 | **Lines**
14.1 | There MUST NOT be a hard limit on line length.
14.2 | The soft limit on line length MUST be 120 characters; automated style checkers MUST warn but MUST NOT error at the soft limit.
14.3 | Lines SHOULD NOT be longer than 80 characters; lines longer than that SHOULD be split into multiple subsequent lines of no more than 80 characters each.
14.4 | There MUST NOT be trailing whitespace at the end of non-blank lines.
14.5 | Blank lines MAY be added to improve readability and to indicate related blocks of code.
14.6 | There MUST NOT be more than one statement per line.
15 |  **Indentation**
15.1 | Code MUST use an indent of 4 spaces for each indent level, and MUST NOT use tabs for indenting.
16 | **Namespace and Use Declaration**
16.1 | Namespace Declaration | If present, is there one blank line after the namespace declaration? Are all the use declarations written after the namespace declaration?
16.2 | Use Declaration | There MUST be one use keyword per declaration. 
16.3 | There MUST be one blank line after the all use block. | For example:<br />```<?php namespace Vendor\Package;use FooClass;use BarClass as Bar;use OtherVendor\OtherPackage\BazClass;```
17 | **Extends and Implements**
17.1 | Declaration | The extends and implements keywords MUST be declared on the same line as the class name.
17.2 | Class Declaration | The opening brace for the class MUST go on its own line; the closing brace for the class MUST go on the next line after the body.
18 | **Properties**
18.1 | Visibility MUST be declared on all properties. | Are the properties defined by prefixing the declaration with the keywords public, protected or private?
18.2 | Avoid var keyword for property | Has var keyword used to declare a property?
18.3 | Avoid more than one property per statement | Are there more than one property declared per statement?
18.4 | Property name | Property names SHOULD NOT be prefixed with a single underscore to indicate protected or private visibility.
18.5 | A property declaration looks like the following. | Example:<br />```<?php namespace Vendor\Package; class ClassName { public $foo = null; }```
19 | **Methods**
19.1 | Visibility declaration on all methods. | Are the methods defined by prefixing the declaration with the keywords public, protected or private?<br />A method declaration looks like the following. Note the placement of parentheses, commas, spaces, and braces:<br /><br />Example:<br />```<?php namespace Vendor\Package; class   ClassName { public function fooBarBaz($arg1, &$arg2, $arg3 = []) { // method body } }```
19.2 | Method names | Method names SHOULD NOT be prefixed with a single underscore to indicate protected or private visibility.
19.3 | Method Declaration | Method names MUST NOT be declared with a space after the method name. The opening brace MUST go on its own line, and the closing brace MUST go on the next line following the body.
19.4 | Method parenthesis | There MUST NOT be a space after the opening parenthesis, and there MUST NOT be a space before the closing parenthesis.
20 | **Method Arguments**
20.1 | Arguments Declaration | In the argument list, there MUST NOT be a space before each comma, and there MUST be one space after each comma.
20.2 | Arguments with default value | Method arguments with default values MUST go at the end of the argument list.<br />Example:<br />```<?php namespace Vendor\Package; class ClassName { public function foo($arg1, &$arg2, $arg3 = []) { // method body } }```
21 | **Abstract, final, and static**
21.1 | When present, the abstract and final declarations MUST precede the visibility declaration. | Are the they defined by prefixing the declaration with the keywords public, protected or private?
21.2 | When present, the static declaration MUST come after the visibility declaration. | Example:<br />```<?php namespace Vendor\Package; abstract class ClassName { protected static $foo; abstract protected function zim(); final public static function bar() { // method body } }```
22 | **Method and Function Calls**
22.1 | When making a method or function call, there MUST NOT be a space between the method or function name and the opening parenthesis, there MUST NOT be a space after the opening parenthesis, and there MUST NOT be a space before the closing parenthesis. In the argument list, there MUST NOT be a space before each comma, and there MUST be one space after each comma. | Example:<br />```<?php bar(); $foo->bar($arg1); Foo::bar($arg2, $arg3);```<br />Argument lists MAY be split across multiple lines, where each subsequent line is indented once. When doing so, the first item in the list MUST be on the next line, and there MUST be only one argument per line.<br />```<?php $foo->bar( $longArgument, $longerArgument, $muchLongerArgument );```
23 | **Control Structures**
23.1 | There MUST be one space after the control structure keyword
23.2 | There MUST NOT be a space after the opening parenthesis
23.3 | There MUST NOT be a space before the closing parenthesis
23.4 | There MUST be one space between the closing parenthesis and the opening brace
23.5 | The structure body MUST be indented once
23.6 | The closing brace MUST be on the next line after the body
24 | **Closures**
24.1 | Closures MUST be declared with a space after the function keyword, and a space before and after the use keyword. | A closure declaration looks like the following. Note the placement of parentheses, commas, spaces, and braces:<br />```<?php $closureWithArgs = function ($arg1, $arg2) { // body }; $closureWithArgsAndVars = function ($arg1, $arg2) use ($var1, $var2) { // body };```
24.2 | The opening brace MUST go on the same line, and the closing brace MUST go on the next line following the body.
24.3 | There MUST NOT be a space after the opening parenthesis of the argument list or variable list, and there MUST NOT be a space before the closing parenthesis of the argument list or variable list.
24.4 | In the argument list and variable list, there MUST NOT be a space before each comma, and there MUST be one space after each comma.
24.5 | Closure arguments with default values MUST go at the end of the argument list. | A closure declaration looks like the following. Note the placement of parentheses, commas, spaces, and braces:<br />```<?php $closureWithArgs = function ($arg1, $arg2) { // body }; $closureWithArgsAndVars = function ($arg1, $arg2) use ($var1, $var2) { // body };```
24.6 | Argument lists and variable lists MAY be split across multiple lines, where each subsequent line is indented once. When doing so, the first item in the list MUST be on the next line, and there MUST be only one argument or variable per line.<br />When the ending list (whether or arguments or variables) is split across multiple lines, the closing parenthesis and opening brace MUST be placed together on their own line with one space between them. | The following are examples of closures with and without argument lists and variable lists split across multiple lines.<br />```<?php $longArgs_noVars = function ( $longArgument, $longerArgument, $muchLongerArgument ) { // body }; $noArgs_longVars = function () use ( $longVar1, $longerVar2, $muchLongerVar3 ) { // body }; $longArgs_longVars = function ( $longArgument, $longerArgument, $muchLongerArgument ) use ( $longVar1, $longerVar2, $muchLongerVar3 ) { // body }; $longArgs_shortVars = function ( $longArgument, $longerArgument, $muchLongerArgument ) use ($var1) { // body }; $shortArgs_longVars = function ($arg) use ( $longVar1, $longerVar2, $muchLongerVar3 ) { // body };```<br />Note that the formatting rules also apply when the closure is used directly in a function or method call as an argument.<br />```<?php $foo->bar( $arg1, function ($arg2) use ($var1) { // body }, $arg3 );```
25 | **Including Code**
25.1 | Anywhere you are unconditionally including a class file, use require_once. Anywhere you are conditionally including a class file (for example, factory methods), use include_once. Either of these will ensure that class files are included only once. They share the same file list, so you don't need to worry about mixing them - a file included with require_once will not be included again by include_once.
26 | **Naming Conventions**
27 | **Global Variables and Functions**
27.1 | If your package needs to define global variables, their names should start with a single underscore followed by the package name and another underscore. For example, the PEAR package uses a global variable called $_PEAR_destructor_object_list.
27.2 | Global functions should be named using the "studly caps" style (also referred to as "bumpy case" or "camel caps"). In addition, they should have the package name as a prefix, to avoid name collisions between packages. The initial letter of the name (after the prefix) is lowercase, and each letter that starts a new "word" is capitalized. | An example:<br />```XML_RPC_serializeData()```
28 | **Classes**
28.1 | Classes should be given descriptive names. Avoid using abbreviations where possible. Class names should always begin with an uppercase letter. The PEAR class hierarchy is also reflected in the class name, each level of the hierarchy separated with a single underscore. | Examples of good class names are:<br />Log<br />Net_Gear<br />HTML_Upload_Error
29 | **Class Variables and Methods**
29.1 | Class variables (a.k.a properties) and methods should be named using the "studly caps" style (also referred to as "bumpy case" or "camel caps"). | Some examples (these would be ""public"" members):<br />Example:<br />```$counter, connect()```<br /><br /> Private class members are preceded by a single underscore.<br />Example:<br />```_sort(), _initTree(), $_status```<br /><br /> Protected class members are not preceded by a single underscore.<br />Example:<br />```protected $somevar, protected function initTree()```
30 | **Constants**
30.1 | Constants should always be all-uppercase, with underscores to separate words. Prefix constant names with the uppercase name of the class/package they are used in. | Example: DB_DATASOURCENAME
31 | **Arrays**
31.1 | Assignments in arrays may be aligned. When splitting array definitions onto several lines, the last value may also have a trailing comma. | This is valid PHP syntax and helps to keep code diffs minimal:<br/>```<?php $some_array = array( 'foo'  => 'bar', 'spam' => 'ham', );?>```
32 | **Strings**
32.1 | In general, we use single quotes to enclose literal strings. | Example:<br />```$vision = 'Inspiring people to share';```
32.2 | If you'd like to insert values from variables, concatenate strings. | Example:<br />```$message = 'Hey ' . $name . ', you look ' . $appearance . ' today!';```
32.3 | A space must be inserted before and after the dot for better readability. | Example:<br />```$vision = 'Inspiring people ' . 'to share.';```
32.4 | You may break a string into multiple lines if you use the dot operator. You'll have to indent each following line to mark them as part of the value assignment. | Example:<br />```$vision = 'Inspiring' . people ' . to ' . share';```

:::tip[PHP Checklist Google Sheet]
PHP Checklist reference link can be found [**here**](https://docs.google.com/spreadsheets/d/1kbpSVE_ysY8Is5qvuWfCDTTTMp_Wtt5js7FBZzqGODk/edit#gid=216983308).
:::