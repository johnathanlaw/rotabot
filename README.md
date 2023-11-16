# rotabot
## Introduction
Created by JLaw, riding on the coattails of Mia!

## Instructions
1. Ensure that you have added the Zapier app to the Slack channel you want to post to.
    * You can do this by typing `/apps` into the text entry field at the bottom, and then searching for `Zapier`.
2. Ensure that the rota spreadsheet is viewable by `All Matillion` or by `Johnathan Law` at a minimum.
3. Follow the example configuration block below, and add it to this repository.
    * Commit and push your changes to `main` inside the `config.json` file
4. This will be triggered the following day at 8am. The file is read from GitHub at execution time.

### Example Configuration
```json
{
    "name": "MDL GF Rota", // The name of this rota
    "description": "The MDL greenflag rota, posts to #mdl-team", // A description of what this rota is for
    "owner": "Johnathan Law", // A person who can be contacted for issues
    "active": true, // When false, messages will be sent to #rotabot-inactive and when active they will be sent to the channel referenced by slack-channel
    "spreadsheet": "1XHDVi_VrUW0MX9emmpdqTsa78Xc6Qqpal24xidBXRb8", // The spreadsheet to look at, the value between 'spreadsheets/d/' and '/edit#gid='
    "sheet-id": "971719928", // The ID of the sheet to look at, the value after '/edit#gid=' - note that the first sheet on a spreadsheet is 0.
    "slack-channel": "C029XCPDNH0", // The Slack channel to send to, you must provide the channel ID and not the name!
    "message": "Hello! :wave: The Green Flag holder today is:\n`CDC:` <<2>>\n`Batch:` <<3>>\n\nUpdate rota <https://docs.google.com/spreadsheets/d/1XHDVi_VrUW0MX9emmpdqTsa78Xc6Qqpal24xidBXRb8/edit#gid=0|here>.\n\nSee details about what the Green Flag means <https://docs.google.com/document/d/1GOGUruD6ijSHyXgZLyJSRMyuSf0NVY1ICzl9PxaU208/edit|here>." // The message to send, see https://help.zapier.com/hc/en-us/articles/8496025607181
}
```