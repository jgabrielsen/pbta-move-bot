const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-ranger-well-trained')
		.setDescription('Well-Trained (Ranger Advanced Move)'),
	async execute(interaction) {
		return interaction.reply('> **Well-Trained**\n> Choose another training for your animal companion.');
	},
};
