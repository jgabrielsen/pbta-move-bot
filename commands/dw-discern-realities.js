const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-discern-realities')
		.setDescription('Discern Realities (Basic Move)'),
	async execute(interaction) {
		return interaction.reply('> 👁 **Discern Realities** 👁\n> When you *closely study a situation or person,* roll+Wis.\n> • On a 10+, ask the GM 3 questions from the list below.\n> • On a 7–9, ask 1.\n> Either way, take +1 forward when acting on the answers.\n> • What happened here recently?\n> • What is about to happen?\n> • What should I be on the lookout for?\n> • What here is useful or valuable to me?\n> • Who’s really in control here?\n> • What here is not what it appears to be?');
	},
};
