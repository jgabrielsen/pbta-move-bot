const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-ranger-hunt-and-track')
		.setDescription('Hunt and Track (Ranger Starting Move)'),
	async execute(interaction) {
		return interaction.reply('> **Hunt and Track** \n> When you follow a trail of clues left behind by passing creatures, roll+WIS.\n> • On a 7+, you follow the creature’s trail until there’s a significant change in its direction or mode of travel.\n> • On a 10+, you also choose 1:\n> — Gain a useful bit of information about your quarry, the GM will tell you what\n> — Determine what caused the trail to end');
	},
};
