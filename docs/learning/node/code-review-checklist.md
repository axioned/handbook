---
sidebar_position: 2
id: Node-checklist
title: Node Code Review Checklist
sidebar_label: Code Review Checklist
tags: [Node code review, Node checklist]
---

# Checklist

Sr No. | check | Description |
:-: | --- | --- 
1 | snyk and npm-check to automate the task of identifying insecure and outdated components. |
2 | Using Async-Await or promises for async error handling |
3 | is there a separation between operational vs programmer errors | Operational - (e.g. API received an invalid input) <br /> Programmer - (e.g. trying to read undefined variable)
4 | Are errors handled centrally? Instead of middlewares |
5 | Removing unwanted dependencies which are not being used in the project. |
6 | All the commonly used functions should be in utils file of helper folder. |
7 | Avoid using var, and promote use of let and const. |
8 | Make sure that sensitive data are saved on .env files and are used from that on projects. |
9 | Input validation | Check for correct input
10 | Use of HELMET package middleware to avoid common security issues in the app |
11 | Error messages should be generic. |
12 | Using bcrpyt module for storing passwords securely |
13 | Using and configuring PM2 so that if any failure occure it get restarted automatically |
14 | Always enable monitorring and logging for the node app in case where we want to debug the application on failure |
15 | Rate limiting the end points. |
16 | Try to make the code more functional. (Use of modular styling of code) |
17 | DB connections & file operation like streaming should be properly closed. |
18 | If using multiple DB querries/calls within a block of code which are independent of each other then they can be wrapped in Promise.all |
19 | Proper commenting should be followed for each and every API |
20 | Make sure DB queries uses indexes for maximize performance. |
21 | Before using any third party packages make sure it is frequently updated and developer support is also there. |
22 | Code indentation by using Prettier or Beautify.|
23 | Schedule a good backup strategy for your production DB in any chance of failure |
24 | While using $unwind stage make sure to enable option preserveNullAndEmptyArrays so that any document with empty array doesn't get skip. |
25 | Use explain stage while writing big queries to see how well the query is performing |
26 | Use of $match, $limit & $skip can filter out most of the documents if used on a early pipeline stage. | For detailed aggregation pipeline optimization, you can refer [**here**](https://docs.mongodb.com/manual/core/aggregation-pipeline-optimization/).

:::tip Node Inspection Checklist Google Sheet
Node Inspection Checklist reference link can be found [**here**](https://axioned.slack.com/archives/D0448PXHNKU/p1677678175552469?thread_ts=1677673082.244419&cid=D0448PXHNKU).
:::