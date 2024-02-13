---
id: GithubActions
title: GitHub Actions for WordPress
sidebar:
  label: WordPress GitHub Actions
tags: [GitHub, Actions, CICD, Deployment, WordPress, yml, WP Engine, AWS]
---

This document is an overview of the required information that a developer needs to have
in order to implement CI/CD in any of the WordPress projects.

CI/CD automates your builds, and deployment so you can ship code changes faster and more reliably.

# General Information
**Platform**

The platform supported by the below scripts can run only on GitHub since the below scripts are using GitHub action to achieve CI/CD.


**Prerequisite**
- A GitHub account
- Repository/Project on GitHub (always private for client projects)
- Necessary Permissions on the repository to store some SECRET KEYS _(like: SECURITY_AWS_ACCESS_KEY, SECURITY_AWS_SECRET_ACCESS_KEY, SSH_PRIVATE_KEY, etc)_ in - Github (for more details connect with the IT team)
- Access to the hosting/control panel to extract the server details and the Private keys etc.
- SSH should be enabled/supported by the hosting provider


**Architecture** 
*File & Folder Structure*
    
    ├── .github
    │   └── workflows
    │       ├── prod.yml
    │       └── stage.yml
    │       └── dev.yml
    ├── wp-content
    │   ├── themes
    │   └── plugins
    ├── .gitignore
    └── README.md


## Why CI/CD?
The short answer would be - Speed.
While faster development is the most well-known benefit of CI/CD, continuous integration and continuous delivery pipeline enable much more.

- Development velocity
- Stability and reliability
- Business growth

