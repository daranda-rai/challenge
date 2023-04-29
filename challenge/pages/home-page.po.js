exports.HomePage = class HomePage {
	constructor(page) {
		this.page = page
		this.acceptAllCookies = page.locator("cmm-buttons-wrapper [data-test='handle-accept-all-button']")
		this.ourModels = page.getByRole("menuitem", { name: "Our models" })     
		this.hatchbacks = page.locator(`[name=${process.env.CAR_BODY}]`)
		this.hatchbackCarChoice = page.locator(`[href="https://www.mercedes-benz.co.uk/passengercars/models/hatchback/${process.env.CAR_MODEL}/overview.html"] p`)
		this.buildYourCar = page.locator("div[class='owc-stage__cta-wrapper wb-grid-row'] a[href*='/car-configurator']")
	}
}
