const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-last-breath')
		.setDescription('Last Breath (Special Move)'),
	async execute(interaction) {
		return interaction.reply('> ☠️ **Last Breath** ☠️\n> When *you’re dying* you catch a glimpse of what lies beyond the Black Gates of Death’s Kingdom (the GM will describe it). Then roll (just roll, +nothing—yeah, Death doesn’t care how tough or cool you are).\n> • On a 10+, you’ve cheated Death—you’re in a bad spot but you’re still alive.\n> • On a 7–9, Death himself will offer you a bargain. Take it and stabilize or refuse and pass beyond the Black Gates into whatever fate awaits you.\n> • On 6-, your fate is sealed. You’re marked as Death’s own and you’ll cross the threshold soon. The GM will tell you when.');
	},
};
