const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-ranger-a-safe-place')
		.setDescription('A Safe Place (Ranger Advanced Move)'),
	async execute(interaction) {
		return interaction.reply('> **A Safe Place**\n> When you set the watch for the night, everyone takes +1 to take watch./n>');
	},
};
