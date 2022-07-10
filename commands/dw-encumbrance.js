const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-encumbrance')
		.setDescription('Encumbrance (Special Move)'),
	async execute(interaction) {
		return interaction.reply('> 🏋🏽 **Encumbrance** 🏋🏽\n> When you *make a move while carrying weight* you may be encumbered. If your weight carried is:\n> • Equal to or less than your load, you suffer no penalty\n> • Less than or equal to your load+2, you take -1 ongoing until you lighten your burden\n> • Greater than your load+2, you have a choice: drop at least 1 weight and roll at -1, or automatically fail');
	},
};
