const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-ranger-called-shot')
		.setDescription('Called Shot (Ranger Starting Move)'),
	async execute(interaction) {
		return interaction.reply('> **Called Shot**\n> When you attack a defenseless or surprised enemy at range, you can choose to deal your damage or name your target and roll+DEX.\n> *Head*\n> • 10+: As 7–9, plus your damage\n> • 7-9: They do nothing but stand and drool for a few moments.\n> *Arms*\n> • 10+: As 7-9, plus your damage\n> • 7-9: They drop anything they’re holding.\n> *Legs*\n> • 10+: As 7-9, plus your damage\n> • 7-9: They’re hobbled and slow moving.');
	},
};
