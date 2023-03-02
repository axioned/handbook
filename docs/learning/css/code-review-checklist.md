---
id: css-checklist
title: CSS Code Review Checklist
sidebar_label: Code Review Checklist
sidebar_position: 2
tags: [CSS, CSS checklist]
---

# Checklist Pointers

Sr No. | Check |
:----: | ----- |
1 |	The website is using responsive web design.
2 |	If IDs are used, they are unique to a page.
3 |	A CSS reset (reset, normalize or reboot) is used and up to date.
4 |	Avoid at all cost embeding CSS in `<style>` tags or using inline CSS.
5 |	CSS files are concatenated in a single file.
6 |	CSS files are minified.
7 |	CSS files need to be non-blocking to prevent the DOM from taking time to load.
8 |	All pages were tested with the correct breakpoints.
9 |	CSS validator.
10 |	All pages were tested on all current desktop browsers (Safari, Firefox, Chrome, Internet Explorer, EDGE...).
11 |	All pages were tested on all current mobile browsers (Native browser, Chrome, Safari...).
12 |	All pages were tested on all current OS (Windows, Android, iOS, Mac...).
13 |	Use Hex color codes #000 unless using rgba().
14 |	Avoid absolute positioning.
15 |	Do not animate width, height, top, left and others. Use transform instead.
16 |	Avoid !important.
17 |	Only standard media queries are used.
18 |	Follow two tabs indentation.
19 |	Give proper spaces between brace brackets, colon etc.
20 |	Use three value hex code wherever possible for eg. #000000 -> #000.
21 |	Aoid ID usage for css styling purpose if possible.
22 |	Use shorthand wherever applicable.
23 |	Try reusing css code whenever applicable.
24 |	Avoid unwanted decimal points usage for matching font-sizes.
25 |	Use vendor prefixes.
26 |	Add box commenting for difference between main sections(Header, main, footer, and media queries) and normal commenting between sections.
27 |	Avoid unnecessary increase in specificity. Do not use important to override. (Avoid more than 4 nesting elements).
28 |	Avoid units for 0 such as 0px or 0% etc. Also avoid using trailing zero example 0.4, 0.9 etc.
29 |	Single line styling should be on the same line and should be merged i.e. there should be no spaces between them. Eg: `.heading { color: red; }`

:::tip CSS Checklist
CSS Checklist reference link can be found [**here**](https://docs.google.com/spreadsheets/d/1kbpSVE_ysY8Is5qvuWfCDTTTMp_Wtt5js7FBZzqGODk/edit#gid=912575460).
:::