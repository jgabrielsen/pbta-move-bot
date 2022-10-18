const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-supply')
		.setDescription('Supply (Special Move)'),
	async execute(interaction) {
		return interaction.reply('> 💰 **Supply** 💰\n> When you *go to buy something with gold on hand*, if it’s something readily available in the settlement you’re in, you can buy it at market price. If it’s something special, beyond what’s usually available here, or non-mundane, roll+Cha.\n> • On a 10+, you find what you’re looking for at a fair price.\n> * On a 7–9, you’ll have to pay more or settle for something that’s not exactly what you wanted, but close. The GM will tell you what your options are.');
	},
};
