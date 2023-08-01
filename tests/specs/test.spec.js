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
	const responseData = await covidApi.getCovidCasesWithFilters()
	const date = await responseData.data[0].date
	const newCases = await responseData.data[0].newCases

	let data = [ date, newCases ]
	utils.saveEvidenceTxt(testInfo.title, data)
})