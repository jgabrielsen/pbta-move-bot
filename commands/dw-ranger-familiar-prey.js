const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-ranger-familiar-prey')
		.setDescription('Familiar Prey (Ranger Advanced Move)'),
	async execute(interaction) {
		return interaction.reply('> **Familiar Prey**\n> When you spout lore about a monster you use WIS instead of INT.');
	},
};
