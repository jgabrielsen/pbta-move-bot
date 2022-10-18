const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-necromancer-raise-the-dead')
		.setDescription('Raise the Dead (Necromancer Starting Move)'),
	async execute(interaction) {
		return interaction.reply('> **Raise the Dead**\n> *When you seek to use the blackest of magics to reanimate the dead*, choose a nearby corpse or one from your collection and roll +INT. Only one corpse can be controlled at a time and it must be around humanoid size or smaller.\n> • On a 10+, the Animated Corpse rises under your control and *you have 3 Power*.\n> • On a 7-9, also choose one:\n> — The flesh resists you, start with 1 less Power.\n> — You draw unwelcome attention or put yourself in a spot. The GM will tell you how.\n> — Magic barely holds the corpse together and afterwards, the corpse will disintegrate.\n> *When you run out of Power*, the Animated Corpse collapses. If there’s anything left, you can attempt to raise it again.');
	},
};
