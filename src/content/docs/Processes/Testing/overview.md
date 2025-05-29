---
id: overview
title: High-level Testing Overview
sidebar:
  label: Overview
  position: 1
---

Broadly speaking, the Software Testing Life Cycle (STLC) is a sequence of activities conducted to perform software testing. It is a series of steps that are followed in a sequence to test the quality of the software. The STLC is a part of the Software Development Life Cycle (SDLC) and is performed after the coding phase.

While this works for most workflows and projects, it is important to note that the testing process can **and needs be customized based on the project requirements**. In an Agile environment, the testing process is iterative and can be adapted to the project's needs - sometimes even overlapping with the development phase, which is not the case in a traditional waterfall model. Treat this as a framework, not a rule.

## Software Testing Life Cycle (STLC)

:::success[Software Testing Life Cycle]
![Software Testing Life Cycle](/assets/sdlc.png)
:::

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

:::success[Test Case - Example]
![Test Case - Example](/assets/test-cases.png)
:::

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

### Integration Testing

**When to perform:** Integration testing is typically performed after individual units or components have been tested (unit tested) and integrated into larger modules or subsystems.

**Purpose:**  The purpose of manual integration testing is to verify that the interactions between integrated units/modules function correctly as a whole, identifying any interface defects and ensuring proper data flow.

**Methods Used:** Top-down testing, Bottom-up testing, Big Bang testing, Stub and driver approach, Incremental testing

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

### Unit Testing

**When to perform:** Unit testing is performed during the development phase, immediately after coding each module or function.

**Purpose:** The purpose of unit testing is to verify that individual components or units of code function correctly in isolation.

**Methods Used:** Ensuring that all the requirements are covered by the unit tests and manually validating each unit against the specified requirements.

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
| iOS (17,18) | iPhone 16 series         | P1 | -         | -         | P1|
| iOS (17,18) | iPhone 14 or 15 series       | P2 | -         | -         | P2|
| iOS (17,18) | iPhone 13 or 12 series         | P3 | -         | -         | P3|
| iOS (17,18)| iPhone SE (3rd)           | P1 | -         | -         | P1|
| iPad OS (18)| iPad Pro 12.9-inch (5th generation) | P3 | -         | -         | P1|
| iPad OS (18)| iPad Pro 11-inch (4th generation)| P3 | -         | -         | P2|
| iPad OS (18)| iPad Air 11-inch (M2, 2024)| P3 | -         | -         | P1|
| Android 14 & 15  | Samsung Galaxy S25+         | P1 | -         | -         | -         |
| Android 14 & 15  | Google Pixel 9           | P1 | -         | -         | -         |
| Android 14 & 15       | Samsung Galaxy S24| P2 | -         | -         | -         |
| Android 14 & 15       | Google Pixel 8 | P2 | -         | -         | -         |

Additional References:

