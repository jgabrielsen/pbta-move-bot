const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-ranger-animal-companion')
		.setDescription('Animal Companion (Ranger Starting Move)'),
	async execute(interaction) {
		return interaction.reply('> **Animal Companion**\n> You have a supernatural connection with a loyal animal. You can’t talk to it per se but it always acts as you wish it to. Name your animal companion and choose a species:\n> *Wolf, cougar, bear, eagle, dog, hawk, cat, owl, pigeon, rat, mule*\n> Choose a base:\n> • Ferocity +2, Cunning +1, 1 Armor, Instinct +1\n> • Ferocity +2, Cunning +2, 0 Armor, Instinct +1\n> • Ferocity +1, Cunning +2, 1 Armor, Instinct +1\n> • Ferocity +3, Cunning +1, 1 Armor, Instinct +2\n> Choose as many strengths as its ferocity:\n> *Fast, burly, huge, calm, adaptable, quick reflexes, tireless, camouflage, ferocious, intimidating, keen senses, stealthy*\n> Your animal companion is trained to fight humanoids. Choose as many additional trainings as its cunning:\n> *Hunt, search, scout, guard, fight monsters, perform, labor, travel*\n> Choose as many weaknesses as its instinct:\n> *Flighty, savage, slow, broken, frightening, forgetful, stubborn, lame*');
	},
};
