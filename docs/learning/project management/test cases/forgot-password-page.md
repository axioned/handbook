---
id: forgot-password-page
title: Forgot Password Page
sidebar_label:  Forgot Password Page
sidebar_position: 4
tags: []
---

| SR NO. | Test Scenario | Test Case ID | Test Case|Pre-requisite| Steps to Test | Input Test Data | Expected Result  |
|---|---|---|---|---|---|---|---|
|1|Check Position of logo|FPwd_1|To check the position of ReadyRespondersNetwork logo.|Sign Up page must be open|Observe the position of ReadyRespondersNetwork logo on sign up page|N/A|The position of ReadyRespondersNetwork logo should be at the top left corner of the sign up page.|
|2|Check clickability of the logo|FPwd_2|To check the clickability of ReadyRespondersNetwork logo|Forgot Password page must be open|Click on ReadyRespondersNetwork logo at the top of the page.|N/A|User should be redirected to the landing page/Home page of ReadyRespondersNetwork. |
|3|Check the position of Sign Up and Sign In link|FPwd_3|To check the position of Sign Up and Sign In link.|Forgot Password page must be open|Observe the position of Sign Up and Sign In link.|N/A|The position of Sign Up and Sign In link should be at the top right corner of the page.|
|4|Check the clickability of Sign Up and Sign In link|FPwd_4|To check the clickability of Sign Up and Sign In links given at top right corner on sign Ip page|Forgot Password page must be open|1. Go to the top right corner of the page<br/>2. Click on Sign Up/Sign In link|N/A|1. When clicked on Sign Up link, user should get redirected to Sign Up page.<br/>2. When clicked on Sign In link, user should get redirected to Sign In page.| 
|5|Check alignment|FPwd_5|To check the alignment of SEND EMAIL CTA|Forgot Password page must be open|1. Go to Forgot Password form<br/>2. Check the alignment of SEND EMAIL button<br/>3. Also check alignment of "SEND EMAIL" text on the CTA|N/A|1. Sign In CTA should be aligned with rest of the form fields as shown in the design.<br/>2. "SEND EMAIL" text should be aligned to the center of the CTA.|
|6|Check hover effect|FPwd_6|To check hover effect on SEND EMAIL CTA|Forgot Password page must be open|1. Go to Forgot Password form<br/>2. Hover on SEND EMAIL CTA.<br/>|N/A|"On hover, user should be able to observe following effects:<br/>1. CTA color should change to white.<br/>2. CTA text "SEND EMAIL" color should change to yellow.<br/>3. CTA should have a yellow border.|
|7|Check forgot password functionality|FPwd_7|To check the forgot password functionality on the page with valid input|Forgot Password page must be open|1. Go to the forgot password form<br/>2. Enter valid data in Email field<br/>3. Click on SEND EMAIL CTA.|Email - test@gmail.com|A pop up message should be displayed.|
|||FPwd_8|To check the forgot password functionality on the page with invalid input|Forgot Password page must be open|1. Go to the forgot password form<br/>2. Enter invalid data in Email field<br/>3. Click on SEND EMAIL CTA.|Email - test.test.com|Error message should be displayed below email field and the field should highlight in red color.|
|8|When user clicks on social links in footer|FPwd_9|To check working of social links in the footer section|Forgot Password page must be open|1. Scroll down to the bottom of the page<br/>2. Click on Facebook/Twitter social icons|N/A|Facebook/Twitter login page should open in new tab.|
|9|Check tooltip on CTA's and links|FPwd_12|To check tooltip present on all links and CTA's on the forgot password page|Forgot Password page must be open|1. Go to SIGN UP and SIGN IN link at the top right corner of the page<br/>2. Hover on both links<br/>3. Observe if the tooltip is appearing or not<br/>4. Follow #1 to #3 for SEND EMAIL CTA in forgot password form.|N/A|Appropriate Tooltip should be present on SIGN UP & SIGN IN links and SEND EMAIL CTA.|