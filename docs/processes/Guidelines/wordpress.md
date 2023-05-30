---
position: 1
id: oversee-checklist
title: Checklist Pointer for Oversee/Senior Dev
sidebar_label: WordPress
tags: [checklist, wordpress checklist, standards, wordpress oversee checklist pointers]
---

- Access Control:
  - Limit access to WP Engine to Oversee or senior developers.
  - Keep server access credentials separate from common credential documents.
  - Maintain limited member access to ensure security.
- Backups:
  - Always create a backup before major activities or deployments
  - Perform such activities under Oversee supervision.
- Documentation:
  - When working with a theme builder, developers should take notes of changes made for complex tickets.
  - This allows for easy reversion in case of any issues.
- Revisions:
  - Enable the Revision feature in WordPress, with a minimum of 5 revisions.
  - This helps track changes and provides a history of revisions.
- Testing and Debugging:
  - Avoid direct testing or debugging on live pages.
  - Create duplicates of pages for testing purposes, ensuring they are not crawled or indexed (add "noindex nofollow" temporarily).
  - Once testing is completed, thoroughly delete the duplicate page.
- History Plugin:
  - Check if your site has a History plugin to track user activity and updates.
- Global Settings:
  - Instruct developers to reach out to a senior developer or Oversee for making changes related to global settings.

:::tip Checklist Pointer for Oversee/Senior Dev Google Sheet [*Link*](https://docs.google.com/document/d/1t38p9Z-QhVuG0b5Dca7YFMjZeVOuWpKCupL90aDWuxY/edit#)
:::