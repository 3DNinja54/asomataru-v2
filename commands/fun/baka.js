const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
	name: 'baka',
	aliases: ['idiot'],
	permissions: [],
	ownerOnly: false,
	enabled: true,
	cooldown: 0,
	usage: 'baka (@mention)',
	exec: async (client, message, args) => {
		const User = require('../../models/userModel');

		const member = message.mentions.users.first() || message.member;
		const embed = new MessageEmbed();

		let userData = await User.findOne({ userID: message.author.id });

		if (!userData) {
			return message.channel.send('No data about you, use a!profile!');
		}

		let { data } = await axios.get('https://nekos.life/api/v2/img/baka');

		if (member.id == message.author.id) {
			embed.setTitle(`They're calling themselves... a baka?`);
		} else {
			embed.setTitle(`${member.username} is a baka!`);
			userData.affection -= 5;
			userData.save();
			embed.setFooter(
				`You've loss 5 affection for being mean! You now have ${userData.affection} Affection.`
			);
		}

		embed.setColor('RED');
		embed.setImage(data.url);
		message.channel.send(embed);
	},
};
