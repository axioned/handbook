---
id: security-actions
title: Regular Security Actions
sidebar:
  label: Regular Security Actions
---

Regular security maintenance is crucial for system safety and efficiency. This includes updating dependencies, removing unused packages, and keeping documentation current.

## Implementation

### Regular Maintenance

- Bi-weekly dependency checks (consider using [Dependabot](/processes/security/dependabot) or [Renovate](https://docs.renovatebot.com/)).
- Some handy commands to check for vulnerabilities and outdated packages yourself:
  - `npm audit` or `pnpm audit` to check for vulnerabilities
  - `npm outdated` or `pnpm outdated` to check for outdated packages
  - `npx npm-check-updates --interactive` or `pnpm up --recursive --interactive --latest` to check for outdated packages and update them interactively
- If you see vulnerability flagged during package installation, you should fix it.
- Use Dependabot for [security updates](https://docs.github.com/en/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates)
- Document findings and keep a shared maintenance log, when applicable.

:::danger[Security is not optional]
If business tickets are continuously prioritised over regular and critical security maintenance, you should escalate the issue to the Management Team.
:::

:::tip[Automate]
Invest in automation tools to streamline processes. Automation saves time, reduces manual errors, and ensures consistent compliance with security protocols.
:::

## Security Tools

### Wordfence

- Install [Wordfence](https://www.wordfence.com/) plugin
- Enable real-time monitoring
- Set up email alerts to be sent on your project's email alias

### Uptime Monitoring

- Use an uptime monitoring tool for business critical services
  - Axioned has a hosted uptime monitoring service called Uptime Kuma
- Some hosting platforms (like WP Engine) have uptime monitoring built in as well

Read more on [self-audit](/processes/security/self-audit) for more details on how to audit your own security.
