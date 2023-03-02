---
id: sass-checklist
title: SASS Code Review Checklist
sidebar_label: Code Review Checklist
sidebar_position: 2
tags: [Sass, Sass checklist, mixin, partials]
---

# Checklist

Sr No. | Check | Reference |
:-: | --- | --- 
1 | There should be **default / global** folder for variables, mixins etc. <ul><li>_font.scss</li><li>_global.scss</li><li>_mixin.scss</li><li>_reset.scss</li><li>_variables.scss</li></ul> |
2 | There should be **modules** folder for section wise partial files if sections are used in multiple pages <ul><li>_banner.scss</li><li>_header.scss</li><li>_footer.scss</li></ul> |
3 | There should be **pages** folder for page wise partial files if page styling is unique. <ul><li>_about.scss</li><li>_page-not-found.scss</li></ul> |
4 | **Strictly use Variables** for Colors, Breakpoints, Font Family, Font Size, Font Weight. Use Object variables if possible | Eg: <br /> in _variables.scss <br /> ```$colors: ( primary-color: #00497e, secondary-color: #00487d, );``` <br /> use in any partial files  <br /> ```.content {  background-color: map-get($colors, primary-color); }``` |
5 | Create mixins to reuse it in all partial files. Use mixins wherever possible and do not create unnecessary mixins, if not used, remove it. | https://sass-lang.com/documentation/at-rules/mixin |
6 | Use meaningful class and IDs |
7 | Use **extends / placeholders** for repeated styling | https://sass-lang.com/documentation/at-rules/extend |
8 | Nesting must be upto 6 levels. |
9 | **& operator** should be used for selecting parent and pseudo selectors. | Eg: <br /> ```a { color: $black; &:hover { opacity: .8; }}``` |
10 | **Operators**( +,-,*,/,%)  :  This mathematical operators should be used for calculating % values | Eg: <br /> ```a { width: $fullWidth / 2; /*  $fullWidth: 100%; defined in _variables.scss  */ }``` |
11 | Comment your code if necessary, because partial files names are already self explanatory. |
12 | <ul><li>Omit unit specification after ""0"" values.</li><li>Do not use units (px) after 0 values unless they are required.</li></ul> | Eg: <br /> ```margin: 0; padding: 0;``` |
13 | Omit leading ""0""s in values. | Eg: <br /> Instead of <br /> ```font-size: 0.8px;``` <br />Use <br />```font-size: .8px;``` |
14 | Use 3 character hexadecimal notation where possible. | ```/* Not recommended */```<br /> ```color: #eebbcc;```<br />#eebbcc= hexadecimal notation.<br />```/* Recommended */``` <br />```color: #ebc;``` <br />#ebc= hexadecimal notation. |
15 | Follow **Codecop** : Declarations are to be consistently ordered; box-model, display, positioning and etc. | ```.selector {/* Box Model */box-sizing: border-box;width: 100px;height: 100px;padding: 10px;border: 10px solid #333;margin: 10px;/* Display */display: inline-block;overflow: hidden;float: left;/* Positioning */position: absolute;z-index: 10;top: 0;right: 0;bottom: 0;left: 0;/* Other (in alphabetical order) */background: #000;color: #fff;font-family: sans-serif;font-size: 16px;text-align: right;opacity: 0;outline: none; }``` <br />Note: Commenting in the above code is just for reference
:::tip SASS Checklist
SASS Checklist reference link can be found [**here**](https://docs.google.com/spreadsheets/d/1kbpSVE_ysY8Is5qvuWfCDTTTMp_Wtt5js7FBZzqGODk/edit#gid=20521288).
:::