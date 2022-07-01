const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('aid')
		.setDescription('Replies with the Aid or Interfere basic move'),
	async execute(interaction) {
		return interaction.reply('> 🤝 **Aid or Interfere** 🤝\n> When you *help or hinder someone you have a bond with,* roll+Bond with them.\n> • On a 10+ they take +1 or -2, your choice.\n> • On a 7–9 you also expose yourself to danger, retribution, or cost.');
	},
};
