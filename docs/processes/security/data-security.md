---
id: data-security
title: Data Security Policies and Procedures
sidebar_label: Data Security
tags: [Device Use Regulation, External Pen Drives, Using SSH/SFTP, Personal Devices, Internet Cable, Credentials and Systems Management, Data Security, Security Auditing Actions, Data Sharing, Project Closure, workstation usage, Device lost, Remote Access, VPN Policy, Technical Safeguards]
---

## Introduction

We expect all Axioned employees to read and follow the policies and procedures within this document.

The IT Admin team, Sagar Bisen and Ismile B, will work with the Axioned team to ensure that these policies and procedures are followed at all times. 

:::tip Disclaimer
This document contains information regarding policies, regulations, and rules of Axioned. If any breach or threat made by an employee, which can put business/project into risk, for that a proper investigation will take place and if any individual or team found violating the policy strict action can be taken.
:::

## 1. Purpose

Axioned will always try to stay secure from its sophisticated IT infrastructure and also want their employees to be aware regarding the IT threats. It only takes one employee opening a phishing email or letting a crook into the premises for a breach to occur. The purpose of information security policies is to prevent that, providing instructions for staff to follow in various scenarios.

The first step in reducing the role of human error in incidents is to establish an IT & Data Security policy for our employees that states the do's and don'ts of IT & Data security. 

The Axioned IT Team also wants to ensure that employees should get educated about policies, security rules and regulations and apply this to their daily work routine. 

**Key Contact Details:**

Email: it@axioned.com, privacy@axioned.com, security@axioned.com 
  1. Head of IT: Sagar, sagar@axioned.com
  2. Junior IT/Support: Ismile, ismileb@axioned.com 

