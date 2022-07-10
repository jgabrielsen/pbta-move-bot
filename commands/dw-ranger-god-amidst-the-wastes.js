const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-ranger-god-amidst-the-wastes')
		.setDescription('God Amidst The Wastes (Ranger Advanced Move)'),
	async execute(interaction) {
		return interaction.reply('> **God Amidst The Wastes**\n> Dedicate yourself to a deity (name a new one or choose one that’s already been established). You gain the commune and cast a spell cleric moves. When you select this move, treat yourself as a cleric of level 1 for using spells. Every time you gain a level thereafter, increase your effective cleric level by 1.');
	},
};
