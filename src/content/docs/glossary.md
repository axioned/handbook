---
id: glossary
title: Glossary
sidebar:
  label: Glossary
  order: 98
---

A guide to all of the terms we use internally.

## General

| Term | Definition |
| --- | --- |
| Handbook | This website 😎 |
| WOW | Impressing and exceeding the expectations of a client (or a teammate) |
| Sprint | A period of time in which we work on a project. Usually 2 weeks |
| SU | Standup, a meeting in which we discuss what we are working on |
| Lessons Learned (Retro) | A meeting in which we discuss what went well (WWW) and what would be even better if (EBI) |
| SPOC | Single Point of Contact, a person who is responsible for a project or a task |
| PO | Product Owner, someone who manages the product |
| UX | User Experience, the process of designing the user journey of the app |
| UI | User Interface, the process of designing the look and feel of the app |
| i18n | Internationalisation, the process of making the app available in multiple languages |
| a11y | Accessibility, the process of making the app available to people with disabilities |

## Software Development

| Term | Definition |
| --- | --- |
| Version Control| A system (like Git) that tracks changes to code over time, allowing teams to collaborate safely. Like Google Docs’ version history, but for developers. |
| Monorepo | Multiple projects (e.g. app, docs and API) all in one GitHub repository |
| Commit | Addition of code, pushed into a branch on the versioning system (GitHub, etc) |
| PR | Pull request, the way in which code is reviewed and then added to the codebase. A PR is made of commits |
| Merge | If a PR is good, it is merged, which accepts the changes and ‘merges’ them into the codebase |
| CI | Continuous Integration, the process of automatically testing code |
| CD | Continuous Deployment, the process of automatically deploying code |
| DevOps | A way of working where developers and operations (infrastructure) collaborate closely, usually using automation, to build and run applications quickly and reliably. |
| Frontend | What users see and interact with—buttons, menus, forms. |
| Backend | Where the data and logic live—what happens behind the scenes when you click something. |
| Linting | A tool that checks code for errors and formatting |
| Metadata | Data that is in a computer readable format, like JSON, which looks like `{"team": Liverpool", "ucl": "6"}` |
| API | Application Programming Interface, a way for different systems to talk to each other securely and efficiently with predefined endpoints and data formats (like a menu in a restaurant). |
| OAuth | A secure way to add a login to an application using another service. For example, “Login with Google.” You don’t give your password to the new site; Google verifies you. |
| ETL | Extract, Transform, Load, a way to move data from one place to another, clean it up along the way, and store it in a new system. |
| Middleware | A layer of software that sits between the application and the database, handling requests and responses. This can be used to add authentication, logging, or other functionality. |
| Load Balancer | Acts as a traffic cop for your servers. If too many users hit your website at once, the load balancer spreads them out so no single server crashes. |
| Deployment | Making a website or application live and accessible on the internet. Like taking a car from the factory and delivering it to a showroom. |
| SaaS (Software as a Service) | Software you access over the internet without installing anything—like Google Docs, Zoom, or Netflix. You just subscribe and use. |
| Containerization  | Packaging up code and everything it needs to run in a determined environment so it works the same on any computer. |
| Webhooks | A way for one system to instantly notify another when something happens. Like the alerts we get on Slack when a site is down. |
| Latency | The time it takes for data to travel from one point to another. |
| CMS | Content Management System, a system that lets you manage a website’s content—text, images, videos—without needing to know how to code. Eg. WordPress, Sanity, etc. |
| CRM | Customer Relationship Management, a system that lets you manage your relationship with your customers—emails, calls, sales, notes, etc. Eg. Hubspot, Salesforce, etc. |

## Web Hosting

| Term | Definition |
| --- | --- |
| Domain Registrar | The company from where you buy your domain name. Eg. GoDaddy, Namecheap, etc. |
| DNS | Domain Name System, the internet's phonebook. This is managed by a DNS provider - which can be your domain registrar or a separate provider (like Cloudflare). |
| DNS Record | A record that is used to translate a domain name into an IP address. A record, CNAME record (`cname.vercel-dns.com`), etc. |
| CDN | Content Delivery Network, a network of servers around the world that store copies of your website’s static files (images, videos, etc.) and deliver them to users from the nearest server. |
| DNS Records | A record that is used to translate a domain name into an IP address. A record, CNAME record, etc. |
| A Record | A record that is used to translate a domain name into an IP address. |
| CNAME Record | A record that is used to translate a domain name into another domain name (like `cname.vercel-dns.com`). |
| MX Record | A record that is used to translate a domain name into an email server. |
| TXT Record | A record that is used to translate a domain name into a text string. They are commonly used for SPF, DMARC, DKIM, as well as verifications for other services. |
| DKIM | DomainKeys Identified Mail, this adds a digital signature to your outgoing emails. It’s like sealing a letter with your unique stamp so the recipient knows it’s really from you and hasn’t been tampered with. |
| SPF | Sender Policy Framework, a list you publish online that tells email providers which servers are allowed to send email from your domain. It’s like telling the post office: “Only these people can send mail in my name.” |
| DMARC | Domain-based Message Authentication, Reporting & Conformance, a rule that works with SPF and DKIM. It tells email systems what to do if someone tries to spoof your domain and also gives you reports so you can monitor attempts. |
| Cache | Storing frequently used data so it loads faster the next time. |

## MarTech

| Term | Definition |
| --- | --- |
| Analytics | Tools that track what users do on your website—where they click, how long they stay, etc. It’s like observing customers in a store to understand their behavior. Like Google Analytics, Clarity, etc. |
| SEO | Search Engine Optimization, making your website easy to find when people search for your business on search engines like Google. |

## Testing

| Term | Definition |
| --- | --- |
| E2E | End to end testing. Essentially a robot that checks if our application is working each time we push code |
| Regression Testing | After fixing a bug or adding a new feature, this ensures old parts of the software still work. Like checking that a car’s brakes still work after installing a new radio. |
| Web Accessibility (a11y) | Ensuring your website works for people with disabilities—screen readers, color contrast, keyboard navigation. It’s like installing ramps and braille in a public building. |