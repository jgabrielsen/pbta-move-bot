# PbtA Move Bot
A simple Discord bot that returns moves from PbtA games for quick reference. Based on the [Command Handling section of the Discord.js guide](https://discordjs.guide/creating-your-bot/command-handling.html). No fancy features or character sheets or dice rollers; you probably already have those if you need them. I just wanted a way to quickly reference moves and rules without breaking the flow of a hybrid video session / play-by-post Dungeon World game.

> This is all probably pretty obvious for any competent developer, but hopefully helps anyone who wants to get a simple bot like this running with less googling and headache than my non-node-developer ass had to go through.

## To deploy your own version on your local machine
This bot is only intended to run on one server. You can't add my bot to your server; you'll have to create your own:
1. [Install Node](https://discordjs.guide/preparations/#installing-node-js), [initiate the project folder](https://discordjs.guide/preparations/#initiating-a-project-folder), and [install Discord.js](https://discordjs.guide/preparations/#installing-discord-js) (and also probably [install a linter](https://discordjs.guide/preparations/setting-up-a-linter.html), especially if you plan to add on any new functionality).
1. [Create your bot in the Discord Developer Portal](https://discordjs.guide/preparations/setting-up-a-bot-application.html) and [add it to your server](https://discordjs.guide/preparations/adding-your-bot-to-servers.html).
1. Edit [config.json](config.json) for your bot and server.
    - `clientId` is your bot's unique identifier. In the Discord Developers Portal, go to your app's General Information page and look for the "Application ID."
    - `guildId` is the server you've added your bot to. The easiest way to find this is to open the Discord web app, navigate to your server, and then look at the URL. The URL is formated like this: `https://discord.com/channels/[Guild ID]/[Channel ID]`
    - `token` is your bot's secret token that gives it permissions on your server. In the Discord Developers Portal, go to your app's Bot page and under the "Build-A-Bot" header, look for "Token."
        - Make sure your token is always private and never exposed, or else shitbags on the internet could gain control of your bot and do shitty things with it.
1. Add and edit the commands in the `/commands` folder as needed.
    - Be sure none of them have the same value for `.setName()`.
    - Make sure the values in `interaction.reply()` don't have any linebreaks. If you want a linebreak to show up when the bot posts to Discord, use `\n`.
    - As a style preference, I prefer to start each line with a `>` so the moves are displayed in quotation blocks, but feel free to experiement.
1. When all your commands are ready, open a terminal window in your bot's project folder and run `node deploy-commands.js`. You should only need to do this once.
1. To run the bot, run `node index.js` in the terminal window. If it's running correctly, it will say "Ready!"
1. To use commands, go to your server in Discord and type `/[command name]`.

## To add or edit commands once your bot is already running
1. Stop the bot
1. Make your changes to the commands
1. Run `node deploy-commands.js` again to register the commands with your server
1. Run `node index.js` to start the bot back up

## Future plans
I initially created this bot for Dungeon World, but I also have plans to add moves for other games I'm likely to play soon. But I'll never make it any more complex than a simple call-and-resonse rules reference bot.
