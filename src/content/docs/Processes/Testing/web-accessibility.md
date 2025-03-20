---
id: accessibility
title: Web Accessibility
tags:
  [
    Accessibility,
    WCAG,
    ARIA,
    Contrast,
    Maintenance,
    Go-live,
  ]
---

Web accessibility ensures that websites, applications, and digital content are usable by everyone, including individuals with disabilities. At Axioned, we are committed to creating accessible digital experiences that comply with best practices and legal standards such as the Web Content Accessibility Guidelines (WCAG).

We recommend you read the [four pillars of accessibility](https://www.w3.org/WAI/WCAG22/Understanding/intro#understanding-the-four-principles-of-accessibility) to get a better understanding of the topic. Check out the [Resources](#resources) section below for more information.

## Why Accessibility Matters

- Inclusivity: Ensuring equal access to information and functionality for all users.
- Legal Compliance: Many jurisdictions require digital accessibility compliance (e.g., ADA, Section 508, EU Web Accessibility Directive).
- Improved Usability: Designing for accessibility enhances the overall user experience.
- SEO Benefits: While not the focus of accessibility, accessible websites often perform better in search engines due to improved semantic HTML and structured content.

## Accessibility Standards

- **WCAG A (Minimum Standard):** We ensure that all projects meet at least WCAG A compliance as a baseline.
- **WCAG 2.1 AA (Aim for this):** Wherever feasible, we strive to meet WCAG 2.1 AA standards, prioritizing accessibility in key areas such as navigation, contrast, and interactive elements.
- **ARIA (Accessible Rich Internet Applications) Guidelines:** We implement ARIA roles and attributes where necessary to improve accessibility in dynamic content.

- **Keyboard Navigation & Focus Management**: Ensuring all functionality is accessible via keyboard navigation.

- **Color Contrast & Text Readability:** Adhering to minimum contrast ratios for text and background colors.

- **Alternative Text for Images:** Providing meaningful alt text for all non-decorative images.

- **Semantic HTML:** Using proper HTML structure for improved screen reader compatibility.

## In practice

- **Design Phase**

  - Use color palettes that meet contrast requirements.
  - Ensure designs accommodate text resizing and reflow.
  - Include accessibility annotations in design files.

- **Development Phase**

  - Write clean, semantic HTML with proper heading structures.
  - Ensure all interactive elements (buttons, links, forms) are keyboard accessible.
  - Implement ARIA attributes only when necessary.

- **Testing & Validation**

  - Run automated accessibility scans (see [Tools](#tools)).
  - Perform manual testing using keyboard and screen readers.
  - Conduct usability tests with individuals who rely on assistive technology.

## Tools

- Automated Testing:
  - Microsoft's [Accessibility Insights](https://accessibilityinsights.io/) - **Recommended**
  - [axe DevTools](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)
  - [WAVE](https://wave.webaim.org/extension/)
  - [Lighthouse](https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk)
- You can also extend your existing Playwright tests for [accessibility testing](https://playwright.dev/docs/accessibility-testing).
- Microsoft Edge DevTools comes with a [built-in accessibility checker](https://learn.microsoft.com/en-us/microsoft-edge/accessibility/test)
- Some of our clients also use tools like [accessiBe](https://accessibe.com/), [Accessibility Checker](https://www.accessibilitychecker.org/), [UserWay](https://userway.org/) for scans a well as their drop-in widgets.
- More tools can be found on W3C's [Web Accessibility Evaluation Tools List](https://www.w3.org/WAI/test-evaluate/tools/list)

## Resources

- [WCAG Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [How to Meet WCAG (Quick Reference)](https://www.w3.org/WAI/WCAG22/quickref/)
- [a11y Project](https://www.a11yproject.com/)

:::note

- These tools are not perfect and should be used as a guide.
- Everything cannot be automated and these should always be tested manually.

:::
