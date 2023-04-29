const { allure } = require("allure-playwright")

exports.beforeEachTasks = (testInfo) => {
	console.log ("### Running test '" + testInfo.title + "'")

	let env = process.env.TEST_ENV
	let feature

	// Get test title to check if its smoke or regression based on the tags
	if (testInfo.title.includes("smoke")) {
		feature = "Smoke Tests"
	} else {
		feature = "Regression Tests"
	}
	
	allure.epic(feature)
	allure.feature("Environment: " + env)
}