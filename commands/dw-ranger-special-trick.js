const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-ranger-special-trick')
		.setDescription('Special Trick (Ranger Advanced Move)'),
	async execute(interaction) {
		return interaction.reply('> **Special Trick**\n> Choose a move from another class. So long as you are working with your animal companion you have access to that move.');
	},
};
