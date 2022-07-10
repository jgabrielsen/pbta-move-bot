const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-spout-lore')
		.setDescription('Spout Lore (Basic Move)'),
	async execute(interaction) {
		return interaction.reply('> 🗣 **Spout Lore** 🗣\n> When you *consult your accumulated knowledge about something,* roll+Int.\n> • On a 10+, the GM will tell you something interesting and useful about the subject relevant to your situation.\n> • On a 7–9, the GM will only tell you something interesting—it’s on you to make it useful. The GM might ask you “How do you know this?” Tell them the truth, now.');
	},
};
