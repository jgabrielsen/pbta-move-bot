const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('!discernrealities')
		.setDescription('Replies with Discern Realities basic move'),
	async execute(interaction) {
		return interaction.reply('> 👁 **Discern Realities** 👁
		> When you *closely study a situation or person,* roll+Wis.
		> • On a 10+, ask the GM 3 questions from the list below.
		> • On a 7–9, ask 1.
		> Either way, take +1 forward when acting on the answers.
		> • What happened here recently?
		> • What is about to happen?
		> • What should I be on the lookout for?
		> • What here is useful or valuable to me?
		> • Who’s really in control here?
		> • What here is not what it appears to be?');
	},
};
