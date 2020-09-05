const mongoose = require("mongoose");

const { resources } = require('./resources/minerals.js');
const { fish } = require('./resources/fish.js');
const UserSchema = new mongoose.Schema ({
    userID: String,

    coins: {type: Number, default: 0},
    xp: {type: Number, default: 0},
    level: {type: Number, default: 1},
    xptoNextLevel: {type: Number, default: 100},
    hp: {type: Number, default: 20},
    resources,
    fish
})

module.exports = mongoose.model("User", UserSchema);