[Learn more about the benefits of CI/CD](https://resources.github.com/webcasts/Devops-collaboration-GitHub-Actions-thankyou/)


## How to build a CI/CD pipeline
Build a CI/CD pipeline with GitHub Actions
[Learn more](https://github.blog/2022-02-02-build-ci-cd-pipeline-github-actions-four-steps/)

Key advantages of using GitHub Actions for CI/CD pipelines
- CI/CD pipeline set-up is simple
- Respond to any webhook on GitHub
- Community-powered, reusable workflows
- Support for any platform, any language, and any cloud


[Learn more about](https://youtu.be/5MJRtldPOEI)  how to start a CI pipeline with Github Actions

<br />

<u>**Step 1:**</u> **Create or choose a repository, and pick a project**

The first step to building a CI pipeline with GitHub Actions is creating or choosing a repository on GitHub.

You can either use an existing project code base, fork a project you like on GitHub, or start from scratch.

<u>**Step 2:**</u> **Open GitHub Actions in your repository to start building your CI/CD workflow**

To begin building your CI/CD pipeline, open the GitHub Actions tab in your repository’s top navigation bar.

Under Github Action you will find list of templates from you can choose as per your project techstack.

#### A CI/CD workflows include:
- <u>**A development workflow**</u>
    This workflow runs through a few different jobs whenever a pull request is opened, edited, synchronized, or reopened. These jobs include setting up Node, installing npm packages and dependencies, running npm test, and cycling through a number of lint jobs too (setup node, install npm@latest, install dependencies, lint code… you get the idea).

<br />

- <u>**A CodeQL Analysis workflow**</u>
    This workflow runs a series of CodeQL security tests on our code after we merge it to the main branch to ensure there are no known vulnerabilities.
    
    Check out the [YAML](https://github.com/aaronwinston/open-sauced/blob/main/.github/workflows/codeql-analysis.yml) file for yourself. It’s super simple
    
<br />

- <u>**A release and builds workflow**</u>
    This workflow runs tests and enforces lint after releasing code changes to Docker and building the application. It also deploys the final code to our production environment
    
    You can see which jobs and steps happen in the [workflow](https://github.com/aaronwinston/open-sauced/blob/main/.github/workflows/release.yml) for yourself.
<br />

- <u>**A storybook deployment workflow**</u>
    This workflow deploys any UI component changes to our production website through our frontend UI tech


<u>**Step 3:**</u> **Make changes to your code to trigger your CI/CD pipeline**

You can proceed with the changes and push the code to GitHub and you will see in action

We will see an example step by step you can follow that and get a complete idea of CI/CD using GitHub action working

_**Tip**: Few Github actions resources, basics to CI/CD - [reference link](https://github.blog/2021-11-04-10-github-actions-resources-basics-ci-cd/)_


<br />


## CI/CD Example and detailed process step by step
### <u>Step 1</u>: Setup Project/Repository
Set up your Project/Repository on Github in which you want to implement the CI/CD process

<br />

### <u>Step 2</u>: Setup GitHub workflow

Here we have 2 ways to set up the GitHub workflow _(recommended is 2nd one for good practice)_

#### 1. GitHub UI (via GitHub website)
In this approach follow the below steps to achieve

- Go to the respective repository on the GitHub site
- Navigate to the **Action** menu on the top
- Then click on **set up a workflow yourself** or you can click from the suggested list below
- After clicking you will be redirected to the YML file here you will add the code for deployment _(an example is attached below for reference)_


#### 2. Via custom YML code _(within project setup phase)_:
_You can manually create a respective YML file and put it into the GitHub workflows folder_

In this case, follow the below steps to set up
1. Make sure you are on the main (default) branch of the repository.
2. Create a folder `.github` inside create `workflows` folder in the root directory of the project _(in our case it will reside outside the wp-content folder)_
3. Under the workflows folder, you can create your deployment `.yml` file. The folder structure will look like this: `.github/workflows/dev.yml`
4. You can set up all the processes and actions to be taken once the GitHub action is triggered.
5. Once you are done with the YML file commit the changes and push the file
6. As per instructions in `.yml` file, the actions will run on GitHub.
7. In the later step we will see what goes into the `.yml` file.

<br />

### <u>Step 3</u>: Understanding the YML script below
Below attached is the snippet for the basic flow which is set for CI/CD in our case
<u>**Note:**</u> the code is case sensitive and the indentation is very important wrong indentation will result in **Build Failure**

```yml 
# This is a basic workflow to help you get started with Actions
name: Auto Deployment on Dev Environment
 
# Controls when the workflow will run
on:
 # Triggers the workflow on push or pull request events but only for the staging branch
 push:
   branches: [ staging ]
  
jobs:
 deploy:
   runs-on: ubuntu-latest
 
   steps:       
   # Deploy Files on the server using rsync command, after that delete the cache folder from server
   - uses: actions/checkout@v2
   - name: Rsync to WP Engine Dev Env
     env:
       dest: '[WP_USER_NAME]@[WP_HOST]'
     run: |
       echo "${{secrets.DEV_DEPLOY_KEY_PRIVATE}}" > deploy_key
       chmod 600 ./deploy_key
       rsync -chav -e 'ssh -i ./deploy_key -o StrictHostKeyChecking=no' \
         --exclude /deploy_key \
         --exclude /.git/ \
         --exclude /.gitignore/ \
         --exclude /.github/ \
         --exclude /.github/workflows \
         --exclude /node_modules/ \
         ./ ${{env.dest}}:[PROJECT_PATH]
       ssh -i ./deploy_key -o StrictHostKeyChecking=no ${{env.dest}} 'rm -r [FOLDER_PATH_OF_CACHE] -f'
```
<br />

For more information about the GitHub Action please visit this [link](https://github.blog/2021-11-04-10-github-actions-resources-basics-ci-cd/)
Documentation for GitHub Action: [link](https://docs.github.com/en/actions)



Here is the high-level summary/understanding of the above code (github _[link](https://github.com/axioned/axioned-wordpress-starter/blob/main/.github/workflows/dev.yml))_:


- **on**: Since we are using GitHub Actions to deploy the files from the GitHub server/repository to the development server _(where the site is hosted)_
    - **push**: The GitHub Action is set on the push on the **staging branch** as you can notice in the above code snippet.
    - Whenever there are any changes pushed to the staging branch the GitHub Action hook will be triggered.
    - As per our above code, the further job will be executed

- Similarly, you can set triggers on pull as well but in the above case we have set on the push

- **runs-on**: Under Jobs, we mentioned the **runs-on** parameter which indicated the jobs further we have declared to be run on. _(This is an action runner -> the actions mentioned in the script will be run on)_

- In our case, we used the latest version of ubuntu _(you can use the self-hosted or any other inbuild versions from GitHub, etc)_
    - But as we have to execute some ssh and other commands so we used ubuntu with the latest version as an example

- Post that we have declared all the steps for our action runner to execute once the trigger is hit

- **uses**: here we have declared checkouts v2 action
    - It is an official GitHub Action used to check out a repository so a workflow can access it.

- Then we have given a name to the current job as “Rsync to WP Engine Dev Env”
    - This will be visible while the build is running

- **env**: then we have set some environment variables which we will be using further for server connection and the deployment
    - **dest**: here we used the destination variable for storing the server details this can be found on the hosting dashboard like WPEngine/AWS etc.
    - Syntax -> **username@remote_host(IP/Domain_name)**
    - while adding destination make sure you add the correct path for the deployment _(where needs to be copied/deployed the entire repo as mentioned in the script)_
    - In our example, the site was installed at `/sites/dev123v/` the entire wp setup and their files

- **run**: then we will proceed with the actual command that needs to be executed by action runner on the latest ubuntu as we declared in the above code

- Here we are executing multiple commands in series in order to deploy files from the GitHub repository to the development server
    - **echo**: using this line we are saving/creating a private key file which will be required to establish a connection between the GitHub ubuntu machine and the development server further
        - In our example, **DEV_DEPLOY_KEY_PRIVATE** this variable was used in the script
        - This needs to be created on GitHub under **Settings -> Secrets -> Action** _(If not visible please contact the IT team for access)_
        - The private key you can download it from the server using your hosting login
    - **chmod**: setting up the proper permissions to the file
    - **[rsync](https://help.ubuntu.com/community/rsync)**: using this command we are transferring the files from the GitHub repository to the actual development server over an ssh connection
        - For more information about **rsync, ssh commands** and there usage you can check these Official links[rsync](https://help.ubuntu.com/community/rsync) [ssh](https://linux.die.net/man/1/ssh)
    - As you noticed in the above code we have excluded a few of the directories and files similarly you can add if any file/folder needs to be excluded in a deployment like a config file etc.

- In the end, we are deleting the cache folder _(this is optional only if the cache is stored on a server in that case we can execute this)_

<u>**NOTE:**</u> As we saw in the above script consists of a single trigger which is attached on push action on the staging branch similarly you can write for multiple branches separate code for the production server and separate for the staging server _(recommended in that case create separate files ex. **prod.yml** and **dev.yml** files)_
