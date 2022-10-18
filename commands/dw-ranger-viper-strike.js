const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-ranger-viper-strike')
		.setDescription('Viper Strike (Ranger Advanced Move)'),
	async execute(interaction) {
		return interaction.reply('> **Viper Strike**\n> When you strike an enemy with two weapons at once, add an extra 1d4 damage for your off-hand strike.');
	},
};
