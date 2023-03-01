---
position: 1
id: html
title: HTML Code Review Checklist
sidebar_label: Code Review Checklist
tags: [HTML, HTML checklist]
---

# Checklist Pointers

1. The Doctype is HTML5 and is at the top of all your HTML pages.
2. The charset declared (UTF-8) is declared correctly.
3. A title is used on all pages
4. A meta description is provided, it is unique and doesn't possess more than 150 characters.
5. Favicons are added and displayed correctly
6. Use rel="canonical" to avoid duplicate content.
7. If your project is a blog or has articles, an RSS link was provided.
8. All CSS files are loaded before any JavaScript files in the HEAD
9. Semantic tags are used appropriately
10. Error pages for 404 / server errors exists
11. In case you are using external links with target="_blank", your link should have a rel="noopener" attribute to prevent tab nabbing. If you need to support older versions of Firefox, use rel="noopener noreferrer"
12. Unnecessary code needs to be removed before sending the page to production.
13. All pages need to be tested with the W3C validator to identify possible issues in the HTML code.
14. Use HTML validator to validate your code
15. Your website shows your content correctly with adblocker enabled
16. Make sure no links are broken on your page 
17. All images are optimized to be rendered in the browser.
18. You provide layout images 2x or 3x, support retina display.
19. Use sprites wherever feasible
20. All **`<img>`** have an alternative text which describe the image visually.
21. Images are lazyloaded
22. All anchor should has title attribute for SEO purpose
23. Follow two tabs indentation
24. Avoid using the **`<hr>`** and **`<br>`** tags.
25. Avoid empty elements in the structure
26. Abound using the **`<i>`** tag for the icons. Simply use the **`<span>`** tag and write the icon name and icon can be added via css using the pseudo elements(before & after)
27. Add proper commenting to the code/section
28. Use the wrapper properly.
29. Give meaningful classes.
30. Avoid inline and internal styling.
31. Wrap every input element, select, and textarea in a block level element.
32. Wrap every image inside a block level element.
33. Do not add any text in uppercase. Manage it via css.

:::tip HTML Checklist
HTML Checklist reference link can be found [**here**](https://docs.google.com/spreadsheets/d/1kbpSVE_ysY8Is5qvuWfCDTTTMp_Wtt5js7FBZzqGODk/edit#gid=20521288).
:::