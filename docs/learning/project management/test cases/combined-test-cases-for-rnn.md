---
id: combined-test-cases-for-rnn
title: Combined Test Cases For RNN
sidebar_label:  Combined Test Cases For RNN
sidebar_position: 7
tags: []
---

| SR NO. | Test Scenario | Test Case ID | Test Case|Pre-requisite| Steps to Test| Expected Result  |
|---|---|---|---|---|---|---|
|1|When user is accessing Navigation menus from any page on Ready Responders Network site.|MD_1|Verify clickability of navigation menus|User must be logged in to RRN Website|Click on any of the navigation menu.|1. Following subnavigation menu list for respective menu should be displayed OR User should be redirected to respective page:<br/>a. Disaster Reports<br/>- Disaster Situational Report<br/>- Organization requesting volunteers<br/>- Survivors Needs Intake form<br/>- After action notes<br/>b. Groups<br/>- View<br/>- Create New<br/>c. Blogs - View<br/>- Create New<br/>c. File Depot - User should be redirected to File Depot page.<br/>d. Glossary - User should be redirected to Glossary page.<br/>e. Connect - Contact Us <br/>- RRN Members|
|2|When user is accessing My Dashboard page |MD_2|Verify clickability of "My Accepted Opportunity" menu|User must be on My Dashboard page|Click on "My Accepted oppotunity" menu on My Dashboard page.|Following two subnavigation menus should be displayed to the user:<br/>- Organization requesting volunteers<br/>- Survivors Needs Intake|
|||MD_3|Verify clickability of "My Communication Messages/Contact" menu|User must be on My Dashboard page|Click on "My Communication Messages/Contact" menu on My Dashboard page.|1. User should be redirected to "My Communication Messages/Contact" page.<br/>2. On "My Communication Messages/Contact" page, user should be on COMMUNICATION MESSAGES tab.|
|||MD_4|Verify clickability of "Invite Statistics" menu|User must be on My Dashboard page|Click on "Invite Statistics" menu on My Dashboard page.|1. User should be redirected to "Invite a Friend" page.<br/>2. On "Invite a Friend" page, user should be on INVITATIONS STATUS tab.|
|||MD_5|Verify clickability of "My Calendar" menu|User must be on My Dashboard page|Click on My Calendar menu on My Dashboard page.|User should be redirected to Calendar view of current month.|
|||MD_6|Verify Clickability of Add Event CTA|User must be on My Dashboard page|Click on "Add Event" CTA present next to My Calendar menu.|User should be redirected to Add Event page.|
|||MD_7|Verify clickability of "View More" CTA on RRN News section.|User must be on My Dashboard page|Click on "View More" CTA on RRN News section on My Dashboard page.|User should be redirected to "Disaster Situational Report" listing page.|
|||MD_8|Verify clickability of "View More" CTA on Recent Blogs section.|User must be on My Dashboard page|Click on "View More" CTA on Recent Blogs section on My Dashboard page.|User should be redirected to "PUBLIC BLOG FEED" page.|
|||MD_9|Verify clickability of any entry present in My Groups section.|User must be on My Dashboard page|Click on any entry present in My Groups section on My Dashboard page.|User should be redirected to Groups page.|
|||MD_10|Verify clickability of any entry present in My Files section.|User must be on My Dashboard page|Click on any entry present in My Files section on My Dashboard page.|User should be redirected My Files page.|
|||MD_11|Verify clickability of "View More" CTA on File Depot section.|User must be on My Dashboard page|Click on "View More" CTA on File Depot section on My Dashboard page.|User should be redirected to "FILE DEPOT" page.|
|3|When user is accessing QUICK LINKS from any page on Ready Responders Network site|MD_12|Verify clickability of QUICK LINKS section |User must be logged in to RRN Website|Click on QUICK LINKS section present on left hand sidebar of the page|Navigation menu list containing following menus should slide out:<br/>1. MY DASHBOARD<br/>2. My SKILLS AND ACCOUNT SETTINGS<br/>3. MY DISASTER REPORTS<br/>4. MY ORGANIZATIONAL FORMS<br/>5. MY INDIVIDUAL AND FAMILY FORMS<br/>6. INVITE A FRIEND<br/>7. FAQs|
|||MD_13|Verify clickability of navigation menus in QUICK LINKS section |User must be logged in to RRN Website|1. Click on QUICK LINKS section present on left hand sidebar of the page<br/>2. Click on any menu from QUICK LINKS.|"User should be redirected to respective page of the menu as listed down below:<br/>1. MY DASHBOARD page<br/>2. My SKILLS AND ACCOUNT SETTINGS page<br/>3. MY DISASTER REPORTS page<br/>4. MY ORGANIZATIONAL FORMS page<br/>5. MY INDIVIDUAL AND FAMILY FORMS page<br/>6. INVITE A FRIEND page<br/>7. FAQs page"|
|4|Accessing Groups from main navigation|
|||MD_14|To verify RRN member can access Groups from main navigation|User must be logged in to RRN Website.|1. Go to main navigation bar<br/>2. Click on "Groups" menu<br/>3. Click on "View"<br/>|User should be redirected to Available Groups page.|
|||MD_15|To verify that RRN member can view detail page of a group|User must be logged in to RRN Website.|1. Go to main navigation bar<br/>2. Click on "Groups" menu<br/>3. Click on "View"<br/>4. Click on "View More" option on any group (eg. 2017 Boots on the Ground Exercise).|User should be redirected to detail page of "2017 Boots on the Ground Exercise" group.|
|||MD_16|To verify that RRN member is able to join a group|User must be logged in to RRN Website.|1. Go to main navigation bar<br/>2. Click on "Groups" menu<br/>3. Click on "View"<br/>4. Click on "View More" option on any group (eg. 2017 Boots on the Ground Exercise).<br/>5. Click on "Join a Group" CTA present in Created By section.|1. Email notification should be sent to Admin of the "2017 Boots on the Ground Exercise" group.<br/>2. A notification pop up should be displayed to user.<br/>3. "Members" count on group detail page should get increased by one.<br/>4. The group name should be reflected in "My Groups" section on "My Dashboard" page of the user.<br/>5. RRN Site Admin should receive email notification.<br/>|
|||MD_17|To verify that user is able to "Add news" to a group|User must be a member of the group.|1. Click on QUICK LINKS section present on left hand sidebar of the page<br/>2. Click on "My Dashboard" menu<br/>3. Scroll down to "My Groups" section<br/>4. Click on any group (eg. 2017 Boots on the Ground Exercise)<br/>5. On 2017 Boots on the Ground Exercise Group detail page, Scroll down to "Latest News" section<br/>6. Click on "Add News" link<br/>7. Fill the "Disaster Situational Report" and click on Submit.|1. A pop up notification should be displayed to the user. (eg. Your form is successfully submitted.)<br/>2. Email notification should be sent to admin of the group. (eg. xyz RRN Member has Added news to xyz group)<br/>3. The new News entry should get added in "Latest News" table of the "2017 Boots on the Ground Exercise" group detail page.<br/>4. The Name of "Disaster Situational Report" should be reflected in ""RRN News"" section on "My Dashboard" page of the user.<br/>5. RRN Site admin should receive email notification.<br/>|
|||MD_18|To verify working of pagination for "LATEST NEWS" section|User must be on detail page of xyz group. (eg. 2017 Boots on the Ground Exercise)|1. Scroll down to "LATEST NEWS" section<br/>2. Click on "next" <br/>3. Observe the entries in ""LATEST NEWS"" section<br/>4. Follow #2 and #3 for "First", "Previous", "Last".<br/>|1. For "next", the next five entries should get loaded in "LATEST NEWS" section.<br/>2. For "Last", the last five entries should get loaded in ""LATEST NEWS"" section.<br/>3. For "First", the first five entries should get loaded in "LATEST NEWS" section.<br/>4. For "Previous", the previous five entries should get loaded in "LATEST NEWS" section.<br/>5. The respective page number should get highlighted in blue box below the table for every option.|
|||MD_19|To verify clickability of "View More" link on Latest blog section.|User must be on detail page of xyz group. (eg. 2017 Boots on the Ground Exercise)|1. Scroll down to "LATEST BLOG" section<br/>2. Click on "View More" link present at the top right corner of "LATEST BLOG" section.|User should be redirected to Blogs listing page of xyz group (eg. 2017 Boots on the Ground Exercise)|
|||MD_20|To verify that user is able to create a new blog in xyz group.|User must be a member of the group.|1. Scroll down to "LATEST BLOG" section<br/>2. Click on "Add New Blog" link present at the top right corner of "LATEST BLOG" section<br/>3. Fill title and body fields with some text<br/>4. Add images into body.<br/>5. Select appropriate "Publish Blog To" button<br/>6. Click on SAVE.|1. A pop up notification should be displayed to the user. (eg. Your blog is successfully submitted.)<br/>2. Email notification should be sent to admin of the group. (eg. xyz RRN Member has Created a new blog to xyz group)<br/>3. The new New blog entry should get added in "Latest Blogs" table of the "2017 Boots on the Ground Exercise" group detail page.<br/>4. The New blog entry should be displayed in "Recent Blogs" section on ""My Dashboard"" page of the user.<br/>5. RRN Site admin should receive email notification.|
|||MD_21|To verify that user is able to create a new file in xyz group.|User must be a member of the group.|1. Scroll down to "LATEST FILES" section<br/>2. Click on "Add New File" link present at the top right corner of "LATEST File" section<br/>3. Fill file name and description fields with some text<br/>4. Upload a new file of valid file type.<br/>5. Select appropriate "Publish File To" button<br/>6. Click on SAVE.<br/>|1. A pop up notification should be displayed to the user. (eg. Your file is successfully submitted.)<br/>2. Email notification should be sent to admin of the group. (eg. xyz RRN Member has Uploaded a new file to xyz group)<br/>3. The new New blog entry should get added in "Latest Files" table of the "2017 Boots on the Ground Exercise" group detail page.<br/>4. The New File entry should be displayed in "My Files" section on "My Dashboard" page of the user.<br/>5. RRN Site admin should receive email notification.<br/>|
|||MD_22|To verify working of pagination for "LATEST FILES" section|User must be on detail page of xyz group. (eg. 2017 Boots on the Ground Exercise)|1. Scroll down to "LATEST FILES" section<br/>2. Click on "next"<br/>3. Observe the entries in "LATEST FILES" section<br/>4. Follow #2 and #3 for "First", "Previous", "Last".|1. For "next", the next five entries should get loaded in "LATEST FILES" section.<br/>2. For "Last", the last five entries should get loaded in "LATEST FILES" section.<br/>3. For "First", the first five entries should get loaded in "LATEST FILES" section.<br/>4. For "Previous", the previous five entries should get loaded in "LATEST FILES" section.<br/>5. The respective page number should get highlighted in blue box below the table for every option.<br/>|
|||MD_23|To verify that RRN Member is able to Create new event to xyz group|User must be a member of the group.|1. Go to main navigation bar<br/>2. Click on "Groups" menu<br/>3. Click on "View"<br/>4. Click on "View More" option on any group (eg. 2017 Boots on the Ground Exercise)<br/>5. Click on "Add Event" CTA present in right section at the top of the page.<br/>6. Fill all the mandatory fields with valid data<br/>7. Select any "Publish Event To" option<br/>8. Click on ADD EVENT.|1. The event should get added to My calendar.<br/>2. Group Admin should receive notification"|
|5|Contact Us|
|||MD_24|To verify working of Contact Us form functionality|User must be logged in to the site.|1. Go to main navigation bar<br/>2. Click on "CONNECT" menu<br/>3. Click on Contact Us <br/>4. Fill All the mandatory fields with valid data<br/>5. Check "Send yourself a Copy" checkbox<br/>6. Click on "SEND MESSAGE" button.<br/>|1. A pop up notification should be displayed to the user. (eg. Your message is successfully submitted.)<br/>2. RRN Site admin should receive email notification.<br/>3. User should recieve acknowledgement mail. (eg. Thank you for Contacting us)<br/>4. User should receive a copy of email with the subject as entered in the Contact Us form.|
|6|RRN Members|
||Working of Request VBC functionality|MD_25|To verify that user is able to send VBC request to another RRN member|User must be logged in to the site.|1. Go to main navigation bar<br/>2. Click on "CONNECT" menu<br/>3. Click on RRN Members <br/>4. Go to the entry of person to whom VBC request is to be sent<br/>5. Click on "REQUEST VBC" link.|1. A pop up notification should be displayed to the user. (eg. Your VBC request is sent successfully.)<br/>2. The xyz person to whom VBC request is sent should receive email notification. (eg. abc person has requested for your VBC)<br/>3. The VBC request should get displayed in "PENDING REQUESTS" section in CONTACT tab on MY COMMUNICATION MESSAGES/CONTACT page|
|||MD_26|To verify that VBC request to another RRN member is approved by the member|User must be logged in to the site.|||