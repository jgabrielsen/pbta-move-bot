const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-undertake-a-perilous-journey')
		.setDescription('Undertake A Perilous Journey (Special Move)'),
	async execute(interaction) {
		return interaction.reply('> 🗺 **Undertake a Perilous Journey** 🗺\n> When you *travel through hostile territory*, choose one member of the party to act as trailblazer, one to scout ahead, and one to be quartermaster. Each character with a job to do rolls+Wis.\n> • On a 10+:\n> — the quartermaster reduces the number of rations required by one\n> — the trailblazer reduces the amount of time it takes to reach your destination (the GM will say by how much)\n> — the scout will spot any trouble quick enough to let you get the drop on it\n> • On a 7–9, each role performs their job as expected: the normal number of rations are consumed, the journey takes about as long as expected, no one gets the drop on you but you don’t get the drop on them either.');
	},
};
