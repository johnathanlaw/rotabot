# rotabot v4

## Introduction and History

Created by JLaw, riding on the coattails of Mia!

- `v1` - Manual :sad:
- `v2` - Powered by Make and introduced by Mia!
- `v3` - Powered by Zapier, and allowed configuration and multiple rotas!
- `v4` - Powered by Workato! Allows same post to multiple channels, and uses service account!

## Instructions

1. Ensure that you have added `Workbot for Matillion Workspace` to the Slack channel you want to post to.
   - You **must** complete this step, use `/invite`, select `Add apps to this channel` and find `Workbot for Matillion Workspace`.
2. Get the Rota Spreadsheet set up the way you want it, it has a little bit of complexity!
   - Take a copy of the template sheet, available [here](https://docs.google.com/spreadsheets/d/1LBo8Lt-7Xk8r78Ydobe9fDvtf98JP5yOCzZOjsiTtok/edit?usp=sharing).
   - Ensure that the rota spreadsheet is viewable by `All Matillion` or by `Johnathan Law` at a minimum.
   - Complete the sheets named `Rota` and `Slack` sufficiently. Ensure you have enough days populated in `Rota` and names in `Slack`.
   - `Slack` sheet maps between names in the `Rota` and how they are mentioned in Slack. Ensure you use the member ID and the format `<@MEMBERID>`
   - Member ID can be retrieved from a user's profile, clicking on the triple dot menu, and selecting "Copy member ID"
3. Follow the example configuration block below, and add it to this repository.
   - Commit and push your changes to `main` inside the `workato-config.json` file to add a new rota.
4. This will be triggered the following day at 8am. The file is read from GitHub at execution time.
   - You may wish to use the Slack channel `#rotabot-inactive` for testing. Its channel ID is `C064EJX84V6`.
   - Note that the `days-active` block is a `string` - This validates each day (Monday - Friday) if the rota should be posted that day. `Y` means active, `N` means inactive.
     - This means `YYYYY` is every weekday, `YNNNN` only posts on Monday.

### Example Configuration

```json
{
  "name": "TESTING", // The name of this rota
  "description": "The testing rota", // A description of what this rota is for
  "owner": "JLaw", // A person who can be contacted for issues
  "days_active": "YNNNN", // The days that this should message should be sent. Note that the first entry is Monday, and it is index 0.
  "spreadsheet": "1LBo8Lt-7Xk8r78Ydobe9fDvtf98JP5yOCzZOjsiTtok", // The spreadsheet to look at, the value between 'spreadsheets/d/' and '/edit#gid='
  "sheet_name": "Today", // The name of the sheet to look at, with the typical answer if using the template it will be "Today"
  "slack_channel": ["C06PARZUMJA", "C06PARZUMJA"], // An array of Slack channel(s) to send the message to, you must provide the channel ID and not the name!
  "message": "Good morning! :wave: This is a test message!\n`Person A:` <<col_B>>\n`Person B:` <<col_C>>\n`Person C:` <<col_D>>\n`Person D:` <<col_E>>\n`Person E:` <<col_F>>\n`Person F:` <<col_G>>\n`Person G:` <<col_H>>\n`Person H:` <<col_I>>\n\nUpdate rota <https://docs.google.com/spreadsheets/d/1LBo8Lt-7Xk8r78Ydobe9fDvtf98JP5yOCzZOjsiTtok/edit?usp=sharing|here>. " // The message to send, see https://help.zapier.com/hc/en-us/articles/8496025607181
}
```

## Testing

There is a separate Workato recipe that can be enabled for testing. It is configured to ignore the Slack channels provided, and exclusively post into #rotabot-testing.
Please ask Johnathan for the URL, you submit the same config that is stored in this repository via a POST request, and the config in the body.
