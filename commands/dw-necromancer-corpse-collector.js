const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-necromancer-corpse-collector')
		.setDescription('Corpse Collector (Necromancer Starting Move)'),
	async execute(interaction) {
		return interaction.reply('> **Corpse Collector**\n> When you spend a few minutes collecting a corpse to use later, you can store it in one of your *3 Hexed Canopic Jars*. Even though a jar is only about the size of your fist and almost weightless, each can magically hold one corpse of any size. Opening a jar drops the corpse in front of you.');
	},
};
