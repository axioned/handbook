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

1. **Difference between GA4 and UA analytics**

  Google Analytics 4 is not an upgrade to Universal Analytics. It is a completely different new version of Google Analytics, it works on event-driven based models, and comes with a different set of reports.
    - **Reporting Interface**
      - There are different sets of reports in your GA4 view, and a limited number of reports are generated. As many of the reports are generated only when we start tracking events.
      - The reporting interface of the GA4 view looks similar to that of Google Analytics for Firebase (because GA4 is built on Firebase analytics). 
    - **Measurement model**
      - GA3 (aka Universal Analytics) uses the measurement model **based on sessions and pageviews**. Whereas, GA4 uses the measurement model based on **events and parameters**. 
      - GA3 uses a **session-based model** to track data. GA4 uses an **event-based model** to track data.  
    - **Tracking IDs**
      - GA4 use the **measurement ID**.
      - GA4 use the **tracking ID**. 
    - **For More details please refer this** [doc](https://docs.google.com/document/d/13o8VVuJW-ba7zp-k2lnMUxbh5yu5EyGKRrH4kuWQONA/edit)
    
2. **Benefits of GA4 over GA3(aka Universal Analytics**

  Google Analytics 4 (GA4) (also referred to as ‘apps + web’) is the latest version of Google Analytics. 
  GA4 is much more advanced and follows an event-based architecture. Unlike Universal Analytics where we have page views and events, GA4 tracks everything as an event.
  For example, page views, session start, transactions, etc. are sent as events in GA4. So everything we track in GA4 is an event.
    - **GA4 provides a platform for both website and mobile app**
      - One of the biggest benefits of GA4 is that we can use it for your website and app, as well as both website and mobile app together.
      - Under one property we can have multiple data streams like Android, iOS and web.
    - **GA4 user interface is much more user-centric**
      - In Universal Analytics, we have user buckets such as **audience**, **acquisition**, **behavior**, and **conversion**.
      - Whereas in GA4 we have user buckets like **acquisition**, **engagement**, **monetization**, and **retention**. These buckets are more aligned with user-oriented reports and marketer’s goals. 
    - **For More details please refer this** [doc](https://docs.google.com/document/d/1G58Reirj2WPvxmK9Zt0tX8csnBOB29WN_NEZW_744hg/edit?usp=sharing)

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
        ![How to see automatically collected parameters in GA4 reports Snap 1](/src/assets/How%20to%20see%20automatically%20collected%20parameters%20in%20GA4%20reports%20Snap%201.png)
      - **Step-3**: Scroll down and then click on an event name. Let’s click on the ‘page_view’ event.
        ![How to see automatically collected parameters in GA4 reports Snap 2](/src/assets/How%20to%20see%20automatically%20collected%20parameters%20in%20GA4%20reports%20Snap%202.png)
      - we should now see the detailed report about the ‘page_view’ event.
        ![How to see automatically collected parameters in GA4 reports Snap 3](/src/assets/How%20to%20see%20automatically%20collected%20parameters%20in%20GA4%20reports%20Snap%203.png)
      - **Step-4**: Click on the ‘PARAMETER NAME’ drop-down menu on the right-hand side.
        ![How to see automatically collected parameters in GA4 reports Snap 4](/src/assets/How%20to%20see%20automatically%20collected%20parameters%20in%20GA4%20reports%20Snap%204.png)
      - **Step-5**: Scroll down the drop-down list and then we should be able to see all the automatically collected parameters.
        ![How to see automatically collected parameters in GA4 reports Snap 5](/src/assets/How%20to%20see%20automatically%20collected%20parameters%20in%20GA4%20reports%20Snap%205.png)
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
        1. 50 custom dimensions and 50 custom metrics per property
        2. 25 uniquely named user-scoped custom dimensions
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

## GTM using GA4

#### Enable basic data collection

To enable basic data collection of events (including pageview and other **automatic** and **enhanced measurement** events) for a web data stream, you'll need to deploy the Google Analytics: GA4 Configuration tag to every page that needs to be measured. The tag initializes Google Analytics for your property, sets Google Analytics cookies, and sends automatic and enhanced measurement events (including pageviews).

To create a GA4 Configuration tag:

1. Click Tags **>** New.
2. Click Tag Configuration.
3. Select Google Analytics: GA4 Configuration.
4. Enter your measurement ID.

![GTM using GA4 Snap 1](/src/assets/GTM%20using%20GA4%20Snap%201.png)

5. Optional: Add any parameters you'd like to configure in **Fields to Set**. Use recommended event parameter names for best results.

![GTM using GA4 Snap 2](/src/assets/GTM%20using%20GA4%20Snap%202.png)

6. Optional: Add any custom user properties that you'd like to configure in User Properties. Note: Analytics automatically logs some user properties. We can set up to 25 additional **user properties** per Google Analytics 4 property.

![GTM using GA4 Snap 3](/src/assets/GTM%20using%20GA4%20Snap%203.png)

7. Optional: Use **Advanced Settings** to set a **Tag Firing Priority** or use **Tag Sequencing** to help ensure that the Configuration tag fires before any other event tags that require it.

![GTM using GA4 Snap 4](/src/assets/GTM%20using%20GA4%20Snap%204.png)

8. Click **Triggering** and select appropriate triggers that would cause the tag to fire, e.g. "All Pages", so that the configuration tag fires on all pages of your website.
9. Save the tag configuration and publish your container.

### Events creation

  In a Universal Analytics property implemented via gtag.js ("UA-XXXXXXXX"), events are implemented as a separate hit type, using the dimensions Event Category, Action, and Label and the metric Event Value. When collected, they appear in your reports and there are no limits to the number of different events, dimension and metric values.
  In a Google Analytics 4 property, every "hit" is an "event," meaning there is no longer a distinction between hit types.

#### Types of events in a Google Analytics 4 property

  Google Analytics 4 events fall into four categories: **automatically collected events, enhanced measurement, recommended events, and custom events**.
  
  More details about event can be found [here](https://docs.google.com/document/d/1OuYQOoA72anAWerHtlpfG4vND5SKMN03zh9s_cL_dtI/edit)

#### Additional implementation guidance doc link can be found - [here](https://docs.google.com/document/d/1I3MZlWJ_eP14tSoILuX3tpObbTzO7x-y7QD6BcFDTP4/edit)
#### Adding GA4 to a site that already has universal analytics implemented (Keeping GA4 and UA active at same time) doc link can be found [here](https://docs.google.com/document/d/1Gw34_Y5tKe0_tIIra898XagswgwCy4F3UHahaFvAGmw/edit)
#### GA4 Dashboard description -  Read more on GA4 dashboard - [here](https://docs.google.com/document/d/1TjoMsjT0PxXB-nyHOuyFQF3XmPSdq_izd2Kwi7LbHKA/edit#heading=h.3cby2s638jwr)

## General Guidelines & Good Practices

1. GA/GTM Property ID should be implemented via code not through any plugins/3rd party libraries.
2. GA/GTM Property ID should be configured at WP-Config level (WP:defined constants for ID) or non-WordPress sites can use env files to store the GA/GTM IDs
3. Setting a Google Analytics Custom Alert that indicates/highlights if traffic is suddenly spiked/dropped by x% (recommended: 25%, but please see/read your traffic behaviour before you set a custom alert; or seek help from a senior)
4. It is highly recommended that all analytics + marketing scripts are added through GTM Container on the website avoid adding through code in the header section
5. Please make use of defer for such marketing and 3rd-party scripts while injecting in the GTM container.