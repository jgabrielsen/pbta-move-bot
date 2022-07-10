const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-necromancer-curse')
		.setDescription('Curse (Necromancer Starting Move)'),
	async execute(interaction) {
		return interaction.reply('> **Curse**\n> When you use dark magic to curse someone or something, tell the GM what you’re trying to	achieve. Curses are always possible, but the GM will give you one to four conditions, such as:\n> • It requires the blood of ______\n> • It will require a lot of money\n> • You’ll need a rare component\n> • The best you can do is a lesser or limited version\n> • It will take days/weeks/months before the curse takes effect\n> • ______ will know or hear about it\n> • You’ll need to travel to ______');
	},
};
