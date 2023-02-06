const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-template')
		.setDescription('Name (TK Move)'),
	async execute(interaction) {
		return interaction.reply('> 📖 **Name** 📖\n> ');
	},
};