:::tip Data/Security Incident Guidelines
Note: Data/Security Incident Response Guidelines can be found [**here**](https://docs.google.com/document/d/1FuH1U6Iv_bDVoLYbBk3zDgi1NYZkdpbIFBSJYUa0DIg/edit#) 
:::

## 2. The Importance of IT and Data Security

An IT & Data security policy is a statement, or a collection of statements, designed to guide employees’ behavior with regard to the security of company data, assets, IT systems, etc. 

These IT & Data Security Policies define the who, what, and why regarding the desired behavior, and they play an important role in an organization’s overall IT & Data security posture. 

IT & Data Security Policies should reflect the risk appetite of executive management and therefore serve to establish an associated security mindset within an organization.

IT & Data security Policies are important in an organization to bring some level of discipline in the employees who use the IT resources daily. Working with IT resources is always a threat to the IT Infrastructure, so IT & Data Security Policies are important in an organization to make sure our IT Infrastructure doesn’t get infected

## 3. Computer or Device Use Regulation

All devices, workstations, laptops, phones, etc., used by Axioned Employees should be used with careful consideration. 

Axioned Employees should take the necessary actions and measures to ensure that any devices that they use in association with their work do not get infected by foreign threats/malware or other such viruses. 

Specific actions that Axioned Employees are expected that have been documented here: xxx

In case of any violation or lack of adherence to the rules and regulations, whether intentional or unintentional, strict action will be taken against the concerned team or individual.

### 3.1 External Pen Drives

Using external or personal pen drives is prohibited. 

If necessary, please use an official Axioned office pendrive, which can be obtained from the Axioned IT Team. See [Key Contact Details:](https://docs.google.com/document/d/1k0iHnC5-R6GDJC69R-OzUSzVZzlrrfZRY2OxMesEUmM/edit#heading=h.ieetlqippr2)

**Threat this aims to address:**
  - Preventing foreign malware/viruses from entering into Axioned’s network, which can spread/disrupt.

**Actions taken:** 

With respect to Axioned owned workstations/laptops:
  - USB storage is disabled on Linux & Windows systems
  - Anti-virus software (Windows Defender, Quick Heal) is ON (realtime active)
  - “Autorun USB storage” is disabled in Linux & Windows
  - Axioned The IT team actively monitors the system for any issues related to pendrive connectivity errors reported by employees, and performs physical checks as necessary to diagnose and resolve the issue.

### 3.2 Using SSH/SFTP
While downloading anything (files or data) from any servers, e.g. AWS or Client’s server, it’s expected that Axioned employees will do as follows:

  - Always Use an SSH connection.
  - Use SFTP protocol.
  - If in doubt, contact the [Axioned IT Team](https://docs.google.com/document/d/1k0iHnC5-R6GDJC69R-OzUSzVZzlrrfZRY2OxMesEUmM/edit#heading=h.ieetlqippr2) for help.

### 3.3 Personal Devices

Personal devices like laptops brought to Axioned premises for work purpose or for any reason, please make sure you inform the IT Team with the reason for bringing the device to office.
  - **Threats**
    -  Office work can be carried out on a personal device, which is indirectly having Axioned data on a personal device.
  - **Action**
    - Security guard will log the personal device in the “Foreign device into Axioned premises“ log sheet.
    - Inform IT Team about personal devices bought by particular users.
    - The IT Team will collect information regarding the intention/reason behind bringing the device to Axioned Premises.
    - If IT Team found genuine reason, the user can keep the device with him if not then the device will be under IT Team custody.

### 3.4 Internet Cable

  - Do not hit the internet cable port or pull internet cable by your legs, it can permanently damage the port/cable. If such an incident occurs, strict action can be taken against it.
  - Don’t remove the internet cable from the assigned Axioned computer and insert it into your personal computer.

## 4. Credentials and Access to Systems Management:

### 4.1 Use Strong passwords

Always use a strong password generator when creating accounts at work. Use generators like [Norton Password Generator](https://my.norton.com/extspa/passwordmanager?path=pwd-gen) or [LastPass Generator](https://www.lastpass.com/features/password-generator#generatorTool).

### 4.2 Change passwords where necessary

The frequency of changing a password depends on what the passwords are used for. If it's used for Server access and if you have shared with someone, then definitely change/update is a must, ask IT Team to update the password and specify the reason for change.

### 4.3 Use 2-factor Authentication - Mandatory

Activating 2-factor authentication for any a/c is good and provides an extra shield to your a/c. Please just make sure to inform the IT Team phone/email-id used for setting up 2-way authentication for organization records. 

### 4.4 Store your credentials and keys securely

You can use a password manager to securely store your passwords, or use Google sheet to store and manage (update accordingly for any changes/new password) but make sure the sheet is only shared and owned by an individual and not open to everyone.

  - **Credential Auditing**
    - The IT Team conducts an audit of individual Client project credentials on a monthly basis.
    - IT Team ensures that every team member who works with tools has multi-factor authentication (MFA) or two-factor authentication (2FA) enabled where possible.
    - Ensure to set expiration date for temporary backups in google drive. How to do?
  - **Access Control**
    - Implement technical safeguards such as MFA and screensavers that lock to secure access to these systems.
    - Regularly monitor access logs to detect and prevent unauthorized access attempts.
    - Established policies/checklist for revoking access in a timely manner when team members leave or change roles.
  - **To be achieved**
    - Ensure that access to computers and systems used to access Client data is limited to authorized personnel, through VMs setup to access Client Servers, Tools, etc.
    - Implement best practices for storing and securing credentials, such as using password management tools and avoiding storing them in unsecured locations such as an excel spreadsheet or on a piece of paper. The team is currently following this to a certain extent, but it is recommended that they consider implementing a more robust process. 

## 5. Data Security

At Axioned we must always make sure that the data and information we’re working with - our own and our Clients - is protected and secured.

We wish to prevent any/all of the following with respect to our own and/or Client data:
- With respect to Client data/information: Only the formally/officially approved (via email) Axioned Employees should have access to such data
- With respect to Axioned data/information: Only Axioned employees should have access, unless specifically/formally approved otherwise

Data and information here can mean any of the following:
- Data/information we have access to via the platforms, tools or applications our Clients use - e.g. Google drive, Cloud Servers, JIRA, Slack, etc.
- Data/information we have access to via the platforms, tools or applications we/Axioned  use - e.g. Google drive, Cloud Servers, GoDaddy, etc.

### 5.1 Guidelines for Axioned Employees and Axioned IT Team

To ensure that Client data is properly secured and not misused by any unauthorized individuals, Axioned has established the following processes and best practices - designed to limit access, monitor usage, and prevent any security breaches.

  - **Goals & Objectives**
    - Ensure that Client data is only accessible to authorized Axioned team members working with the Client. Implement actions to limit/control access.
    - Formally notify Clients when access for a certain team member needs to be revoked. And ensure Client confirmation is received.
    - Ensure that authorized Axioned team members only have access to the data/information necessary to accomplish Client tasks. Nothing more.
    - Ensure authorized Axioned team members connect to a secured Axioned office VPN while working on critical Client data, platforms, tools or applications.

  - **Axioned IT Team - Data Security Auditing Actions**
    - Conduct regular audits to ensure that only authorized Axioned team members have access to Client data, platforms, tools or applications. See audit schedule/progress, [here](https://docs.google.com/spreadsheets/d/17q6aML7g3rTls3C9W8YtAh5eB2mB1JXAYxZ2jx4Wuaw/edit#gid=0)
    - Conduct regular server audits to identify any miss-placed Client data. Get the necessary Axioned team members involved to remove if no longer needed. See audit schedule/progress, [here](https://docs.google.com/spreadsheets/d/17q6aML7g3rTls3C9W8YtAh5eB2mB1JXAYxZ2jx4Wuaw/edit#gid=0)
    - Follow an employee exit checklist that includes revoking access and cleaning the employee's system.
    - Proactively get in touch with Axioned PMs at the start of each project/new Client relationship to gain project insights and suggest best practices for working with Client data.
      - Check-in bi-weekly (every 2 weeks) with the PM team via Slack to inquire about any new projects/new Client relationships. 
      - See audit schedule/progress, [here](https://docs.google.com/spreadsheets/u/0/d/1Ob6Fh5QTxqw_YKrN8l9u9bQU5vhrLyb8_quZEQxfcRI/edit)
    - Conduct monthly audit activities as required and use Axioned Basecamp to track actions and results. E.g. Basecamp tickets to track actions and results related to…
      - Data Security Audits
      - User Access Audits
      - Fix/Rectification Actions
      - Communication Actions

  - **Axioned IT Team - Data Destruction**
    - Once a project is completed, destroy any/all Client data stored on any Axioned devices. Check with the applicable Axioned team members and Client prior to destruction.
      - Check-in bi-weekly with the PM team via Slack to inquire about any projects/Client relationships that are ending and need this service.
    - Check-in bi-weekly with the PM team via Slack to inquire about any additional “one-off” requirements/suggestions with respect to any security and/or data security audits that the team feels might be needed. (These would be in addition to the actions that the Axioned IT Team is already taking above - “Axioned IT Team - Data Security Auditing Actions:”)

### 5.2 Guidelines for Data Security at Axioned

  - **Sharing of Data**
    - Sharing Axioned data to personal or external domains accounts is strictly prohibited.
    - If any document, sheet, file, or folder is found shared with an external user (other than Axioned), it should be removed immediately and reported to the IT team.
    - If the person who has discovered the shared data does not have access to fix it, they should seek assistance from the IT team.
    - In case of uncertainty, the person should check with the respective Project Manager or the IT team.

  - **Acceptable practices**
    - Cloning of the Git repository to work on the local system and pushing changes to the repository is acceptable.
    - Downloading data to work offline on tools is acceptable.

  - **Handling Client Data**
    - We ensure that data received from the Client for reference is only viewable and after work, the Client is asked to revoke access.
    - If data received from a Client needs to be modified, we attempt to obtain cloud editing access. We also make sure that data from the local system is deleted after work is completed.
    - Downloading/Uploading data from platforms is not allowed as it violates data security. Please note that a log is generated for every activity.

### 5.3 Data Deletion Management

As an IT software and QA service provider, it is important to ensure that Client data is not left around after the project is completed. This is especially important for both time-bound and retainer projects. The following processes and guidelines will ensure that data is properly deleted and security is maintained.

  - **Project Closure**
    - Once a project is completed, the project manager (PM) will send an email to the IT Team to initiate the project closure process.

  - **Checklist and Audits**
    - The IT Team will follow the project closure checklist, which includes audits of user GDrive and systems to ensure that all data is deleted when it is no longer needed.

  - **User Exit Checklist**
    - The IT Team will also follow the user exit checklist to delete/format user systems and check for any data that needs to be deleted.
    - Once the IT team completes the user exit checklist, they will send a final sign-off email to the HR team, indicating that the employee exit process can proceed. 

  - **Timely Implementation**
    - The IT Team will determine a timeline for implementation and assign an owner for this initiative.

  - **Best Practices Recommendation**
    - In addition to these processes, the IT Team may consider implementing best practices such as using password manager tools, periodic data audits, and establishing a data retention policy. These steps will help improve data security and minimize the risk of data breaches.

### 5.4 Additional pointers can be followed by authorized individuals for data security

  - Encryption/password-protection of file during data transfer/sharing: Implementing encryption of Client data stored in the system using password protected zip file, to provide an extra layer of security.
  - Access Control: Implementing strict access control measures such as multi-factor authentication tools and application of Clients to ensure that only authorized personnel can access Client data.
  - Training and awareness: Providing training to the team members working on Client data, to increase their awareness of the importance of data security and the measures in place to protect it.
  - These guidelines should be followed to ensure the security and proper storage of Client data by authorized persons within the organization.

## 6. Lock Computers And Devices

### 6.1 Device/workstation usage

Make sure you lock your workstation system when you leave your desk for calls, meetings, breaks etc. And also when you leave for the day please make sure your system is shutdown and the switch (power button below your desk) is OFF. 

Make sure to return the Devices/Laptop accessories to IT Team without fail, if lost please inform to IT Team, further investigation will be carried by IT Team

### 6.2 Device lost situation

If in case you lost Axioned devices like Laptop, Mobile, Testing device or Wifi Device, please immediately inform the IT Team. So that the IT Team can immediately take action like blocking, tracking or wiping data via online

### 6.3 Testing Device Usage

After using the Axioned testing devices make sure you return the device to the IT Team or keep it at the IT Team desk and make sure to make an entry of return in the “device management sheet”.

Do not change the testing device setting or lock password, if there’s something wrong please consult the IT Team.

## 7. Remote Access Policy

  The intent of this policy is to establish guidelines specifically pertaining to remote access to Axioned’s internal network. Preventing unauthorized access to company data from insecure networks is of utmost importance to Axioned. This policy is designed to ensure remote and/or traveling employees have the ability to securely connect to the corporate network without fear of threat and to provide the Company with an additional means of monitoring and controlling access to the internal network.

  The remote access will be provided to the employee working from home or can’t reach office under some circumstances  

  Axioned Member pls see Remote Access Policy [here](https://docs.google.com/document/d/1rhzYntLRHXscUGZhrUTFOuGvd7wYej8WZiBM4WOTkr0/edit)

## 8. Email/Communication Policy

  The Axioned emails are used for work purposes, @axioned.com email account is assigned to all individuals (eg: sagar@Axioned.com) and individuals are added to group email a/c is created accordingly to the project needs (eg: clientname@axioned.com). We want to ensure that our employees understand the limitations of using their email accounts.

### 8.1 Inappropriate use of company email
  
Our employees represent our company whenever they use their corporate email address. They must not

  - Sign up for illegal, unreliable, disreputable or suspect websites and services.
  - Send unauthorized marketing content or solicitation emails.
  - Register for a competitor’s services unless authorized.
  - Send insulting or discriminatory messages and content.
  - Intentionally spam other people’s emails, including their coworkers.
  - Should not subscribe to unwanted newsletters.

### 8.2 Appropriate use of corporate email
  
Employees are allowed to use their corporate email for work-related purposes with limitations. For example, employees can use their email to

  - Communicate with current or prospective Clients/project members.
  - Emails can a;so be used to sign-up for Client call (zoom, skype, gotomeeting, etc)
  - Sign up for newsletters, platforms and other online services that will help them with their skill growth, but also one should unsubscribe to such services once the work is done.
  - Register online classes or tutorials.
  - Download ebooks, guides and other content for their growth use as long as it is safe and appropriate.

## 9. VPN Policy

  In Axioned, the use of VPN is used to create a secure connection to Client server/network. But it is also possible that people can misuse it. To avoid such, the IT Team is constantly monitoring users in the network.

  Axioned members VPN Policy: [VPN Policy Agreement](https://docs.google.com/document/d/1re9DoI8oDe1HgvlFVXtsnOYldmICB-xKysN6fEkMcxc/edit) 

## 10. Physical and Technical Safeguards Management

  - Implemented limited access to infrastructure, such as locks on doors and badge scanners
  - Implemented 24/7 CCTV surveillance inside and outside of the office
  - Maintain an army of cameras in all common areas
  - Implemented biometric access to allow only authorized personnel to enter the office premises
  - Implement a policy of logging visitors before they enter the building and restricting their access to the office.
  - Implemented a locked server room with restricted access for authorized personnel only

1. **Technical Safeguards**
    - To enhance security measures, the computer screens for both Axioned and Personal devices will automatically lock after 5 minutes of being idle.
    - Implement screensavers that lock the computer screen.
    - Regularly audit and ensure that these technical safeguards are in place and functioning effectively. 

2. **Evaluation and Continual Improvement**
    - Regularly evaluate the effectiveness of the physical and technical safeguards
    - Determine any additional steps/practices that need to be implemented to improve data security
    - Assign an owner for this initiative and determine a timeline for implementation.

3. **Additional Safeguard in place**
    - Biometric data is monitored by HR on a daily basis.
    - Cameras are audited on a weekly basis.
