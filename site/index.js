// Exporting the site
module.exports = () => {
	// Defining required stuff.
	const express = require("express")
	const app = express()

	// Applying settings.
	app.set("view engine", "ejs")
	app.set("views", __dirname + "/views")
	app.defaultViewConf = {
		title: false,
	}

	// Applying routes.
	require("./routes")(app)

	// Running the server.
	app.listen(3000, () => {
		console.log("Express is listening on port 3000.")
	})
}