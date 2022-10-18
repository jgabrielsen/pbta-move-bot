const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-ranger-hunters-prey')
		.setDescription('Hunter’s Prey (Ranger Advanced Move)'),
	async execute(interaction) {
		return interaction.reply('> **Hunter’s Prey**\n> Replaces *Familiar Prey*\n> When you spout lore about a monster you use WIS instead of INT. On a 12+, in addition to the normal effects, you get to ask the GM any one question about the subject.');
	},
};
