---
id: javascript-checklist
title: Javascript Code Review Checklist
sidebar_label: Code Review Checklist
sidebar_position: 2
tags: [Javascript, Javascript checklist, JS, JS checklist]
---

# Checklist Pointers

Sr No. | Check |
:----: | ----- |
1 |	Choose easy to understand and short names for variables and functions.
2 |	Try using closures and the module pattern.
3 |	Use linting to verify your code.
4 |	Comment what you consider needed (`/* */` is much safer to use because it doesn’t cause errors when the line break is removed.).
5 |	Use Shortcut Notations.
6 |	Write smaller, generic helper functions that fulfill one specific task rather than catch-all methods.
7 |	Avoid heavy nesting.
8 |	Keep computation-heavy code outside of loops.
9 |	Keep DOM Access to a Minimum.
10 |	Don’t trust that data reaches your function is of the right format.Test with typeof and then do something with it.
11 |	Don’t expect elements in the DOM to be available.Test for them and that they indeed are what you expect them to be before altering them.
12 |	Never ever use JavaScript to protect something.
13 |	Use single quotation marks for string declarations.
14 |	Keep indentation as 2.
15 |	No js inline code has to be present in html.
16 |	Collate, minify and optimize your code in a build process.
17 |	JavaScript files are loaded asynchronously using async or deferred using defer attribute.
19 |	Use of if, if else, else if, switch should be used properly. Avoid too many nested if else statements, instead go for switch-case.
20 |	const and let should be used based on their definition.
21 |	Functions should hardly ever be 20 - 40 lines long.
18 |	Add parameter description for every function parameter as a part of comments.
22 |	Proper use of HOF (Higher order functions.).
23 |	Every  method/function should have a try-catch block to avoid run time errors.
24 |	Use loggers in the catch block to get exact error.
25 |	Verify if business logic is proper and written efficiently.
26 |	Function casing. 
28 |	Using spread operator.
29 |	Be consistent in your usage of arrow function.
30 |	Use destructuring assignment for arrays and objects.
27 |	Variable casing.
31 |	Use Promises or Asyns/Await. Rejection is handled.
32 |	No syntax/runtime errors and warnings in the code.
33 |	No deprecated functions in the code.
34 |	Check that each function is doing only a single thing. 
35 |	No magic numbers. Put all such numbers as a constant. 
36 |	Make sure recurssive function don't end up in infinite loop.
37 |	Avoid inline styling through JS use classes instead.
38 |	make sure the whole script wrapped inside document ready.
39 |	Use meaningful names for variables and function.
40 |	Add proper comenting.
41 |	Try using deffer while loading Scripts to avoid render blocking resources issue in the performance.
42 |	Make sure ther is no message/error prrsent in the console.
43 |	Please make sure to use condition while using offset().top property if the offset is present then only use top or else it will throw an error in the console.
44 |	Form/Input validation is not just to add required attribute also validate the input via JS to make sure expected input is entered by user.

:::tip JS Checklist
JS Checklist reference link can be found [**here**](https://docs.google.com/spreadsheets/d/1kbpSVE_ysY8Is5qvuWfCDTTTMp_Wtt5js7FBZzqGODk/edit#gid=0).
:::