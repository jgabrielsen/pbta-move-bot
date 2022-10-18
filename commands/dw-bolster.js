const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-bolster')
		.setDescription('Bolster (Special Move)'),
	async execute(interaction) {
		return interaction.reply('> 📖 **Bolster** 📖\n> When you *spend your leisure time in study, meditation, or hard practice,* you gain preparation. If you prepare for a week or more, take 1 preparation. If you prepare for a month or longer, take 3 instead. When your preparation pays off spend 1 preparation for +1 to any roll. You can only spend one preparation per roll.');
	},
};
