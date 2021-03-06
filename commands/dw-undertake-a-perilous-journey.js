const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-undertake-a-perilous-journey')
		.setDescription('Undertake A Perilous Journey (Special Move)'),
	async execute(interaction) {
		return interaction.reply('> πΊ **Undertake a Perilous Journey** πΊ\n> When you *travel through hostile territory*, choose one member of the party to act as trailblazer, one to scout ahead, and one to be quartermaster. Each character with a job to do rolls+Wis.\n> β’ On a 10+:\n> β the quartermaster reduces the number of rations required by one\n> β the trailblazer reduces the amount of time it takes to reach your destination (the GM will say by how much)\n> β the scout will spot any trouble quick enough to let you get the drop on it\n> β’ On a 7β9, each role performs their job as expected: the normal number of rations are consumed, the journey takes about as long as expected, no one gets the drop on you but you donβt get the drop on them either.');
	},
};
