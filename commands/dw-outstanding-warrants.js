const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-outstanding-warrants')
		.setDescription('Outstanding Warrants (Special Move)'),
	async execute(interaction) {
		return interaction.reply('> 📜 **Outstanding Warrants** 📜\n> When you *return to a civilized place in which you’ve caused trouble before*, roll+Cha.\n> • On a 10+, word has spread of your deeds and everyone recognizes you.\n> • On a 7–9, as above, and the GM chooses a complication:\n> --- The local constabulary has a warrant out for your arrest.\n> — Someone has put a price on your head.\n> — Someone important to you has been put in a bad spot as a result of your actions.');
	},
};
