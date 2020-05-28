# Zoho Projects Expectations

### Table of Contents
- Introduction					
- For PMs: Manage Projects
- For QAs: Manage Issues
- For all resources: Timesheet
- For all resources: Manage Task status
- For all resources: Manage Issue status
- For all resources: Internal projects

## Introduction
We use Zoho Projects as our default Project Management tool to manage most aspects of the internal as well as client projects.

The key use cases that we use Zoho Projects for are as follows:
- For Project Magament (of course!)
  - Managing Phases/Milestones
  - Defining and Assigning Tasks / Task Lists
  - Time tracking / budget management
- For timesheets in general for everything that every team member does
- To identify bandwidth availability and faciliate project assigments

**Portal Link:** https://projects.zoho.com/portal/prdxn

## Timesheets

At PRDXN we have Zoho projects as our internal Project Management and Time Tracking tool.

In terms of creating transparency around your/the teams work we need to focus on Zoho Time Tracking.

Please see/read the details in the PRDXN Handbook regarding the clarified requirements for Zoho time tracking: [Section 3.6.1 "Zoho Time Tracking"](http://bit.ly/PRDXN-Handbook).

### Time Logging

- In your Project click Timesheet in the left panel.
- Click Add Log Time in the upper-right corner.
- Select the Date, User, and the Task/Bug detail for which you are going to log time.
- Log the time in Hours and set the Billing Status respectively. 
  - Billable hours: Refers to the hours included in the estimate. 
  - Non-billable hours: Refers to the hours not part of approved estimate.
  - ***Note:** If unsure about this, reach out to the respective Project Manager.*
- Click Add.

#### View and Manage Entries

You can view your logged hours in List/Grid/Month view and manage (Edit/Delete) your logged entries from the Timesheet tab.

- Track Timesheet: Go to individual Project and client on Timesheet on left toolbar.
- You can track your logged time by either clicking on List/Grid/Mnth view.
- Under the List view, hover over the log and click on Setting icon .
- Choose to edit or delete the entry accordingly.

## Creating a project

> Only Project Managers and Admin users (Line Managers, Management and IT team) have access to create new projects.

Steps:
- Navigate to Projects tab on the Nav bar.
- Click on “New Project”.
- Enter/Select
  - Project Title (mandatory)
  - Select an Owner (ideally the PM)
  - Select from available templates
    - *Read more about how templates work [here](https://help.zoho.com/portal/en/kb/projects/settings-in-zoho-projects/project-templates/articles/project-template#Create_a_template).*
  - Start and End Dates (mandatory)
  - Task Layout = Standard 
    - *Read more about layout templates [here](https://help.zoho.com/portal/en/kb/projects/settings-in-zoho-projects/portal-configuration/articles/task-layout-and-fields#Feature_availability).*
  - Group
    - Internal: Internal PRDXN projects
    - Projects: For time-bound projects
    - Retainers:  For retainer projects 
- Default Billing Status
  - Billable: For Client projects (time-bound or retainers)
  - Non-billable: For any internal projects
- Unique project ID: Set ID in this format: Client code-Project code-Project type e.g. TEG-EON-PR (PR: Fixed cost project/RT: Retainer/ARSequencial: Additional request sequential) (mandatory)
- Actual completion date: This field should be updated after the project completion, with the actual project completion date.
- Budget
  - Select Project Budget:  Always select Based on Project Hours
  - Enter Budget Hours
    - If a time-bound project: Total Approved Budget hours as shared by the Accounts team
    - If a Retainer: Add the base monthly retainer budget hours as shared by the Accounts team
- Techstack (Multiselect) - define these to help with easier reference and future reporting/categorization of projects. 
- Click "Add"

> See note on creating Intenal Projects

## Manage Task Status

Just like tracking hours against your task is important, equally important is keeping the status of Task updated.

- Navigate to Projects.
- Go to particular Project OR search for the project using search icon present on the upper bar.
- Navigate to Tasks.
- Change the status from the Dropdown.
- In Kanban view, drag the task to respective status swimlane.

## Adding Users to a project

> Only Project Managers and Admin users (Line Managers, Management and IT team) have access to create new projects.

While working on a project it is important to make sure that every member involved is added to the project. 
- Go to Projects. Select particular project OR search for the project using search icon present on the upper bar.
- Navigate to Users in the vertical toolbar on left.
- Click on Add User Button on top right corner. 
  - Select the existing user- Use this to search and add user to the project.
  - Add a new user- Use this to add a new user on Zoho.
- Select Client User tab on left top corner and follow similar steps as above to add client stakeholders to your project.

> Please note that a Client user is able to see External Tasks, Hours (Billable and Non-Billable) and Issues in the project.

## Creating a Task List

You can categorize your tasks by adding them under a tasklist (task category)
- Navigate to Projects.
- Go to particular project OR search for the project using search icon present on the upper bar.
- Navigate to Tasks and hover on the icon next to Add Task
- Click on Add Task list
- Add/Select
  - Task List (name/title)
    - For Retainers, the name should be in this format: Retainer Month `StartDate - EndDate Year` e.g. `May 1-May 31 2020`.
  - Task list Flag
    - Internal: This is the default value.
    - External: The task list which needs to be viewed by client users should be mapped as External.

## Creating Tasks

Task is a piece of work to be done in a project. 
- Go to particular Project> Tasks > Add Task
- Add/Select
  - Task Title
  - Task list
  - Owner (Important for reports so ensure to add this)
  - Start Date, End Date (Important for reports so ensure to add this)
  - Set work assignment by either assigning 
    - Work hours per day (most common)
    - Work % per day
    - Work hours
  - Priority
  - Recurring: Set a task as recurrent if it's going to happen more than once.(New task will be created automatically once you close the current task)

## Creating Issues

QA Team is primarily responsible for logging issues for the features that they test for any given project. Please use the `Standard Layout` unless specified to your otherwise.

- Select a project and navigate to Issues (on left toolbar).
- Click Submit Issues on the right top corner
- Enter/Select
  - Issue title (mandatory)
  - Description
  - Assign to: Select the Developer or the corresponding team member who would be working on the issue
  - Due Date
  - Severity
  - Classification
  - Is it Reproducible
  - Flag
    - Internal: For internal teams visibility
    - External: For Client's visibility
- Click on Add

### Issue Details

Keep the issues updated with relevant / supporting information, the description is clear and concise.
- Select a project and navigate to Issues.
- Click on the issue that you need to update.
- Edit/Update the required fields under Issues Information. Hover over the field to view the edit option.
- The changes are saved automatically.
  - Scroll the issue details page to add additional information to the issue.
  - Comments: You can add comments while modifying an issue. Use the screen-grabber to share screenshots or the in-built draw tool to highlight or obscure areas.
  - Attachments: Attach and share screenshots using the screen-grabber. Attachments added in Comments section are shown here.
  - Log Hours: Add the time you spent on resolving the issue. You can also set the start and end time.
  - Link Issues: You can link and classify related issues.
  - Tasks: Link related tasks to your issue. 
  - Activities: View the history of the issue. The activities are listed chronologically.
  - Checklist: Add to-dos for the  issue
  - Google Drive: Link any relevant Google Drive document.

### Associate Issues with Tasks
Associate issues with relevant tasks of your project for easier tracking and visibility.

- Edit a Task and click on the Issues tab.
- Click Associate Issues.
- Type the existing issue title or issue ID to search and select the issue in Select Issues.
- Click Associate Issues to link the selected issues to the task.
- In addition, you can also link new issues to the selected task. In the Issues tab, click Associate Issues, and then click the Click here option to associate new issues to the task. Specify the new Issue Title and Issue Description and then click Save to link a new issue to the task.
- You can dissociate the issue from the task, if required. Hover the mouse over the linked issue and click on Delete icon.

#### Alternate way of linking Tasks with Issues

- Edit an Issue,  click on Tasks tab, then on Associate Tasks.
- In Select Tasks, type the existing tasks to select the Task.
- Click Associate Tasks to link the Task to the Issue.
- In addition, you can also link new tasks to the selected issue. In the Task tab, click Associate Tasks, and then the Click here option to link new Tasks to the Issue. Specify the new Task Name and then click Associate Tasks to link a new Task.
- You can click on the associated Task to directly navigate to the Task Details page, where you can click on the Issues tab to view the linked Issues and vice versa
- You can dissociate the task from the issue if required. Hover the mouse over the linked task and then click Dissociate.

### Manage Issue Status

Just like logging issues is important, equally important is keeping the status of Issue updated
- Navigate to Projects.
- Go to particular project OR search for the project using search icon present on the upper bar.
- Navigate to Issues.
- Change the status from the Dropdown.
- In Kanban view, drag the task to respective status swimlane.

### Deleting and Moving an Issue

#### Delete:
- In the Kanban or List view, click on an issue and then click on Delete icon in the upper-right corner to delete it. If your issue has time logs that have been invoiced, it cannot be deleted.

#### Move:
- Navigate to an issue.
- Click on the issue to view details.
- Click `•••`  in the top right and then click Move.
- Select a project from the drop-down. The issue will be moved to this project.
- If there are invoiced time logs, the issue cannot be moved to another project.

## Internal Projects

- PRDXN Training: Once the resource passes his/her FED test OR associated with some training, he/she should reach out to the line manager/TL if the training task is not assigned .
  - Task Assignment
    - TL/Manager should ensure that the task for the specific resource is added under the Particular Task list with Resource name and training area e.g Task list: SAAS, Task: Ashwini P. SAAS Training.
    - Ensure that the task completion % is getting updated so that the progress can be tracked.
    - Once the training is completed the line manager should mark the task as closed.
- Buddy Program: This project has below tasks designed for Buddies. In case you are the one, reach out to your line manager and get this project and its tasks assigned.
  - Machine and Logical Round
  - Buddy Responsibility
  - Buddy meet: TL to close this task every week, then the new task will be created automatically.
- Interviews
  - If you are the one conducting interviews then get added to this project and task.
- PRDXN Activities
  - Any internal activity such as Townhall meet etc. should be added here.
- Internal projects
  - The list/names of internal projects should be added and driven through Project Managers or Line Manager.
