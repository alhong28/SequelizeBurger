
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

var Burger = sequelize.define("burger", {
		routeName: {
			type: Sequelize.STRING
		},
		name: {
			type: Sequelize.STRING
		},
		devoured: {
			type: Sequelize.BOOLEAN
		}
	}, {
		timestamps: true
});

Character.sync({force: true});

module.exports = Burger;