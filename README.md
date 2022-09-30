
# Leet Quest Pool - UI | [DEMO](https://leet-quest-pool.netlify.app/) | [Documentation](https://docs.google.com/document/d/11J6LwqGh0dpzkQg7w6uj75nROSfSLmVftCq_Doa69ng/edit) | [JIRA](https://clairvoyant.atlassian.net/jira/software/projects/CLAIRTHON/boards/246/backlog)
A platform to conduct the first technical round for a candidate shortlisted for interview and create a pool of question banks along with providing a way to add/retrieve questions from question banks



## Status

### Netlify Pipeline
| Job       | Status                               |
| --------- | ------------------------------------ |
| Build     | [![Netlify Status](https://api.netlify.com/api/v1/badges/3e4a82e0-cac6-42ce-9a67-9f9b7d2e5b45/deploy-status)](https://app.netlify.com/sites/leet-quest-pool/deploys)       |


### Deployment

| Environment | Deployment                               |
| ----------- | ---------------------------------------- |
| Prod        | [![Netlify Status](https://api.netlify.com/api/v1/badges/3e4a82e0-cac6-42ce-9a67-9f9b7d2e5b45/deploy-status?branch=master)](https://app.netlify.com/sites/leet-quest-pool/deploys) |



## 🚀 Quick Start

0. **Pre-requisites**

   - Angular CLI
   - node >= v14.19.3
   - npm >= 6.14.17

1. **Clone the repository**

   Connecting to the repository with SSH is preferred. Learn how to [add an SSH key](https://docs.github.com/en/enterprise-server@3.0/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account) to your GitHub account

   ```sh
   git clone git@github.com:teamclairvoyant/clairthon-rising-hackatoons.git
   cd clairthon-rising-hackatoons
   ```


3. **Install the dependencies**

   ```sh
   npm install
   ```


5. **Start the application**

   ```sh
   # Services pointed to local hosted services
   npm run start
   ```

   This will start the application on http://localhost:4200

### Additional configuration options

- Run Script `npm run husky` to initiate pre-commit and pre-push hooks  

### API's that this app depends on:

- Register Candidate
- Update candidate details
- List of Registered Candidates
- Generate Test Link
- Get Candidate Result feedback
- Upload questions
- Download Questions

## Available scripts

### Formatting

Formats the files based on the `.prettierrc` configuration file

```sh
npm run prettier
```

### Unit Tests

Can run the test using below command 

```sh
npm run test
```

For running the test headless

```sh
npm run test-ci
```

### Code coverage

The code coverage report can be viewed in the `coverage/index.html` directory
Also below command will give test coverage.

```sh
npm run test-ci
```

## Contributing

### Scripts
The source code in this repository is formatted and linted in accordance to the  `eslintrc.json`  and  `.prettierrc`  configuration files.

To ensure consistency throughout the codebase, it is required that the code be properly formatted and linted before it is checked into the repository. The exact command for linting and/or formatting a file depends on the code editor/IDE that is being used, what's important is that the code editor/IDE needs to pick up the configuration files that are defined in this repository.

-   [ESLint/TSLint](https://eslint.org/docs/user-guide/integrations)
-   [Prettier](https://prettier.io/docs/en/editors.html)

## Git

### Branching strategy

-   `master`  is the central branch
-   utilizing a fork is recommended but not required
-   branch names are represented by the parent JIRA ticket, all lowercase
    -   eg.  `crh-1`

### Commit

-   commit messages should be thoughtfully crafted and properly scoped
-   include descriptions wherever possible
-   refrain from writing generic commit messages
    -   1 or 2 of these kinds of commits will be tolerated but any more, the pull request will be automatically rejected

#### Format

`<JIRA-TICKET>(<SCOPE>): <SUMMARY>`

##### [](https://github.com/sflyinc-shutterfly/mp-test-execution-ui/blob/master/CONTRIBUTING.md#description)Description

JIRA-TICKET : The associated JIRA ticket number that this PR/commit covers, uppercase recommended

SCOPE : feat|fix|docs|style|refactor|test|chore

SUMMARY : A short summary in present tense. Not capitalized. No period at the end

##### Examples:

-   CRH-24(chore): Minor changes
-   CRH-66(feat): Redirect/rewrite rules for netlify

### Pull request (PR)

-   PR title should be properly scoped
-   ⚠️  review all file changes prior to creating the PR
-   description describes all the changes included
-   only  `squash and merge`
    -   exceptions for  `merge`  is when the PR is being merged into the intermediary branch
-   delete branch after successful merge

#### PR Feedback

-   make changes based on comments added by the reviewer(s)
-   be empowered to make change(s) based on your discretion, you are not required to follow whatever change(s) that are mentioned by the reviewer(s)
-   resolve the comments appropriately after the necessary change has been added, this will help other reviewer(s) to properly review the PR



