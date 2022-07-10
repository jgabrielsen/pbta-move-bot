const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-recruit')
		.setDescription('Recruit (Special Move)'),
	async execute(interaction) {
		return interaction.reply('> 👤 **Recruit** 👤\n> When you put out word that you’re looking to hire help, roll:\n> — +1 if you make it known that your pay is generous\n> — +1 if you make it known what you’re setting out to do\n> — +1 if you make it known that they’ll get a share of whatever you find\n> — +1 if you have a useful reputation around these parts\n> ° On a 10+, you’ve got your pick of a number of skilled applicants, your choice who you hire, no penalty for not taking them along.\n> ° On a 7–9, you’ll have to settle for someone close to what you want or turn them away.\n> ° On a miss someone influential and ill-suited declares they’d like to come along (a foolhardy youth, a loose-cannon, or a veiled enemy, for example), bring them and take the consequences or turn them away. If you turn away applicants you take -1 forward to recruit.');
	},
};
