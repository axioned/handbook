---
id: reactjs-checklist
title: ReactJS Code Review Checklist
sidebar_label: Code Review Checklist
sidebar_position: 2
tags: [reactjs code review, reactjs checklist]
---

# Checklist

Sr No. | Check |
:-: | --- |
1 | Check if common services can be made
2 | Create a common component if it can be reused in an app. Create single responsibility components
3 | Create a separate folder for routes for a specific page and import all components and map them with the routes.
4 | State and UI should be maintained separately.
5 | The project should have a Readme file with instructions how to run locally and other useful info
6 | Minimize logic in the render method. Logic should be in helper methods, container components or in Redux actions (if used)
7 | Use functional components for components that don’t use state
8 | Make sure you don’t edit props within a component
9 | Use code formatting such as beautify and prettier for indenting the codes
10 | Remove unwanted variables and method that are not in use.
11 | Remove unwanted packages that are not in use from package.json
12 | Every useEffect  and function should have proper commenting
13 | There should be consistency in the import statement used in the files
14 | Need to have baseUrl set for import
15 | Avoid using var, and promote use of let and const.
16 | There should be 0 warnings while compiling the code
17 | Make sure that sensitive data are saved on .env files and are used from that on projects.
18 | Avoid unnecessary use of redux 
19 | Merge common styling by providing the common classnames
20 | Prevent unwanted re-rendering of components
21 | Create utils for performing common action through the project
22 | Use constant file in a component to get the static content
23 | Use arrow functions to create methods instead of binding in constructors.
24 | While using keys for dynamic lists check if keys are unique index should be fine if the list items will not change order. Preferred way is to use primary keys generated from db.
25 | Try avoiding multiple setState in a single function and be mindful of the asynchronous nature of setStates.
26 | When changing state in setState based on previous state value use previous state.
27 | Sync and npm-check to automate the task of identifying insecure and outdated components. 

:::tip ReactJS Inspection Checklist Google Sheet
ReactJS Inspection Checklist reference link can be found [**here**](https://docs.google.com/spreadsheets/d/1kbpSVE_ysY8Is5qvuWfCDTTTMp_Wtt5js7FBZzqGODk/edit#gid=1281122238).
:::