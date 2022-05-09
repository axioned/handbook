---
id: businesscontinuity
title: Business Continuity Committee
sidebar_label: Business Continuity Committee
---

### Council Members:

- Anurag
- Poonam
- Sagar
- Sandip

### Responsibility assignment matrix / RACI

> A responsibility assignment matrix, also known as RACI matrix or linear responsibility chart, describes the participation by various roles in completing tasks or deliverables for a project or business process. [(Wikipedia)](https://en.wikipedia.org/wiki/Responsibility_assignment_matrix)

| Disruption Level            | IT Team | Sagar | Sandip | Poonam | Seema | Anurag | Dave/Libby |
| --------------------------- | ------- | ----- | ------ | ------ | ----- | ------ | ---------- |
| Code Red :red_circle:       | R       | R     | R      | C      | C     | A      | I          |
| Code Orange :orange_circle: | R       | R     | R      | C      | C     | A      | I          |
| Code Yellow :yellow_circle: | R       | R     | C      | C      | A     | I      | I          |
| Code Brown :brown_circle:   | R       | A     | I      | I      | I     | I      | -          |

| Role        | Description                                                                                                                                                                                                                                                                                                                                                                    |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Responsible | Those who do the work to complete the task. There is at least one role with a participation type of responsible, although others can be delegated to assist in the work required.                                                                                                                                                                                              |
| Accountable | The one ultimately answerable for the correct and thorough completion of the deliverable or task, the one who ensures the prerequisites of the task are met and who delegates the work to those responsible. In other words, an accountable must sign off (approve) work that responsible provides. There must be only one accountable specified for each task or deliverable. |
| Consulted   | Those whose opinions are sought, typically subject matter experts; and with whom there is two-way communication.                                                                                                                                                                                                                                                               |
| Informed    | Those who are kept up-to-date on progress, often only on completion of the task or deliverable; and with whom there is just one-way communication.                                                                                                                                                                                                                             |

## Work disruption levels with examples

### Code Red :red_circle: - Likelihood of taking/impacting more than 4 hours (for 50%+ team members)

- Power failure in the building (unknown cause)
- Internet down (unknown cause, no ETA)
- Rains
- Strikes
- anything else that doesn't fit the below criteria/impact

### Code Orange :orange_circle: - Likelihood of taking/impacting more than 2 hours (for 50%+ team members)

- Power failure in the building (cause known)
- Internet down (cause known/ETA known or atleast one line working)

### Code Yellow :yellow_circle: - Likelihood of taking/impacting more than 1 hour (around 8+ team members)

- Scheduled power outage (MSEB or Backup restart)
- Air-conditioning failure/downtime (of more than 1+ hour)
- Server/router restart needed (internal causes)

### Code Brown :brown_circle: - Likelihood of taking/impacting more than 1 hour (for anyone)

- Individual system failures
- Need for hard-disk replacements
- Systems running slow
- Systems needing maintenance
- **Note:** Upgrade this to Code Yellow if this has happened repeatedly (more than once a week).
