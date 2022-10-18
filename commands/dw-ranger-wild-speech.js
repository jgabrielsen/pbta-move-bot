const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-ranger-wild-speech')
		.setDescription('Wild Speech (Ranger Advanced Move)'),
	async execute(interaction) {
		return interaction.reply('> **Wild Speech**\n> Replaces *Wild Empathy*\n> You can speak with and understand any non-magical, non-planar creature.');
	},
};
