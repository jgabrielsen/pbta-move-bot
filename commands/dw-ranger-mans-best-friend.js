const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-ranger-mans-best-friend')
		.setDescription('Man’s Best Friend (Ranger Advanced Move)'),
	async execute(interaction) {
		return interaction.reply('> **Man’s Best Friend**\n> When you *allow your animal companion to take a blow that was meant for you*, the damage is negated and your animal companion’s ferocity becomes 0. If its ferocity is already 0 you can’t use this ability. When you have a few hours of rest with your animal companion its ferocity returns to normal.');
	},
};
