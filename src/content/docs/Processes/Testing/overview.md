---
id: overview
title: High-level Testing Overview
sidebar:
  label: Overview
  position: 1
---

Broadly speaking, Software Testing Life Cycle (STLC) is a sequence of activities conducted to perform software testing. It is a series of steps that are followed in a sequence to test the quality of the software. The STLC is a part of the Software Development Life Cycle (SDLC) and is performed after the coding phase.

While this works for most workflows and projects, it is important to note that the testing process can **and needs be customized based on the project requirements**. In an Agile environment, the testing process is iterative and can be adapted to the project's needs - sometimes even overlapping with the development phase, which is not the case in a traditional waterfall model. Treat this as a framework, not a rule.

## Software Testing Life Cycle (STLC)

TODO: Add image

### Requirement Analysis

In this phase, the testing team examines the requirements to determine which are testable from a quality assurance perspective.

Activities performed:

- Identify/collect details on testing priorities and areas of focus
- Identify the types of tests to be conducted
- Determine the test environment where testing will be performed
- Analyze automation feasibility, if necessary

### Test Planning

In the test planning stage of STLC, the team defines objectives, scope, approach, resources, and schedule for the testing activities.

Activities performed:

- Drafting test plans or strategy documents for diverse testing types
- Selecting testing tools
- Estimating testing efforts
- Planning resources and defining roles and responsibilities

### Test Design

This phase involves creating, verifying, and refining test cases and test scripts. Test data is identified or created, reviewed, and subsequently revised as needed.

Activities performed:

- Develop test cases and automation scripts (if applicable)
- Review and finalize test cases and scripts
- Generate test data (if the test environment is available)

### Test Environment Setup

The test environment determines the software and hardware conditions under which a work product is tested. Setting up the test environment is a critical aspect of the testing process and can occur concurrently with the Test Case Development stage. If the test environment is provided by the customer or development team, the test team may not be involved in its setup but will need to perform a readiness check (smoke testing) to ensure it is suitable for testing.

Activities performed:

- Understand the necessary architecture and environment setup, and prepare a list of hardware and software requirements for the test environment
- Set up the test environment and prepare the test data.

### Test Execution

During this phase, the testers carry out the testing based on the test plans and test cases prepared. Bugs will be reported back to the development team for correction, and retesting will be performed.

Activities performed:

- Document test results, and log defects for failed cases
- Map defects to test cases in RTM
- Retest the Defect fixes
- Track the defects to closure

### Test Reporting

Testing team will meet, discuss and analyze testing artifacts to identify strategies that have to be implemented in the future, taking lessons from the current test cycle. The idea is to remove the process bottlenecks for future test cycles and share best practices for any similar projects in the future.

Activities performed:

- Evaluate cycle completion criteria based on Time, Test coverage, Critical Business Objectives, Quality
- Document the learning out of the project
- Prepare Test closure report

## Priority Definitions

| Priority               | Definition                                                                 | Examples                                                                                          |
|------------------------|----------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| Blocker (aka Showstopper) | 1. Site/App outage<br>2. Order flow or vital business process is broken<br>3. Security issues<br>4. A major loss of revenue to the Client<br>5. A major impact to the Client or its affiliates’ reputation(s) | 1. Site/App is unavailable and cannot be accessed<br>2. No order capturing<br>3. No payment processing<br>4. Critical security issues |
| P1–Critical            | Specific functionality is completely unavailable, severely corrupted or degraded for a large number of users | 1. File loads necessary for pricing or product management are not loading<br>2. Cannot make updates from the content management system administration module<br>3. User registration process is not working<br>4. Broken search |
| P2 – Major             | Functionality failure with a workaround available in place                 | 1. Features or functionalities are unavailable as desired but workaround is available<br>2. Third-party integrations are working, but failing occasionally |
| P3–Minor               | Minor business functionality failure with little or no end-user impact. Default issue prioritization in Google sheet/JIRA. | 1. User interface anomalies occur but these do not prevent end-users from using the Site/App<br>2. Files are missing from a secure FTP Site/App or other drop-off processes which do not impact delivery of business services |

