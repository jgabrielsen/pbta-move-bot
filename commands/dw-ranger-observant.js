const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-ranger-observant')
		.setDescription('Observant (Ranger Advanced Move)'),
	async execute(interaction) {
		return interaction.reply('> **Observant**\n> When you hunt and track, on a hit you may also ask one question about the creature you are tracking from the discern realities list for free.');
	},
};
