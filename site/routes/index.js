// Getting FileSystem
const fs = require("fs")

// Exporting the route loader function
module.exports = (app) => {
	// Getting the routes
	const files = fs.readdirSync(__dirname).filter(x => x != "index.js" && x.endsWith(".js"))

	// Load the routes
	files.forEach(route => {
		var data = require(__dirname + "/" + route)
		app.get(data.route, (...args) => data.run(app, ...args))
	})
}