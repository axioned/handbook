---
id: landing-page
title: Landing Page Test Case
sidebar_label: Landing Page
sidebar_position: 1
tags: []
---

|Sr.no|Test Scenario|Test Case Id|Test Case|Input Test Data|Expected Result|
|---|---|---|---|---|---|
1|Accessing URL in all browsers|LP_1|To check the website URL redirection to the site with valid URL.||User should be redirected to the Landing page/Home page of Readyresponders Network|
|||LP_2|To check the website URL Redirection to the site with Invalid URL.||User should be redirected to 404 error page.|
|2|When user is on RRN Landing page|LP_3|To check the design of landing page is as per PSD |N/A|"When user is scrolling through RRN Landing page, Following sections should be visible<br/>1. Header<br/> 2. Hero Image with Text and Sign Up form<br/>3. Sticky Contact Us CTA at page fold<br/>4. Featured Blog Section<br/>5. Because We Are Better Together Section<br/>6. Whats Under The Hood section<br/>7. Our Partner Section <br/>8. Footer"|
|3|Check the position of Sign Up and Sign In link|LP_4|To check the position of Sign Up and Sign In link.|N/A|The position of Sign Up and Sign In link should be at the top right corner of the page.|
|4||LP_5|To check the clickability of the Sign up link in the header section|N/A|User should get redirected to the Sign Up page.|
|5|Check the clickability of Sign Up and Sign In link|LP_6|To check the clickability of the Sign In link in the header section|N/A|User should get redirected to the Sign In page.|
|6|Check alignment|LP_7|To check the alignment of Sign Up CTA|N/A|1. Sign Up CTA should be aligned with rest of the form fields as shown in the design.<br/>2. "SIGN UP" text should be aligned to the center of the CTA."|
|7|Check hover effect|LP_8|To check hover effect on Sign Up CTA|N/A|"On hover, user should be able to observe following effects:<br/>1. CTA color should change to white.<br/>2. CTA text ""SIGN UP"" color should change to yellow.<br/>3. CTA should have a yellow border. "<br/>|
|8|When user fills Sign Up Form|LP_9|To check Sign up functionality with valid inputs|"First name - Cynthia<br/>Last name - Toomey<br/>Email - test@gmail.com"|A pop up message should be displayed. |
|||LP_10|To check Sign up functionality with invalid inputs|First name - &%&%%*<br/> Last name - only alphabets no special character<br/>Email - test.test.com|Error message should be displayed below fields with invalid inputs and the field should highlight in red color.|