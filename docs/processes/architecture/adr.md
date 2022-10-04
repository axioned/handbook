---
title: Architecture Decision Records
tags: [Decisions]
---

# Decision Records

A decision record (DR) is a document that captures an important decisions (architectural or otherwise) made along with its context and consequences.

# How to contribute

- You have an idea, suggestion or improvment around a key decision (architectural, infrastructure, or anything else)
- Head over to the [Decision Records](/docs/category/decision-records), look if this already exists
- You can also check the [Pull requests](https://github.com/axioned/handbook/pulls) to check if it is already in discussion or not
- If you don't find it there, create a new `.md` file in the `/docs/processes/architecture` folder.
- Once you have filled relevent details in, raise a pull request
- Once approved (and/or edited through the process of discussion) by your peers, this might be moved to `Accepted`, `Rejected`, `Deprecated`, etc.

# Advice

Source: https://github.com/joelparkerhenderson/architecture-decision-record

> You have an opportunity to lead your teammates, by talking together about the "why", rather than mandating the "what". For example, decision records are a way for teams to think smarter and communicate better; decision records are not valuable if they're just an after-the-fact forced paperwork requirement.
>
> Some teams much prefer the name "decisions" over the abbreviation "ADRs". When some teams use the directory name "decisions", then it's as if a light bulb turns on, and the team starts putting more information into the directory, such as vendor decisions, planning decisions, scheduling decisions, etc. All of these kinds of information can use the same template. We hypothesize that people learn faster with words ("decisions") over abbreviations ("ADRs"), and people are more motivated to write work-in-progress docs when the word "record" is removed, and also some developers and some managers dislike the word "architecture".
>
> In theory, immutability is ideal. In practice, mutability has worked better for our teams. We insert the new info the existing ADR, with a date stamp, and a note that the info arrived after the decision. This kind of approach leads to a "living document" that we all can update. Typical updates are when we get information thanks to new teammates, or new offerings, or real-world results of our usages, or after-the-fact third-party changes such as vendor capabilties, pricing plans, license agreements, etc.
