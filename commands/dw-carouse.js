const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-carouse')
		.setDescription('Carouse (Special Move)'),
	async execute(interaction) {
		return interaction.reply('> 🎉 **Carouse** 🎉\n> When you *return triumphant and throw a big party*, spend 100 coins and roll +1 for every extra 100 coins spent. ✴On a 10+, choose 3. ✴On a 7–9, choose 1. ✴On a miss, you still choose one, but things get really out of hand (the GM will say how).\n> • You befriend a useful NPC.\n> • You hear rumors of an opportunity.\n> • You gain useful information.\n> • You are not entangled, ensorcelled, or tricked.');
	},
};
