---
position: 1
id: sonarqube
title: SonarQube
sidebar:
  label: SonarQube
---


## Onboarding

- You will need Axioned VPN access to use the system (this will be as good as someone trying to access this system/code from our offices).
  - If you do not have this already, please ask the <itadmin@axioned.com> team to provision this (along with your SonarQube request).
- Make a request to get the access by filling out the form [here](https://docs.google.com/forms/d/e/1FAIpQLSc550MkOG_CF2yrvuXtgnheWgii0WKP53yu0RKjNCUTRrL6Vg/viewform).
.

## Setup

- Download the [SonarScanner CLI](https://docs.sonarsource.com/sonarqube/latest/analyzing-source-code/scanners/sonarscanner/) for your development environment
- Complete Installation of Scanner
  - For Windows: add the `bin` directory to the `%PATH%` environment variable
  - For Linux: add the `bin` directory to the `PATH` environment variable
  - For macOS: add the `bin` directory to the `PATH` environment variable

## Project Configuration

- If your project should already exist on SonarQube, then please request the project(s) you want to be assigned to by sending an email to <itadmin@axioned.com> and cc'ing [Tech Leads](mailto:techleads@axioned.com).
  - If your are setting up a new proejct, please request the creation of the project to the same email address.
- To run scans, you need to generate a token (or provide a token that you have already created before). These can be project specific tokens or user-level - however these are specific to each user and not meant to be shared.
- These tokens key will be used in the SonarScanner CLI command to authenticate the user.

## Run Analysis

- To run the analysis on the project, make sure you are in the `main` or `master` branch (or any other equivalent to your default branch).

:::note
Remember, as of now, you can only run this analysis against 1 branch only - which is usually your default branch.
:::

- Execute the Scanner from your computer by running the following command

```bash
sonar-scanner \
  -Dsonar.projectKey=KEY \
  -Dsonar.sources=. \
  -Dsonar.host.url=URL \
  -Dsonar.login=TOKEN
```

Note: Replace `KEY`, `URL`, and `TOKEN` with the appropriate values.

Alternatively, these can also be stored in a `sonar-project.properties` file in the root of your project, and then running the `sonar-scanner` command without any arguments.

Example:

```file
sonar.projectKey=KEY
sonar.sources=.
sonar.host.url=URL
sonar.login=TOKEN
```

## Results

- Once the analysis has run successfully, your terminal will indicate so (alternatively, you could monitor the progress via the link which the terminal gives you)
- Upon completion, the results will be available through the SonarQube portal - with analysis of “New Code” (which compares the differential between previous run and the new updates) as well as “Overall Code”.
