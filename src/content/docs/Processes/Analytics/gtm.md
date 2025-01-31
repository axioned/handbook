---
position: 1
id: GTM
title: Google Tag Manager
sidebar:
  label: Google Tag Manager
tags: [analytics, google analytics, ga4, gtm, ga events]
---

A standardized GTM naming approach ensures clarity, scalability, and easy debugging. Below are the conventions for different GTM components.  

#### **🔹 Best Practices**
✅ Use **PascalCase** or **snake_case** for readability (`EventTracking` or `event_tracking`).  
✅ Use **clear, descriptive names** to indicate purpose (avoid unnecessary abbreviations).  
✅ Include **prefixes for categorization** (e.g., `GA4_`, `Meta_`, `GTM_`).  
✅ Maintain **consistency** across all tags, triggers, and variables.  
✅ Group related items **inside folders** for better organization.  
✅ Maintain a centralized documentation sheet for consistency and tracking.  

---


#### **📌 Tags**  
**Format:** `[Tool]_[Type]_[Event]_[Details]`  
**Example:**  
- `GA4_Event_FormSubmission` → GA4 event for form submission  
- `Meta_Conversion_Purchase` → Meta Pixel purchase conversion  
- `GTM_CustomJS_UserTracking` → Custom JavaScript for user tracking  

#### **📌 Triggers**  
**Format:** `[Type]_[EventName]_[Condition]`  
**Example:**  
- `Click_SubmitButton_AllPages`  
- `PageView_ThankYouPage`  
- `Scroll_50Percent_Homepage`  

#### **📌 Variables**  
> ##### **💡 Data Layer Variables (DLV)**  
> **Format:** `DLV_[VariableName]`  
> **Example:**  
> - `DLV_PageCategory`  
> - `DLV_UserRole`  
>
> ##### **💡 JavaScript Variables (JSV)**  
> **Format:** `JSV_[Function]_[Detail]`  
> **Example:**  
> - `JSV_ClickText`  
> - `JSV_UserAgent`  
>
> ##### **💡 URL Variables**  
> **Format:** `URL_[ParameterName]`  
> **Example:**  
> - `URL_UtmSource`  
> - `URL_Referrer`  
>
> ##### **💡 First-Party Cookies**  
> **Format:** `Cookie_[CookieName]`  
> **Example:**  
> - `Cookie_UserConsent`  
> - `Cookie_SessionID`  

#### **📌 Event Parameters (GA4, Meta, Custom)**  
**Format:** `[tool]_[parameter_name]`  
**Example:**  
- `ga4_event_category`  
- `ga4_event_label`  
- `meta_purchase_value`    

#### **📌 Consent Mode & Privacy Compliance Tags**  
**Format:** `Consent_[Type]_[Action]`  
**Example:**  
- `Consent_OneTrust_CDNScript`  
- `Consent_CCPA_TrackingEnabled`  
- `Consent_GDPR_AnalyticsEnabled`  

#### **📌 Custom Dimensions & Metrics**  
**Format:** `[Tool]_[Scope]_[DimensionName]`  
**Example:**  
- `GA4_User_MembershipType`  
- `GA4_Session_DeviceType`  

#### **📌 Folders**  
**Format:** `[Category]_[Detail]`  
**Example:**  
- `GA4_TrackingEvents`  
- `Meta_PixelEvents`  
- `GTM_CustomScripts`  

