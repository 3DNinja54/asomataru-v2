const { Schema, model } = require('mongoose');

const { resources } = require('./resources/minerals.js');
const { fish } = require('./resources/fish.js');
const { weapons } = require('./resources/weapon.js');

const UserSchema = new Schema({
	userID: String,

	coins: { type: Number, default: 0 },
	xp: { type: Number, default: 0 },
	level: { type: Number, default: 1 },
	xptoNextLevel: { type: Number, default: 100 },
	hp: { type: Number, default: 50 },
	affection: { type: Number, default: 0 },
	resources,
	fish,
	weapons,
});

module.exports = model('User', UserSchema);
