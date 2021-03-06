const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-discern-realities')
		.setDescription('Discern Realities (Basic Move)'),
	async execute(interaction) {
		return interaction.reply('> ð **Discern Realities** ð\n> When you *closely study a situation or person,* roll+Wis.\n> â¢ On a 10+, ask the GM 3 questions from the list below.\n> â¢ On a 7â9, ask 1.\n> Either way, take +1 forward when acting on the answers.\n> â¢ What happened here recently?\n> â¢ What is about to happen?\n> â¢ What should I be on the lookout for?\n> â¢ What here is useful or valuable to me?\n> â¢ Whoâs really in control here?\n> â¢ What here is not what it appears to be?');
	},
};
