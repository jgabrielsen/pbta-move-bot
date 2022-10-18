const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-ranger-half-elven')
		.setDescription('Half-Elven (Ranger Advanced Move)'),
	async execute(interaction) {
		return interaction.reply('> **Half-Elven**\n> Somewhere in your lineage lies mixed blood and it begins to show its presence. You gain the elf starting move if you took the human one at character creation or vice versa.\n> *You may take this move only if it is your first advancement.*');
	},
};
