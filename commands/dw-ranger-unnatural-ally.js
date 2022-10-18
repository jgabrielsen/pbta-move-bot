const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-ranger-unnatural-ally')
		.setDescription('Unnatural Ally (Ranger Advanced Move)'),
	async execute(interaction) {
		return interaction.reply('> **Unnatural Ally**\n> Your animal companion is a monster, not an animal. Describe it. Give it +2 ferocity and +1 instinct, plus a new training.');
	},
};
