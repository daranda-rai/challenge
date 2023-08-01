const { expect, request } = require("@playwright/test")

module.exports = class Methods {
	async getData(apiUrl) {
		const context = await request.newContext()
		console.log(apiUrl)
		const response = await context.get(apiUrl)
		expect(response.ok()).toBeTruthy()
		return await response.json()
	}
} 
