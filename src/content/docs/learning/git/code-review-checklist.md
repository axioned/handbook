---
id: git-checklist
title: GIT Code Review Checklist
sidebar_label: Code Review Checklist
sidebar_position: 2
tags: [git, git checklist, commit, branch]
---

# Checklist Pointers

Sr No. | Check |
:----: | ----- |
1 |	PR description should be proper.
2 |	Integration branch for conflicts.
3 |	Commits should be descriptive and according to the task/bug.
4 |	Make sure no dist files, editor/IDE files, etc are checked in. There should be a .gitignore for that.
5 |	No commented code should be present while committing the code.
6 |	Remove console logs while committing.
7 |	Commits are small and divided into logical parts.
8 |	Make sure code is rebased before merging to maintain history.
9 |	Branching name in the agile should be based on the ticket name.
10 |	Commits should be more descriptive in terms of whether its bug, enhancement, issue fixes, and ticket number. For example: if it is a bug, `[bug] a description of the bug fixed`.
11 |	Make sure the code that your are committing is formatted correctly. For formatting you  can used extensions such as Prettier if you're using VS code as IDE.
12 |	If there is a need of commented code please add TODO and then push on the repo.
13 |	Make sure that you do not provide much file changes for PR> If you are building a bigger functionality use atomic commits and send it for review. 

:::tip Git Checklist
Git Checklist reference link can be found [**here**](https://docs.google.com/spreadsheets/d/1kbpSVE_ysY8Is5qvuWfCDTTTMp_Wtt5js7FBZzqGODk/edit#gid=1533928750).
:::