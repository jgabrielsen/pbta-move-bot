const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-ranger-smaugs-belly')
		.setDescription('Smaug’s Belly (Ranger Advanced Move)'),
	async execute(interaction) {
		return interaction.reply('> **Smaug’s Belly**\n> When you know your target’s weakest point your arrows have 2 piercing.');
	},
};
