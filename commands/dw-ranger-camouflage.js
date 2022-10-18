const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-ranger-camouflage')
		.setDescription('Camouflage (Ranger Advanced Move)'),
	async execute(interaction) {
		return interaction.reply('> **Camouflage**\n> When you *keep still in natural surroundings*, enemies never spot you until you make a movement.');
	},
};
