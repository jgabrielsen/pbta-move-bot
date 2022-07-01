const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('moves')
		.setDescription('Replies with Moves list'),
	async execute(interaction) {
		return interaction.reply('> **Dungeon World Commands**\n> Hack and Slash: `!hackandslash`\n> Volley: `!volley`\n> Defy Danger: `!defydanger`\n> Defend: `!defend`\n> Spout Lore: `!spoutlore`\n> Discern Realities: `!discernrealities`\n> Aid or Interfere: `!aid`\n> Special Moves and Class Moves coming soon.');
	},
};