## Test Cases

TODO: Add image

Based on tool sets used, these can be setup in Google Sheets.
Alternatively, we can help set these up on platforms like Confluence, TestRail or similar platforms.

## Testing Strategies

### Smoke Testing

**When to perform:** At the start of testing.

**Scope:** To verify that the Site/App is ready for further testing.

**Method(s) Used:** Randomly test the Site/App for any obvious issues against the scope of work/ticket/task.

### Functionality Testing

**When to perform:** Once all the modules have been unit tested, integrated and smoke testing has been given a “pass”.

**Scope:** To fully test the Site/App against the scope of work/ticket/task.

**Methods Used:** Various inputs will be entered to validate the output - positive inputs and negative inputs. Edge testing inclusive. See also “Testing Prompters: Functionality Testing”, below.

### UI (User Interface) Testing

**When to perform:** Once smoke testing has been given a “pass” and is carried out in parallel with the functionality testing.

**Purpose:** To verify that there are no UI errors in comparison with what the team imagined the UI would look/feel like (design files).

**Methods Used:** Switching back and forth between the design files given (and/or existing Live UI experience to reference). See also “Testing Prompters: UI Testing”, below.

### Compatibility (Responsive) Testing

**When to perform:** To be performed during each level of testing.

**Purpose:** To verify that the Site/App is responsive and functions properly on various devices/screen sizes.

**Methods Used:** Observe the respective URL (s) on the browsers/devices outlined as a priority in the Test Case(s) and/or in general of the project scope. See also “Testing Prompters: Compatibility Testing”, below.

### Retesting

**When to perform:** After the Developer notifies that a defect has been fixed and is ready for retesting.

**Purpose:** To verify that logged issues are fixed.

**Methods Used:** Retest using the same procedures that were used to generate the issue in the first place.

### Regression Testing

**When to perform:** After completion of retesting.

**Purpose:** To verify that fixes haven’t affected other areas of the site/app.

**Methods Used:** Randomly test against the scope of work/ticket/task, as well as randomly test some additional issues reported previously as fixed.

## Additional Testing Strategies

These are additional testing strategies that can be used based on the project requirements.

### Performance Testing

**When to perform:** It is performed during and after the project development as applicable and a final check before go-live.

**Purpose:** To determine the performance of the system with respect to Responsiveness, Speed, Scalability, Stability under a variety of load conditions.

**Methods Used:** Using a tool (eg. Artillery, k6, JMeter) as outlined during the project scope finalization.

### API Testing

**When to perform:** When API development is completed.

**Purpose:** It involves testing application programming interfaces (APIs) directly and as part of integration testing to determine if they meet expectations for functionality, reliability, performance, and security.

**Methods Used:** Using a tool (eg. Postman) as outlined during the project scope finalization.

### Automation testing

#### Unit Testing

**When to perform:** Unit testing is performed during the development phase, immediately after coding each module or function.

**Purpose:** The purpose of unit testing is to verify that individual components or units of code function correctly in isolation.

**Methods Used:** Ensuring that all the requirements are covered by the unit tests and manually validating each unit against the specified requirements.

#### Integration Testing

**When to perform:** Integration testing is typically performed after individual units or components have been tested (unit tested) and integrated into larger modules or subsystems.

**Purpose:** The purpose of manual integration testing is to verify that the interactions between integrated units/modules function correctly as a whole, identifying any interface defects and ensuring proper data flow.

**Methods Used:** Top-down testing, Bottom-up testing, Big Bang testing, Stub and driver approach, Incremental testing

#### End-to-End (E2E) Testing

**When to perform:** Automation testing using tools like Playwright, Selenium, etc., is typically performed after the software build is stable and ready for testing, often during regression testing phases or as part of continuous integration/continuous deployment (CI/CD) pipelines.

