const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-ranger-strider')
		.setDescription('Strider (Ranger Advanced Move)'),
	async execute(interaction) {
		return interaction.reply('> **Strider**\n> Replaces *Follow Me*\n> When you undertake a perilous journey you can take two roles. Roll twice and use the better result for both roles.');
	},
};
