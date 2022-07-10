const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-ranger-a-safer-place')
		.setDescription('A Safer Place (Ranger Advanced Move)'),
	async execute(interaction) {
		return interaction.reply('> **A Safer Place**\n> Replaces *A Safe Place*\n> When you set the watch for the night everyone takes +1 to take watch. After a night in camp when you set the watch everyone takes +1 forward.');
	},
};
