---
position: 1
title: Measuring Core Web Vitals
description: Core Web Vitals are the subset of Web Vitals that apply to all web pages, should be measured by all site owners. Each of the Core Web Vitals represents a distinct facet of the user experience, is measurable in the field, and reflects the real-world experience of a critical user-centric outcome.
---

## Overview

Web Vitals is an initiative by Google to provide unified guidance for quality signals that are essential to delivering a great user experience on the web.

Google has provided a number of tools over the years to measure and report on performance. Some developers are experts at using these tools, while others have found the abundance of both tools and metrics challenging to keep up with.

Site owners should not have to be performance gurus in order to understand the quality of experience they are delivering to their users. The Web Vitals initiative aims to simplify the landscape, and help sites focus on the metrics that matter most, the Core Web Vitals.

## Core Web Vitals

Core Web Vitals
Core Web Vitals are the subset of Web Vitals that apply to all web pages, should be measured by all site owners, and will be surfaced across all Google tools. Each of the Core Web Vitals represents a distinct facet of the user experience, is measurable [in the field](https://web.dev/user-centric-performance-metrics/#how-metrics-are-measured), and reflects the real-world experience of a critical [user-centric](https://web.dev/user-centric-performance-metrics/#how-metrics-are-measured) outcome.

## The metrics

The metrics that make up Core Web Vitals will evolve over time. The current set for 2020 focuses on three aspects of the user experience—loading, interactivity, and visual stability—and includes the following metrics (and their respective thresholds):

- [Largest Contentful Paint (LCP)](https://web.dev/lcp/): measures loading performance. To provide a good user experience, LCP should occur within 2.5 seconds of when the page first starts loading.
- [First Input Delay (FID)](https://web.dev/fid/): measures interactivity. To provide a good user experience, pages should have a FID of 100 milliseconds or less.
- [Cumulative Layout Shift (CLS)](https://web.dev/cls/): measures visual stability. To provide a good user experience, pages should maintain a CLS of 0.1. or less.

For each of the above metrics, to ensure you're hitting the recommended target for most of your users, a good threshold to measure is the **75th percentile of page loads**, segmented across mobile and desktop devices.

In other words, if at least 75 percent of page views to a site meet the "good" threshold, the site is classified as having "good" performance for that metric. Conversely, if at least 25 percent of page views meet the "poor" threshold, the site is classified as having "poor" performance. So, for example, a 75th percentile LCP of 2 seconds is classified as "good", while a 75th percentile LCP of 5 seconds is classified as "poor".

### How is this calculated?

When evaluating candidate Core Web Vitals "good" thresholds, Google verifies that those thresholds are achievable, based on data from the [Chrome User Experience Report (CrUX)](https://developers.google.com/web/tools/chrome-user-experience-report). Using data from CrUX, they determine the percentage of origins on the web that meet the "good" thresholds across each metric.

### What is CrUX?

The Chrome User Experience Report is powered by **real user measurement of key user experience metrics across the public web, aggregated from users** who have opted-in to syncing their browsing history, have not set up a Sync passphrase, and have usage statistic reporting enabled.

The resulting data is made available via:

- [PageSpeed Insights](https://pagespeed.web.dev/), which provides URL-level user experience metrics for popular URLs that are known by Google's web crawlers.
- [Public Google BigQuery project](https://console.cloud.google.com/bigquery?p=chrome-ux-report&page=project), which aggregates user experience metrics by origin, for all origins that are known by Google's web crawlers, and split across multiple dimensions outlined below.
- [CrUX Dashboard on Data Studio](https://web.dev/chrome-ux-report-data-studio-dashboard/), which can be setup to track an origin's user experience trends (my personal favourite given the ease of use for Engineers and non-Engineers alike, and gives you high-level snapshot based on the same data that Google uses).

:::tip Want more?
Head on over to https://web.dev/vitals-tools/ to learn about how to capture your own data, and other tools/libraries that might be worth knowing about.
:::
