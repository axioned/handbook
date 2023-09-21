---
id: react-native-checklist
title: React Native Code Review Checklist
sidebar:
  label: Code Review Checklist
  order: 2
tags: [react native code review, react native checklist]
---

# Checklist

Sr No. | Check |
:-: | --- |
1 | **Folder Structure** <ol><li>All the components, globals, images, redux etc.. Should be written inside the src folder</li><li>Images should be there in the images folder under the src folder.</li><li>Redux files should be written inside the store folder under the src folder</li><li>You can create stack navigator file inside navigation folder under src</li></ol>
2 | **Naming Conventions** <ol><li>A folder and sub folder name should always start with small letters and the files belongs the folders is always in pascal case.</li><li>Object and variable declaration should always in camel case statement.</li></ol>
3 | **Best Practices** <ol><li>Divide The Components (split the React Native components into two individual directories: container and plain components)</li><li>Declare The Types: It can either be Flow or Typescript</li><li>Separate the styles from the components.</li><li>Remove console.log() after debugging, It will make app slower.</li><li>Create aliases using babel-plugin-module-resolver to avoid nested imports</li><li>Use Hooks (avoid class based component)</li><li>Use Redux for for the store state (Avoid unnecessary use of redux)</li><li>Add fastlane set up for automate development and build release process</li><li>Use Platform specific styles.</li><li>Alway assign unique key to each element.</li><li>create class component when we have to use state otherwise we should use functional component</li><li>Use spread operator. It can make your React code much more beautiful and clean</li><li>write your api calls within the useEffect for hooks / write your api calls withing the componentDidMount for class component.</li><li>Always implement as much client validation as possible at front end level</li><li>make sure that the app you are building is responsive</li><li>DO use Safe Area View to look good on every iOS device</li><li>Use a linter to make your code easier to review.</li><li>Lock Dependencies(remove the ^ character in order to lock the dependency on that specific version)</li><li>Review your code at least once before creating a pull or merge request</li><li>Check internet connectivity for a better user experience</li></ol>

:::tip React Native Checklist Google Sheet
React Native Checklist reference link can be found [**here**](https://docs.google.com/spreadsheets/d/1kbpSVE_ysY8Is5qvuWfCDTTTMp_Wtt5js7FBZzqGODk/edit#gid=1905008495).
:::