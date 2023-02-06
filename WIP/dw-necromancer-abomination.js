const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-necromancer-')
		.setDescription('aaa (Necromancer Advanced Move)'),
	async execute(interaction) {
		return interaction.reply('> **’Name**\n> ');
	},
};
