const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-end-of-session')
		.setDescription('End of Session (Special Move)'),
	async execute(interaction) {
		return interaction.reply('> βοΈ **End of Session** π\n> When you *reach the end of a session*, choose one of your bonds that you feel is resolved (completely explored, no longer relevant, or otherwise). Ask the player of the character you have the bond with if they agree. If they do, mark XP and write a new bond with whomever you wish.\n> Once bonds have been updated look at your alignment. If you fulfilled that alignment at least once this session, mark XP. Then answer these three questions as a group:\n> β’ Did we learn something new and important about the world?\n> β’ Did we overcome a notable monster or enemy?\n> β’ Did we loot a memorable treasure?\n> β’ For each βyesβ answer everyone marks XP.');
	},
};
