module.exports = {
	name: 'chop',
	aliases: [],
	permissions: [],
	ownerOnly: false,
	enabled: true,
	cooldown: 300,
	usage: 'chop',
	exec: async (client, message, args) => {
		// Wood script because I suck. U_U
		const woodNames = ['oak wood'];
		var woodRNG = woodNames[Math.floor(Math.random() * woodNames.length)];

		// MongoDB Scripts
		const User = require('../../models/userModel.js');
		// Check for data
		let data = await User.findOne({ userID: message.author.id });

		if (!data) {
			return message.channel.send(
				"You've have not registered yet, please use a!profile"
			);
		}
		// TEXT WALL INCOMING!!!
		if (woodRNG === 'oak wood') {
			message.channel.send(
				`${message.author.username} has chopped down a tree and got 1 oak wood!`
			);
			data.resources.oakwood += 1;
		}
		data.save();
	},
};
