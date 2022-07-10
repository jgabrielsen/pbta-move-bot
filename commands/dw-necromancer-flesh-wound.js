const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-necromancer-flesh-wound')
		.setDescription('Flesh Wound (Necromancer Starting Move)'),
	async execute(interaction) {
		return interaction.reply('> **Flesh Wound**\n> The Animated Corpse ignores most lower damage attacks, but *when the Animated Corpse takes a significant hit*, the GM will tell you an important appendage (such as a claw, limb, or jaw) that may come loose. Spend 1 Power to keep the corpse together or the appendage will be destroyed');
	},
};
