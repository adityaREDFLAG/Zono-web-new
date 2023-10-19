module.exports = {
	route: "/",
	run: (app, req, res, next) => {
		res.render("index", app.defaultViewConf)
	}
}