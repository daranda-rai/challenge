const { test } = require("@playwright/test")
const { beforeEachTasks } = require("../../helpers/hooks")
const CovidAPI = require("../../api/covid-api")
const utils = require("../../helpers/utils")
const covidApi = new CovidAPI()


test.beforeEach(async({}, testInfo) => {
	beforeEachTasks(testInfo)
})

test.afterEach(async({}, testInfo) => {
	console.log ("### Finished test '" + testInfo.title + "' with status: " + testInfo.status)
}) 
test("Get daily covid cases in the uk", async({}, testInfo) => {

	//GET covid data with structure and filter defined in the .env file
	const responseData = await covidApi.getCovidCasesWithFilters()

	// Gets the last date and case number
	const date = await responseData.data[0].date
	const newCases = await responseData.data[0].newCases

	// Publishes the date and cases in a simple txt file on testEvidence folder
	let data = [ date, newCases ]
	utils.saveEvidenceTxt(testInfo.title, data)
})