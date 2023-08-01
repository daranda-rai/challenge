const { expect, request } = require("@playwright/test")

module.exports = class Methods {

	// GET Request with default headers, only receives url and returns response json
	async getData(apiUrl) {
		const context = await request.newContext()
		console.log(apiUrl)
		const response = await context.get(apiUrl)
		expect(response.ok()).toBeTruthy()
		return await response.json()
	}
} 
