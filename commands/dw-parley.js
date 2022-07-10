const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-parley')
		.setDescription('Parley (Basic Move)'),
	async execute(interaction) {
		return interaction.reply('> 💬 **Parley** 💬\n> When you *have leverage on a GM Character and manipulate them,* roll+Cha. Leverage is something they need or want.\n> • On a 10+, they do what you ask if you first promise what they ask of you.\n> • On a 7–9, they will do what you ask, but need some concrete assurance of your promise, right now.');
	},
};
