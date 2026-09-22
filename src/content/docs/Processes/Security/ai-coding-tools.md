---
id: ai-coding-tools
title: AI Coding Tools
sidebar:
  label: AI Coding Tools
---

This page extends the [Generative AI Guidelines](/processes/security/generative-ai) with specific guidance for AI tools used in coding. The same principles around data privacy, confidentiality, and responsible use apply here — this page covers the tools, their security configuration, and how those principles are enforced in practice.

Currently, Claude Code (Anthropic) and Cursor IDE are used on client projects. Both are configured to ensure that client code is not used to train AI models and that sensitive data is excluded from AI context.

## Tools in Use & Security Configuration

### Claude Code on Anthropic's Team Plan

Claude Code is our primary AI coding assistant. We operate exclusively on the Team plan, which is governed by Anthropic's Commercial Terms of Service rather than the Consumer Terms that apply to Personal accounts (Free, Pro, and Max plans).

| Setting | Configuration |
|---|---|
| Plan tier | Claude Code via Claude Team plan (Commercial Terms) |
| Training on client data | Not permitted by default. Under Commercial Terms, Anthropic does not train generative models using code or prompts sent to Claude Code unless the customer has explicitly opted in (e.g. Development Partner Program). Axioned has not opted in. |
| Feedback submissions | The thumbs up / down feedback button is the only path that can send a conversation to Anthropic. This is disabled at the org level via Organization Settings → Data and Privacy → Rate chats. |
| Accounts | Org-managed accounts only. No personal accounts for client work. |

Authoritative reference: [Anthropic Claude Code data usage docs](https://docs.anthropic.com/en/docs/claude-code/data-usage)

### Cursor IDE

Cursor is a VS Code-based editor with built-in AI assistance. We enforce the following configuration:

| Setting | Configuration |
|---|---|
| Privacy Mode | Enabled and enforced. When Privacy Mode is on, Cursor guarantees zero data retention with its model providers and that no code is used for training. Privacy Mode is enforced for all members. |
| Model used | Claude (Anthropic), routed through Cursor's zero-data-retention agreement with Anthropic. |
| Third-party data sharing | Cursor does not sell or share code with third parties. |
| SOC 2 | Cursor is SOC 2 Type II certified. |

Authoritative references: [Cursor data use](https://www.cursor.com/privacy) · [Cursor security](https://www.cursor.com/security)

## Quick Reference: Security at a Glance

| Control | Status | Details |
|---|---|---|
| Client code used to train AI models? | No | Anthropic Commercial Terms (Team plan) prohibit training by default. Cursor Privacy Mode prohibits training. |
| PII or personal data shared with AI? | No | Prohibited by policy. No exceptions. |
| Secrets / credentials shared with AI? | No | Prohibited. |
| Personal or free-tier AI accounts used? | No | Only Axioned org accounts permitted for client work. |
| AI output reviewed before use? | Yes | Mandatory review before any AI-generated code is committed. |
| Privacy Mode active in Cursor? | Yes | Mandatory for all team members. |

---

Questions about this policy? Contact your Axioned project lead or reach out to [security@axioned.com](mailto:security@axioned.com). This document reflects Axioned's current tooling and security configuration as of April 2026.
