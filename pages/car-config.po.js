exports.CarConfig = class CarConfig {
	constructor(page) {
		this.page = page
		this.fuelTypeDropdown = page.locator("ccwb-multi-select button[class='button']")
		this.fuelType = page.locator("ccwb-checkbox").filter({ hasText: `${process.env.FUEL_TYPE}` }).locator("div").first()
		this.fuelTypeDropdownCounter = page.locator("ccwb-counter")
		this.carPrice = page.locator("[class='cc-motorization-header__price--with-environmental-hint']")
		this.carVariant = page.locator(".cc-motorization-header__vehicle-name")
	}
}
