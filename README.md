# rotabot
## Introduction
Created by JLaw, riding on the coattails of Mia!

## Instructions
1. Ensure that you have added `Johnathan Law` to the Slack channel you want to post to.
2. Get the Rota Spreadsheet set up the way you want it, it has a little bit of complexity!
   * Take a copy of the template sheet, available [here](https://docs.google.com/spreadsheets/d/1LBo8Lt-7Xk8r78Ydobe9fDvtf98JP5yOCzZOjsiTtok/edit?usp=sharing).
   * Ensure that the rota spreadsheet is viewable by `All Matillion` or by `Johnathan Law` at a minimum.
   * Complete the sheets named `Rota` and `Slack` sufficiently. Ensure you have enough days populated in `Rota` and names in `Slack`.
   * `Slack` sheet maps between names in the `Rota` and how they are mentioned in Slack. Ensure you use the member ID and the format `<@MEMBERID>`
     * Member ID can be retrieved from a user's profile, clicking on the triple dot menu, and selecting "Copy member ID"
3. Follow the example configuration block below, and add it to this repository.
    * Commit and push your changes to `main` inside the `config.json` file to add a new rota.
4. This will be triggered the following day at 8am. The file is read from GitHub at execution time.

### Example Configuration
```json
{
    "name": "TESTING", // The name of this rota
    "description": "The testing rota, post inactive content to #rotabot-inactive",  // A description of what this rota is for
    "owner": "JLaw", // A person who can be contacted for issues
    "active": false, // When false, messages will be sent to #rotabot-inactive and when active they will be sent to the channel referenced by slack-channel
    "spreadsheet": "1LBo8Lt-7Xk8r78Ydobe9fDvtf98JP5yOCzZOjsiTtok", // The spreadsheet to look at, the value between 'spreadsheets/d/' and '/edit#gid='
    "sheet-id": "971719928", // The ID of the sheet to look at, the value after '/edit#gid=' - note that the first sheet on a spreadsheet is 0.
    "slack-channel": "C036500A5HA", // The Slack channel to send to, you must provide the channel ID and not the name!
    "message": "Good morning! :wave: This is a test message!\n`Person A:` <<2>>\n`Person B:` <<3>>\n`Person C:` <<4>>\n`Person D:` <<5>>\n`Person E:` <<6>>\n`Person F:` <<7>>\n`Person G:` <<8>>\n`Person H:` <<9>>\n\nUpdate rota <https://docs.google.com/spreadsheets/d/1LBo8Lt-7Xk8r78Ydobe9fDvtf98JP5yOCzZOjsiTtok/edit?usp=sharing|here>. "// The message to send, see https://help.zapier.com/hc/en-us/articles/8496025607181
}
```