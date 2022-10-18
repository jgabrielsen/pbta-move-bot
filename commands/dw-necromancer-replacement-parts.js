const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-necromancer-replacement-parts')
		.setDescription('Replacement Parts (Necromancer Starting Move)'),
	async execute(interaction) {
		return interaction.reply('> **Replacement Parts**\n> Your knowledge of stitching together corpses allows you to reattach body parts, such as severed limbs, eyeballs, or teeth. It takes you a few hours and you’ll need the original body part or one that is similar to the original. Besides stitch lines and a slight odor, the body part is as good as new.');
	},
};
