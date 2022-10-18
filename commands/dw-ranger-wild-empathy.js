const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-ranger-wild-empathy')
		.setDescription('Wild Empathy (Ranger Advanced Move)'),
	async execute(interaction) {
		return interaction.reply('> **Wild Empathy**\n> You can speak with and understand animals.');
	},
};
