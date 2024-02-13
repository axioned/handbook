---
id: root-cause-analysis
title: Root Cause
sidebar:
  label: Root Cause
  order: 12
tags: [root cause, cause]
---

# **Root Cause Analysis**

**Client: [Client Name]**

**Project Name: [Project Name]**

**Prepared by: [Your Name]**

**Incident Date: [Incident Date]**


# **Problem statement**
[Insert problem statement here]

# **Issues found** 

|**#**|**Issue**|**Last worked on**|**To be fixed by**|
| :- | :- | :- | :- |
|1|<p>Dropdown formatting lost in Excel</p><p></p>|Oct 31|Fixed on Jan 21|
|2|Job update message shouldn't occur|Nov 5|Fixed on Jan 22|
|3|New projects not refreshing on the dashboard in IE11|Oct 31|Could not replicate|
|4|Broken image (image id="blah")|Nov 1|Fixed on Jan 23|

Last regression performed on: Nov 15.

**Root causes**

Issues were missed by the team while performing the regression mid-November (Nov 15). 

|**#**|**Issue**|**Cause**|
| :- | :- | :- |
|1|<p>Dropdown formatting lost in Excel</p><p></p>|<p>- Team missed confirming if the dropdown values are getting fetched post downloading the excel from dashboard. This was missed for each excel file/job.</p><p>- No test case had been maintained regarding this functionality.</p>|
|2|Job update message shouldn't occur|<p>- Incorrect coding: Session management was not done in a correct way. User was getting the Job update message even if he was not completing the flow. </p><p>- This was missed during self QA and regression. </p>|
|3|<p>New projects not refreshing on the dashboard in IE11</p><p>(We could not replicate this issue yet. [Team Member] also did not face this. [Team Member] to confirm with the end client as [he/she] is still facing the issue)</p>|- Not Applicable|
|4|Broken image (image id="blah")|<p>- Incorrect coding: A blank space was getting added in the source tag while editing the job.</p><p>- Missed in self QA, and testing.</p>|


**Corrective actions**


|**#**|**Actions**|**Why required**|**Owner**|**To be verified by**|**Timeline to execute from/by**|
| :- | :- | :- | :- | :- | :- |
|1|<p>Regression to be performed every 15 days on overall UHCQC as a part of retainer</p><p>*(Team Member] to confirm).*|<p>This would ensure the end client doesn't catch any issues post Phase III is made live.</p><p></p><p>To make sure code change does not introduce issues/defects into the existing functionality.</p>|[Your Name]|<p>[Team Member]</p><p>- To verify if regression is being performed or not.</p><p>-To verify overall working of the site post fixes and regression. (This would be a basic testing to confirm if all high-level functionalities are working as expected)</p>|From next retainer month onwards, starting Feb-Mar cycle. |
|2|Centralize the test cases for all the three phases. Currently separate list is maintained for all 3 phases and few test cases are missing like dropdown format. Centralizing them would help the team to perform regression and not to miss any issue. Also missed test cases would be added while doing this||[Your Name]|[Team Member]<p>-To sign off the test cases</p>|<p>By Feb 6</p><p>After 28th (Post go-live of Phase III)</p>|
|3|Mandatory internal UAT.|To confirm each ticket is passed from QA and can be moved to UAT|[Team Member]/[Team Member]|-|From next retainer month onwards, starting Feb-Mar cycle.|
|4|<p>Unit testing:</p><p>One time effort of 30 hrs (from Feb-Mar month retainer hours) can be used to achieve this for the existing site functionalities.</p><p>To start with we can write with 8-10 major functionality including any that has broken down recently. </p><p>Listing a few for example</p><p>- To confirm if sorting functionality is working for Dashboard and User Accounts.</p><p>- To confirm if any updates/changes on Product Grid/Rate sheet Template are getting reflected on PDF.</p><p>- To confirm if select(Dropdown) each functionality is working as expected on the PDF.</p><p>- To confirm if a user clicks on Save and Download CTA, the pdf should get downloaded.</p><p></p><p>*(Team Member] to confirm. If this gets approved, going forward for every ticket, dev efforts will include unit testing efforts (approximately 15-20% of dev hours)*</p>|<p>- To reduce defects in the newly developed features or reduce bugs when changing the existing functionality</p><p>- To cover several scenarios (positive/negative) in an automated manner, given most of the processing happens in the backend.</p><p>- To allow the product to scale in an easier manner.</p>|[Team Member]|[Team Member]|From next retainer month onwards, starting Feb-Mar cycle.|
|5|Proper Git structure and commits|<p>- To have distinct branches to manage different instances for all phases.</p><p>- To see the last commit done on a functionality which would help in further investigation</p>|[Team Member]|[Team Member]|From next retainer month onwards|
|6|Code reviews for each ticket|To meet the coding standards|[Team Member]|-|From current fixes onwards|
