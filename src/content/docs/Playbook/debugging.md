---
title: Debugging (Diagnosing problems)
sidebar:
  label: Debugging
  order: 10
---

It might seem silly, to be writing a page on debugging. But, it's a skill that is often overlooked, and it's a skill that can be improved with practice. Below are some tips and tricks that we feel are worth capturing.

## Evaluating failure evidence

If something is not working as expected ...

### Get the visual evidence of the failure

This could be a test report, a screenshot, a log file, etc.
Don't give up until you have the visual evidence. If you can't get the evidence, then you can't debug the problem.
Don't rely on someone else to get the evidence for you.
**You need to see it for yourself.**
Use failure evidence to tell you where something is going wrong.

### Inspect for trends, patterns and differences

This is where you start to look for clues. You're looking for things that are similar (patterns) or different (deducing) from what you expect. It is important to not jump to conclusions. You need to be able trace back your deductions with evidence.
Or be really quick to admit that you're wrong and move on to the next deduction.

### Ask questions

If you are stuck, then bring someone in.
Remember, don't delegate this activity entirely to someone else - they might not have the same context.
They're a partner in the problem-solving effort.

:::danger
Do gut check situations where we might (inadvertantly) lead them down the path you based on our own assumptions.
:::

### Repeatability

- If something fails every time, is replicable, then it's easier to debug and solve.

- The flaky or intermittent failures are the ones that are harder to debug and solve.

:::caution
It is important to be mindful about the time you spend on a problem. If you're not making progress, then it's time to ask for help.
You might also walk away with a decision to not pursue further investigation - but that can only happen if you consult others.
:::
