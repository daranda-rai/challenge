const { test, expect } = require("@playwright/test")
const { beforeEachTasks } = require("../../helpers/hooks")
const { HomePage } = require("../../pages/home-page.po")
const { CarConfig } = require("../../pages/car-config.po")
const utils = require("../../helpers/utils")

test.beforeEach(async({ page }, testInfo) => {
	beforeEachTasks(testInfo)
	await page.goto("", { waitUntil:"load" })
})

test.afterEach(async({ page }, testInfo) => {
	page.close()
	console.log ("### Finished test '" + testInfo.title + "' with status: " + testInfo.status)
}) 

test("Validate A class model prices are between £15k gbp and £60k @challenge " + process.env.TEST_ENV, async({ page }, testInfo) => {
	const homePage = new HomePage(page)
	const carConfig = new CarConfig(page)

	await test.step("test", async() => {
		await homePage.acceptAllCookies.click()
		await homePage.ourModels.click()
		await homePage.hatchbacks.click()
		await homePage.hatchbackCarChoice.click()
		await homePage.buildYourCar.click()
		await carConfig.fuelTypeDropdown.click()
		await carConfig.fuelType.check()

		// When I was doing this test, dropdown was bugged and required 2 clicks to close on chromium and firefox, safari was fine.
		// Behaviour was: dropdown closes and opens again very fast
		await carConfig.fuelTypeDropdownCounter.waitFor()
		await carConfig.fuelTypeDropdown.click()
		await carConfig.fuelTypeDropdownCounter.waitFor()
		
		// If you use the below timeout, the above mentioned bug will be visible in the screenshot (dropdown open) 
		// Without the timeout the screenshot will display no filter on the dropdown but the filter is selected it's just a matter of miliseconds
		// If it's fixed by the time you check this, ignore these comments :)
		// await page.waitForTimeout(100)
		await page.screenshot({ path: `testEvidence/${testInfo.title}.png`, fullPage:true })
		
		// List is ordered by price, so we're getting the first price and last price
		const minPrice = await carConfig.carPrice.first().textContent()
		const maxPrice = await carConfig.carPrice.last().textContent()

		// Checking if prices are inbetween allowed min and max
		expect(utils.convertPriceToNumber(minPrice) > process.env.MIN_PRICE)
		expect(utils.convertPriceToNumber(maxPrice) < process.env.MAX_PRICE)

		// Adding car variant + price to the txt file we're creating
		const minPriceAndCar = await carConfig.carVariant.first().textContent() + " - " + minPrice
		const maxPriceAndCar = await carConfig.carVariant.last().textContent() + " - " + maxPrice
		let data = [ minPriceAndCar, maxPriceAndCar ]
		utils.saveEvidenceTxt(testInfo.title, data)
	})
})