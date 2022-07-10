const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-ranger-follow-me')
		.setDescription('Follow Me (Ranger Advanced Move)'),
	async execute(interaction) {
		return interaction.reply('> **Follow Me**\n> When you undertake a perilous journey you can take two roles. You make a separate roll for each.');
	},
};