**Purpose:** The purpose of E2E testing with tools like Playwright, Selenium, etc is to automate repetitive manual testing tasks, reduce human error, and provide faster feedback on application quality.

- We automate what we feel is worth automating.
- We need to be pragmatic about the value addition of these tests.
- We are not rushing for a rigid or an objective x% coverage.
- The goal is to automate what we should so that we can use the remaining time for higher value things.
- We don’t want to add or create more work for someone else while we do this.

**Methods Used:**

1. **Scripting:** Writing test scripts using languages like JavaScript, TypeScript (for Playwright) or Java/Python (for Selenium) to automate user interactions with the application.
2. **Framework-based testing:** Developing test automation frameworks such as Page Object Model (POM) for Selenium or leveraging built-in features of Playwright for structured and scalable test automation.
3. **Integration with CI/CD:** Integrating automated tests into CI/CD pipelines to trigger tests automatically on code commits or builds.

### Google Analytics (GA) Testing

**When to perform:** Once Integration testing (functionality + UI) has been given a “pass”.

**Purpose:** To track click events, user traffic, and user interaction on the site.

**Methods Used:** Using a tool (eg. GA debugger) or adding a tracking code into the source code as outlined during the project scope finalization.

### Client UAT (User Acceptance Testing)

**When to perform:** Once Axioned QA has been given a “pass” and the Axioned PM has notified the Client PM (central point of contact/product owner) that Client UAT can be commenced.

**Purpose:** To support go-live approval.

**Expectations/Methods to be used:**

- Management of Client UAT and creation of Client UAT test cases is the responsibility of the Client. Unless indicated in writing otherwise, upfront (at the start of the engagement).
- Axioned will hand-over the solution to the Client for User Acceptance Testing (UAT). This is when the Client will review and ensure that it meets the Client’s requirements (documented at an earlier stage in the project).
- Before Client UAT begins, Axioned will set up and provide access to an issue logging tool/google sheet and instruct the Client (through the format of an example issue) re: expected entry and formatting of logging issues, so that the Axioned team can easily reproduce the problem and fix/re-test. The Client is expected to identify and remove any duplicate issues they might have identified and logged before “submitting” to Axioned.
- Client UAT includes the Client validating fixes for previously logged issues.
- Significant issues identified during Client UAT in the areas of performance or code review will be addressed by Axioned. Axioned will support this process and work with the Client team to prioritise and facilitate any reasonable changes.

## Standard Cross-Browser/Device Testing

We use a blend of actual/physical devices as well as real devices through Cloud services such as [LambdaTest](https://www.lambdatest.com/intl/en-in), as well as XCode for some iOS devices.

Please refer to the matrix below for device priorities:

| OS           | Device                    | Chrome   | Edge      | Firefox   | Safari    |
|--------------|---------------------------|----------|-----------|-----------|-----------|
| Windows 11   | Windows Laptop            | P1 | P1 | P2 | -         |
| MacOS        | Macbook                   | P1 | -         | P2 | P1|
| iOS  | iPhone 15 series         | P1 | -         | -         | P1|
| iOS             | iPhone 14 series          | P2 | -         | -         | P2|
| iOS             | iPhone 13 and 12 series   | P2 | -         | -         | P1|
| iPad OS (17) | iPhone SE (2nd)           | P1 | -         | -         | P1|
| iPad OS (17)             | iPad Pro (10.5-inch) (5th generation) | P3 | -         | -         | P2|
| iPad OS (17)             | iPad Air (5th generation) | P3 | -         | -         | P2|
| Android 12   | Google Pixel 7            | P2 | -         | -         | -         |
| Android 12        | Samsung Galaxy S24 and S24+| P1 | -         | -         | -         |

Additional References:

- [iOS Device Display Resolutions](https://www.ios-resolution.com/)
- [Simulate mobile devices with device mode](https://developer.chrome.com/docs/devtools/device-mode)