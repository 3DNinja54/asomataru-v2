module.exports = (client) => {
	client.once('ready', () => {
		console.log(`${client.user.tag} is ready!`);
		client.user.setPresence({
			activity: { name: 'Asomataru | v2.4.0.1', type: 'PLAYING' },
			status: 'online',
		});
	});
};
