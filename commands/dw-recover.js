const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-recover')
		.setDescription('Recover (Special Move)'),
	async execute(interaction) {
		return interaction.reply('> 🛌 **Recover** 🛌\n> When you *do nothing but rest in comfort and safety* after a day of rest you recover all your HP. After three days of rest you remove one debility of your choice. If you’re under the care of a healer (magical or otherwise) you heal a debility for every two days of rest instead.');
	},
};
