# GitHub Action Reusable Workflows

You can find more information about this project/repository and how to use it in following blog post:

- [Ultimate CI Pipeline for All of Your Python Projects](https://martinheinz.dev/blog/69)

## Configure Sonar

- Go to <https://github.com/settings/installations/>, Click _Configure_ next to SonarCloud App
- In Repository access select your desired repository, Click save
- At <https://sonarcloud.io/projects/create>, Choose your repo, Click _Set Up_
- Navigate to <https://sonarcloud.io/account/security/>, Enter name, Click _Generate_, Copy the token
- In repository, navigate to Settings -> Secrets -> Actions
    - `https://github.com/<USERNAME>/<REPO_NAME>/settings/secrets/actions`
- Click _New Repository Secret_:
    - Name: `SONAR_TOKEN`
    - Value: _SonarCloud Token_

- In `https://sonarcloud.io/project/analysis_method?id=<PROJECT_KEY>` disable the _SonarCloud Automatic Analysis_

## Configure CodeClimate

- Navigate to <https://codeclimate.com/github/repos/new> and add repository
- Click _Repo Settings_ (top left)
- Go to _Test Coverage_ tab under _Analysis_ and copy _Test reporter ID_

- In repository, navigate to Settings -> Secrets -> Actions
    - `https://github.com/<USERNAME>/<REPO_NAME>/settings/secrets/actions`
- Click _New Repository Secret_:
    - Name: `CC_TEST_REPORTER_ID`
    - Value: _Test reporter ID_

## Configure Slack Notification

Create Slack App:
- Navigate to <https://api.slack.com/apps/>, Click _Create an App_, Give it name, choose workspace
- Click _Incoming Webhook_, Switch on with slider
- Click _Add New Webhook to Workspace_
- Choose Channel, Click _Allow_, Copy _Webhook URL_

- In repository, navigate to Settings -> Secrets -> Actions
    - `https://github.com/<USERNAME>/<REPO_NAME>/settings/secrets/actions`
- Click _New Repository Secret_:
    - Name: `SLACK_WEBHOOK`
    - Value: _Webhook URL_
