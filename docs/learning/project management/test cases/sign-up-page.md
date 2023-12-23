---
id: sign-up-page
title: Sign Up Page
sidebar_label:  Sign Up Page
sidebar_position: 2
tags: []
---

| SR NO. | Test Scenario | Test Case ID | Test Case | Priority | Pre-requisite | URL | Steps to Test | Input Test Data | Expected Result  |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Check Position of logo | SignUp_1 | To check the position of ReadyRespondersNetwork logo. |  | Sign Up page must be open |  | Observe the position of ReadyRespondersNetwork logo on sign up page | N/A | The position of ReadyRespondersNetwork logo should be at the top left corner of the sign up page.  |
| 2 | Check clickability of the logo | SignUp_2 | To check the clickability of ReadyRespondersNetwork logo |  | Sign Up page must be open |  | Click on ReadyRespondersNetwork logo at the top of the page. | N/A | User should be redirected to the landing page/Home page of ReadyRespondersNetwork.   |
| 3 | Check the position of Sign Up and Sign In link | SignUp_3 | To check the position of Sign Up and Sign In link. |  | Sign Up page must be open |  | Observe the position of Sign Up and Sign In link. | N/A | The position of Sign Up and Sign In link should be at the top right corner of the page.  |
|4|Check the clickability of Sign Up and Sign In link|SignUp_4|To check the clickability of Sign Up and Sign In links given at top right corner on Sign Up page||Sign Up page must be open||1. Go to the top right corner of the page<br/>2. Click on Sign Up/Sign In link|N/A|1. When clicked on Sign In link, user should get redirected to Sign Up page.<br/>2. When clicked on Sign Up link, the page should get reloaded.|
|5|Check alignment|SignUp_7|To check the alignment of Sign Up CTA||Sign Up page must be open||1. Go to Sign Up form<br/>2. Check the alignment of Sign up button<br/>3. Also check alignment of "SIGN UP" text on the CTA|N/A|1. Sign Up CTA should be aligned with rest of the form fields as shown in the design.<br/>2. "SIGN UP" text should be aligned to the center of the CTA.|
|6|Check hover effect|SignUp_8|To check hover effect on Sign Up CTA||Sign Up page must be open||1. Go to Sign Up form<br/>2. Hover on SIGN UP CTA.|N/A|On hover, user should be able to observe following effects:<br/>1. CTA color should change to white.2. CTA text ""SIGN UP"" color should change to yellow.<br/>3. CTA should have a yellow border.|
|7|When user fills up sign up form|SignUp_5|To check the Sign Up funtionality on the page with valid inputs||Sign Up page must be open||1. Go to the Sign Up form<br/>2. Enter valid inputs in First Name, Last Name and Email fields<br/>3. Click on Sign Up CTA.|First name - Cynthia<br/>Last name - Toomey<br/>Email - test@gmail.com|A pop up message should be displayed.|
|||SignUp_6|To check the Sign Up funtionality on the page with invalid inputs||Sign Up page must be open||1. Go to the Sign Up form<br/>2. Enter invalid inputs in First Name, Last Name and Email fields<br/>3. Click on Sign Up CTA.|First name - &%&%%*<br/>Last name - no special character<br/>Email - test.test.com|Error message should be displayed below fields with invalid inputs and the field should highlight in red color.|
|8|When user clicks on social links in footer|SignUp_9|To check working of social links in the footer section||Sign Up page must be open||1. Scroll down to the bottom of the page<br/>2. Click on Facebook/Twitter social icons|N/A|Facebook/Twitter login page should open in new tab.|
|9|When user clicks on CONNECT CTA|SignUp_10|To check click functionality of Connect CTA||Sign Up page must be open||1. Click on Connect button present at the bottom right corner of the page|N/A|CONNECT form should be displayed on the page|
|||SignUp_11|To check the form closing for CONNECT form||Sign Up page must be open||1. Click on CONNECT button present at the bottom right corner of the page<br/>2. Click on the close button on the top right corner of the form|N/A|Form should get closed and CONNECT button should be visible again.|
|10|When user Submits CONNECT form|SignUp_12|To check the connect functionality on landing page with valid inputs||Sign Up page must be open||1. Go to the CONNECT CTA present at the bottom right corner of browser window<br/>2. Click on CONNECT CTA<br/>3. Enter valid data in Your Name, Email, Subject, Message<br/>4. Click on SEND CTA.|Your Name - Cynthia<br/>Email - test@gmail.com<br/>Subject - need to become RRN Member<br/>Message - I am very much interested in RRN|A pop up message should be displayed. |
|||SignUp_13|To check the connect functionality on landing page with invalid inputs||Sign Up page must be open||1. Go to the CONNECT CTA present at the bottom right corner of browser window<br/>2. Click on CONNECT CTA<br/>3. Enter invalid data in some of the fields listed below- Your Name, Email, Subject, Message<br/>4. Click on SEND CTA.|Your Name - *^&(*&*<br/>Email - test.gmail.com<br/>Subject - need to become RRN Member<br/>Message - I am very much interested in RRN|Error message should be displayed below fields with invalid inputs and the field should highlight in red color.|
|11|Check tooltip on CTA's and links|SignUp_14|To check tooltip present on all links and CTA's on the Sign Up page||Sign Up page must be open||1. Go to SIGN UP and SIGN IN link at the top right corner of the page<br/>2. Hover on both links<br/>3. Observe if the tooltip is appearing or not<br/>4. Follow #1 to #3 for SIGN UP CTA in Sign Up form.|N/A|Appropriate Tooltip should be present on SIGN UP & SIGN IN links and SIGN UP CTA.|