const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-necromancer-attack-command')
		.setDescription('Attack Command (Necromancer Starting Move)'),
	async execute(interaction) {
		return interaction.reply('> **Attack Command**\n> When you order the Animated Corpse to perform a harmful action, such as attacking or using a special move, roll +INT.\n> ° On a 10+, the action is successful and it deals 1d6 damage.\n> ° On a 7-9, the same, but you lose 1 Power.');
	},
};
