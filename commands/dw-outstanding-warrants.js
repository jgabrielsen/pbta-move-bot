const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-outstanding-warrants')
		.setDescription('Outstanding Warrants (Special Move)'),
	async execute(interaction) {
		return interaction.reply('> ð **Outstanding Warrants** ð\n> When you *return to a civilized place in which youâve caused trouble before*, roll+Cha.\n> â¢ On a 10+, word has spread of your deeds and everyone recognizes you.\n> â¢ On a 7â9, as above, and the GM chooses a complication:\n> --- The local constabulary has a warrant out for your arrest.\n> â Someone has put a price on your head.\n> â Someone important to you has been put in a bad spot as a result of your actions.');
	},
};
