---
id: monitoring
title: Monitoring
sidebar:
  label: Monitoring
tags: [Observability, Monitoring, Playwright, Checkly]
---

## Overview

Ensuring websites and applications run smoothly and reliably is essential. Monitoring isn’t just about tools; it’s about addressing problems before they impact users. Our monitoring practices are designed to catch issues early, focus on key user experiences, and alert us quickly when things break so we can fix them before users notice.

We use [Playwright](/processes/testing/playwright) as our primary tool for automated testing. For monitoring, we are currently trying out Checkly to see if it fits our needs in the long run.

## What This Solves

- Proactive Detection
Regular checks target critical user experiences and identify problems early. Alerts ensure we can act fast when issues arise.

- User Experience Consistency
Focused monitoring ensures that key user journeys remain smooth and functional, even after updates.

- Workflow Integration
Monitoring integrates seamlessly with CI/CD pipelines and other tools, helping us maintain efficiency while addressing potential issues.

## Key Practices

- End-to-End Testing: Simulates key user journeys to catch issues early.

- UI and Form Testing: Ensures critical forms and interfaces work properly after updates.

- Automation: Uses tools like Playwright and evaluates Checkly to focus on targeted experiences and provide fast feedback.

## Why It Matters

Effective monitoring helps us identify and fix issues quickly, ensuring users experience reliable and high-quality digital interactions. By focusing on the most important areas, we maintain trust and deliver on expectations.
