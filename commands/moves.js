const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('!moves')
		.setDescription('Replies with Moves list'),
	async execute(interaction) {
		return interaction.reply('> **Dungeon World Commands**
        > Hack and Slash: `!hackandslash`
        > Volley: `!volley`
        > Defy Danger: `!defydanger`
        > Defend: `!defend`
        > Spout Lore: `!spoutlore`
        > Discern Realities: `!discernrealities`
        > Aid or Interfere: `!aid`
        > Special Moves and Class Moves coming soon.');
	},
};
