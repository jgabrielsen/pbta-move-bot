const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-ranger-command')
		.setDescription('Command (Ranger Starting Move)'),
	async execute(interaction) {
		return interaction.reply('> **Command**\n> When you work with your animal companion on something it’s trained in\n> • and you attack the same target, add its ferocity to your damage\n> • and you track, add its cunning to your roll\n> • and you take damage, add its armor to your armor\n> • and you discern realities, add its cunning to your roll\n> • and you parley, add its cunning to your roll\n> • and someone interferes with you, add its instinct to their roll');
	},
};
