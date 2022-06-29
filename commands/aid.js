const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		return interaction.reply('> 🤝 **Aid or Interfere** 🤝
		> When you *help or hinder someone you have a bond with,* roll+Bond with them.
		> • On a 10+ they take +1 or -2, your choice.
		> • On a 7–9 you also expose yourself to danger, retribution, or cost.');
	},
};
