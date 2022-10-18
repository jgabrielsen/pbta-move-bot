const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-ranger-vipers-fangs')
		.setDescription('Viper’s Fangs (Ranger Advanced Move)'),
	async execute(interaction) {
		return interaction.reply('> **Viper’s Fangs**\n> Replaces *Viper’s Strike*\n> When you strike an enemy with two weapons at once, add an extra 1d8 damage for your off-hand strike.');
	},
};