- [iOS Device Display Resolutions](https://www.ios-resolution.com/)
- [Simulate mobile devices with device mode](https://developer.chrome.com/docs/devtools/device-mode)

## Testing prompts

### Functionality Testing Prompts

#### Functionality Issues

- Ensuring that the functioning of all custom functions is working as defined within the Client’s Deliverables & Dependencies.
- Ensure that the functioning of all menu items, links, buttons, etc. work as expected/directed.
- Ensure that the execution of specific functions do not cause any other issues within the page/Site/App.
  e.g. Clicking on "About" within the menu, should take the user to the "About" page, and NOT produce any other results.
  e.g. The “on-click” event should NOT cause any alignment issues within the current page or "About" page.
  e.g. In-page links should either jump to the relevant portion within the page - or open up a new tab.

#### CMS Admin Experience Issues

- Highlight any issues related to the CMS admin experience (and its impact on the front-end):
   a. Adding/editing/deleting posts.
   b. Editing plugin settings (e.g. slideshow speeds), etc.
   c. Font style, weight, size, line height according to the respective project guidelines.
   d.Content overflow, alignment & spacing issues.

#### Incorrect OR Broken Links

- Validating that the page displays correctly and effectively communicates to users that the requested resource is not found. This includes ensuring the 404 error message is clear and user-friendly, providing relevant navigation options or links to help users return to the main site or find alternative content.
- Ensure there are NO incorrect or broken links within each page.
- Ensure ALL external Site/App links open in a new browser tab.
- Ensure ALL internal Site/App links open in the same browser tab.
Use any of the given links:
i.  [validator.w3.org/checklink](http://validator.w3.org/checklink)
ii. [brokenlinkcheck.com](https://www.brokenlinkcheck.com/)

#### Site/App Speed

- Is the load speed acceptable from a user’s perspective across all devices? (Benchmarks: Facebook. See: (Care of Google) [How Speed Impacts the User Experience.](http://googleresearch.blogspot.in/2009/06/speed-matters.html))
- What is the Site/App’s speed?
  - [Google Page Speed](https://developers.google.com/speed/pagespeed/insights/): Target 80% or above
- Lighthouse/Web Vitals audit also returns additional checks such as Accessibility, which shall be captured.
- More on core web vitals-[here](https://docs.google.com/document/d/19ZJQbqp5xIs-AzoOg-eHVPLRcArR6E_3X6GVGbggwK8/edit).

#### Missing (or slow to load) Content

- There should be no question marks, error-indicative images, or "blank spaces", where content is expected to appear.
- Site/App-Hosted/Driven Text/Images/Videos: Ensure that all text/images/videos that should appear, do appear! On DESKTOP and MOBILE!
- 3rd Party Content:Ensure that all content being fed from a 3rd-party (API, RSS Feed, etc.) renders as expected.

#### Email and Phone Number Issues

**On Desktop browsers:**

- Emails should open up default/user’s email client.
- Telephone numbers should open up Skype (if installed). Otherwise remain inactive (depending on the Client’s desired experience/what’s documented in the SOW).

**On Mobile browsers:**

- Emails should open up default/user’s email client.
- Telephone numbers should initiate the phone call process on the user’s phone.

#### Form Issues

**Note: The PM/Dev/QA should be documenting all form requirements (field expectations, alert messages, etc.) clearly up-front (within the SOW/ticket/task) to ensure that the form is developed appropriately, as well as tested according to the expected behaviour for each field/the entire form user journey.*

**Mandatory Fields:**

- Ensure that it's clear to the user WHAT fields are mandatory. (For example: The field is starred *or highlighted in some way.* If starred, there should be a reference message as to what this star means. E.g. “This field is mandatory.”)
- Ensure that the appropriate “alert” message appears on-screen if the user does not “fill-in” a mandatory field (ideally DURING the user experience/next to the field as opposed to “on Submit”).

**All Fields:**

- Ensure that it's been indicated to the user, what kind of entry they’re expected to make within each field. (For example: The field might be a calendar, whereby a date before a certain date or after a certain date can not be selected.)
- Ensure that the appropriate “alert” message appears if the user does not provide an appropriate entry for each field  (ideally DURING the user experience as opposed to “on Submit”).

**Alert/Error Messages:**

- Ensure that the alert messages match-up with what's been documented in terms of “form requirements”*.
If there are any CAPTCHA fields, ensure that they are working as expected.
- Form Errors: Alert/Error Messages: Ensure that there are no appearance related issues. Font style, color, alignment, spacing, position, wrapping, overlapping issues, pop-up appearance issues, etc.

 **Confirmation Emails:**

- Ensure that the confirmation email(s) related to any forms on the Site/App match-up with what's in the “form requirements”*. (Usually, confirmation emails are sent to 1. the user, 2. the Site/App Admin.)

#### Plugin and API Behavior Issues

- Ensure that all plugins and APIs are behaving/functioning as expected and the user journey is working as it should.
  a. Plugins - Image Carousels, Image Sliders, Form Plugins, etc.
  b. APIs - e.g. Google Map, Twitter Feed, YouTube Videos, etc
- Ensure that there are no appearance related issues. Font style, color, alignment, spacing, position, wrapping, overlapping issues, pop-up appearance issues, etc.

#### Content Sharing/Posting Issues

- Ensure that the social icons are operating as they should and in a speedy fashion.
- Ensure that the message/image that is shared matches up with what's been specified by the Client/in the SOW.
  E.g. If the user is sharing an image from the Site/App via Facebook, then that specific image/image description should be posted to the user's wall (NOT a generic image/image description, UNLESS directed by the Client).
-Content Sharing/Posting Issues: Ensure that there are no appearance related issues with any social icons. Font style, color, alignment, spacing, position, wrapping, overlapping issues, pop-up appearance issues, etc.

#### URL and/or Page Naming Issues

- Ensure that the page name/title matches the menu selection.
- Ensure that the URL matches the menu selection/page name - makes sense to the user. (These expectations should be documented in the SOW.)

#### Behavior State Issues

- Ensure that the behaviour states for the following items work/behave as expected/what's been directed on each page (across all devices/browsers):
  - Menu Items
  - Sub-menu Items
  - Buttons
  - Links
  - Images *(If applicable. Note: Often images will have hover-over and/or active state)*
- Behaviour states for the above items are typically as follows:
  - Hover-over State
  - Selected/Active State
  - Static/Disabled (Inactive link.)
- Look for inconsistencies in behaviors and highlight these inconsistencies also.

#### Webmaster Tools

To ensure that the Webmaster Tools are actively tracking and providing valuable insights into the website's performance and visibility in search engine results. Find more info [here](https://search.google.com/search-console)

#### Google Analytics/Google Tag implementation

To ensure the implementation is functioning correctly, providing accurate data for analysis and decision-making purposes.

#### Social Share Preview

- To ensure that the social sharing functionality integrates seamlessly into the application, providing users with a reliable and engaging sharing experience.
- References:
  - <https://developers.facebook.com/tools/debug/>
  - <https://www.linkedin.com/post-inspector/>

#### Web Accessibility

- Check if specifically requested and/or time permits.
- Verifying "Web Accessibility" checks, the process involves assessing that the web application or site conforms to accessibility standards such as WCAG (Web Content Accessibility Guidelines).
- This includes testing for features like alternative text for images, keyboard navigation support, semantic HTML markup, color contrast ratios, and ensuring compatibility with assistive technologies like screen readers.
- References:
  - <http://www.w3.org/WAI/eval/preliminary.html>

#### UI (User Interface) Testing Prompts

**Design Symmetry and Consistency Issues:**

- Ensure that each page matches up with what's in the PSD file, in terms of: "DESIGN SYMMETRY AND CONSISTENCY". Specifically with regards to:
- Margins
- Spacing
- Alignments (in relation to text/images/links/buttons)
- Colors
- Area blocks
- Sizes used (for all elements on the page)

*Note: Absolute pixel perfection may or may not be necessary, dependent on the Client's preference. Some Clients are more focused on the page's "design symmetry and consistency" than absolute pixel perfection (depending on the Platform also). This should be clarified with the Client before the commencement of any QA activities.*

**Font Appearance Issues:**

- Font style, weight, size, line-height.
- Ensure that the fonts on each page - across each device/browser - match-up with what's in the PSD file/what's been directed.
- Make sure the text is easily visible/readable.
- Small font sizes may look OK in the .PSD file, but may not be easily visible/readable when presented on the site/app.

*Note: Some fonts may not be able to render in exactly the same way across all devices/browsers. In this scenario, ensure you understand WHICH device/browser is of priority to the Client (as per the “Testing Requirements and Priorities” as documented in the SOW). Consult your PM for priorities.*

**Spelling Errors:**

Highlight any spelling errors, even if the mistakes are also in the Copy deck.

**Copy Deck Match-Up Errors:**

Ensure that the text on each page matches up with what's in the Copy deck/what's been directed. (Unless the Copy deck contains a spelling error. See above.)

*Note for Axioned Team: The team SHOULD have a separate Copy deck document - in a .doc or Google doc format. And we SHOULD directly copy/paste from that document ONLY. To check that what you’ve copied is accurate: Ctrl C (COPY), Ctrl F (FIND/within your document or page), Ctrl V (PASTE/within “Find”).*

**Image Quality Issues:**

- Ensure that the images do not look grainy or blurred.
- Ensure that the images should not be squashed.
- Ensure that images are optimized on receipt from the Client.

**Stock Image Check:**

Ensure that any image is not watermarked i.e. no image is a stock image (in the package) → especially check for background images.

#### Other Checks/Prompt

1. Development Inspections/Schedule should be established at the outset of each project, ticket, or task to ensure thoroughness and alignment with project goals. This includes:
   - **Security Inspection:** Conducting comprehensive security assessments to identify and mitigate potential vulnerabilities and ensure data protection.
   - **SEO Inspection:** Analyzing the code and content to optimize for search engines, enhancing visibility and user accessibility.
   - **DevOps Inspection:** Ensuring seamless integration and automation across development and operations processes to enhance efficiency and deployment reliability.
   - Throughout these inspections, ongoing coordination with the inspection team is essential to address findings promptly and maintain project momentum.
2. **Dummy CMS/database entries:**
To verify the removal of dummy CMS/database entries on the live environment involves confirming that all test data, placeholder content, or temporary entries used during development or testing phases have been properly deleted or hidden from public view. This ensures that the live website or application only displays accurate and relevant information to users, maintaining data integrity and user experience standards.
3. **robots.txt file:**
To verify the robots.txt file for staging involves ensuring it accurately restricts or allows search engine crawlers as intended for the staging environment. Similarly, for the live environment, the robots.txt file should accurately control crawler access according to production requirements, ensuring it aligns with SEO and content management strategies.
4. **Plugins:**
To verify that correct plugins are being used (dependent on CMS), ensure compatibility with the CMS version, validate proper functionality according to requirements, and confirm seamless integration without impacting site performance or user experience.
