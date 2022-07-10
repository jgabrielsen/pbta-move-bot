const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-necromancer-piece-of-mind')
		.setDescription('Piece of Mind (Necromancer Starting Move)'),
	async execute(interaction) {
		return interaction.reply('> **Piece of Mind**\n> *When you or an Animated Corpse eats part of a sentient creature’s brain*, the GM will tell you an interesting piece of knowledge the creature possessed.');
	},
};
