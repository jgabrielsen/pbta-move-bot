const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-make-camp')
		.setDescription('Make Camp (Special Move)'),
	async execute(interaction) {
		return interaction.reply('> ⛺️ **Make Camp** ⛺️\n> When you *settle in to rest* consume a ration. If you’re somewhere dangerous decide the watch order as well. If you have enough XP you may level up. When you wake from at least a few uninterrupted hours of sleep heal damage equal to half your max HP.');
	},
};
