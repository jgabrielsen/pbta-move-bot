const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dw-necromancer-hexed-body-part')
		.setDescription('Hexed Body Part (Necromancer Starting Move)'),
	async execute(interaction) {
		return interaction.reply('> **Hexed Body Part**\n> A part of your body is hexed and can be freely detached and reattached at will. Choose one:\n> • *All Seeing Eye:* When your hexed eye is detached, you can still see through it.\n> • *Lendable Ear:* When your hexed ear is detached, you can still hear through it.\n> • *Idle Finger:* When you detach your hexed finger, name something you can see. As	long as the finger remains detached, it will point to what you named.\n> • *Creepy Toe:* For reasons you don’t wholly understand, when you eat your hexed toe, it heals you for 5 Damage and then regrows after a couple days. Don’t forget to describe the taste. Note: You’re not sure what happens when someone else eats it, nobody’s been willing to try...');
	},
};
