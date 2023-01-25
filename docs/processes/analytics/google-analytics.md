---
position: 1
id: GA4
title: Google Analytics
sidebar_label: Google Analytics
tags: [analytics, google analytics, ga4, gtm, ga events]
---

## Overview

Google Analytics is a web analytics service that provides statistics and basic analytical tools for search engine optimization (SEO) and marketing purposes. The service is part of the Google Marketing Platform and is available for free to anyone with a Google account.

Google Analytics is used to track website performance and collect visitor insights. It can help organizations determine top sources of user traffic, gauge the success of their marketing activities and campaigns, track goal completions (such as purchases, adding products to carts), discover patterns and trends in user engagement and obtain other visitor information such as demographics

## Google Analytics 4 (GA4) Implementation

1. [Difference between GA4 and UA analytics](https://docs.google.com/document/d/13o8VVuJW-ba7zp-k2lnMUxbh5yu5EyGKRrH4kuWQONA/edit)
2. [Benefits of GA4 over GA3(aka Universal Analytics)](https://docs.google.com/document/d/1G58Reirj2WPvxmK9Zt0tX8csnBOB29WN_NEZW_744hg/edit?usp=sharing)
3. GA4 Setup
    - Step 1: [Create a Google Analytics Account and setup property](https://docs.google.com/document/d/1MjOlT4DV3VTScfsYtQLNDW5R0KjO2c5_6y8TGLnqQec/edit).
    - Step 2: [Upgrade UA to GA4](https://docs.google.com/document/d/17yegQqbn3C8DHsKE3vgTs6Wb0ytm0sv1w5VSRqbLEwI/edit?usp=sharing) 
4. Default events that are tracked in GA4
    - **There are three types of event parameters in Google Analytics 4**
        1. Automatically Collected Parameters
        2. Custom Parameters
        3. User Properties
5. Automatically Collected Parameters. Some parameters are automatically collected by GA4. Such parameters are called automatically-collected parameters.
    - **For example, by default, GA4 records the following parameters with every event:**
      1. language
      2. page_location
      3. page_referrer
      4. page_title
      5. screen_resolution
6. **How to see automatically-collected parameters in GA4 reports?**
- **Follow the steps below:**
  - **Step-1**: Navigate to your GA4 reporting view.
  - **Step-2**: Click on ‘Events’ (under ‘Engagement’).

    ![How to see automatically collected parameters in GA4 reports Snap 1](../analytics/analytics-image/How%20to%20see%20automatically%20collected%20parameters%20in%20GA4%20reports%20Snap%201.png)
  - **Step-3**: Scroll down and then click on an event name. Let’s click on the ‘page_view’ event.

    ![How to see automatically collected parameters in GA4 reports Snap 2](../analytics/analytics-image/How%20to%20see%20automatically%20collected%20parameters%20in%20GA4%20reports%20Snap%202.png)
  - we should now see the detailed report about the ‘page_view’ event.
    ![How to see automatically collected parameters in GA4 reports Snap 3](../analytics/analytics-image/How%20to%20see%20automatically%20collected%20parameters%20in%20GA4%20reports%20Snap%203.png)
  - **Step-4**: Click on the ‘PARAMETER NAME’ drop-down menu on the right-hand side.
    ![How to see automatically collected parameters in GA4 reports Snap 4](../analytics/analytics-image/How%20to%20see%20automatically%20collected%20parameters%20in%20GA4%20reports%20Snap%204.png)
  - **Step-5**: Scroll down the drop-down list and then we should be able to see all the automatically collected parameters.
    ![How to see automatically collected parameters in GA4 reports Snap 5](../analytics/analytics-image/How%20to%20see%20automatically%20collected%20parameters%20in%20GA4%20reports%20Snap%205.png)
7. How to track events based on default parameters and custom parameters for Custom events - Custom Definitions
    - **Create new dimensions and metrics from event parameters**
      - We can set up custom dimensions and metrics that get their values from the event parameters that we collect for your property. 
      - We can create an Author dimension that gets its values from the **author** parameter and an Article_Length metric that gets its value from the **number_of_pages** parameter.
    - **Event and user scope**: A custom dimension has either an event scope or user scope.
      - Event scope: In the example above, we would create the Author dimension to have an event scope.
      - User scope: Create user-scoped custom dimensions to identify static or slowly changing attributes of your users, such as "spender=true", "profession=engineer", or "favorite_team=Real Madrid".
      - A custom metric always has an event scope.
    - **Limits**
      - We can create up to.
        - 50 custom dimensions and 50 custom metrics per property
        - 25 uniquely named user-scoped custom dimensions
      - If we have reached your quota but need to create new custom dimensions and/or metrics, we can archive the ones we are no longer using.
      - To see the total number of custom dimensions and metrics you've created, click Custom definitions under Configure (in the left navigation), then click Quota information (top right).
    - **Create a custom dimension**: Click Custom definitions under Configure (in the left navigation), then click Create custom dimensions:
      - Enter the Dimension name.
      - Select a Scope from the drop-down menu (Event or User).
      - Enter a Description for your custom dimension.
      - Select an Event parameter (event scope) or User property (user scope) from the list or enter the name of a parameter/property you'll collect in the future.
      - Click Save.
      - we will see a value of "not set" for a custom dimension during the first 48 hours.
    - **Create a custom metric**: Click Custom definitions under Configure (in the left navigation), click the Custom metrics tab, then click Create custom metrics:
      - Enter Metric name.
      - Enter a Description for your custom metric.
      - Select an Event parameter from the list or enter the name of a parameter you'll collect in the future.
      - Choose a Unit of measurement from the drop-down menu.
        When we select Currency as the unit of measure, we must also identify the custom metric as a cost and/or revenue metric. When we identify the custom metric as a cost and/or revenue metric, then we can restrict access to it when we configure user roles that restrict access to cost and/or revenue metrics.
      - Click Save.
      - It takes 24-48 hours for custom metrics to be populated with data.
    - **Edit a custom dimension or metric**: Click Custom definitions under Configure (in the left navigation), click the Custom metrics tab, then click Create custom metrics:
      - Click Custom definitions under Configure (in the left navigation)
      - In the row for the dimension or metric, click More, then click Edit.
      - Make the changes we want, then click Save.
    - **Archive a custom dimension or metric**: Archiving a custom dimension or metric affects any audiences, explorations, or segments that are based on that dimension or metric.
      - Click Custom definitions under Configure (in the left navigation)
      - In the row for the dimension or metric, click , then Archive. we see a list of the other entities in Analytics (e.g., audiences, explorations) that use the custom definition.
      - This change can't be undone and the corresponding data can't be restored.
    - **Audiences**
      - When we archive a custom dimension or metric that is used in the definition of an audience, that audience definition becomes invalid and the audience doesn't accumulate any snew users.
      - Historical data for the audience is preserved, but no new data is generated once the audience becomes invalid.
      - we cannot export invalid audiences to other products (e.g., Google Ads, Optimize).
      - If you've previously exported the audience to other products, the audience will continue to function as expected. 
      - However, since the audience is not accumulating new users, the user count will drop as the membership duration expires for existing users until the audience contains no users.






