const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-ranger-racial')
		.setDescription('Ranger Racial Moves'),
	async execute(interaction) {
		return interaction.reply('> **Racial Moves** \n> *Elf*\n> When you undertake a perilous journey through wilderness whatever job you take you succeed as if you rolled a 10+.\n> *Human*\n> When you make camp in a dungeon or city, you don’t need to consume a ration.');
	},
};
