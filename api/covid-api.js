const Methods = require("./methods")
const methods = new Methods()

module.exports = class CovidAPI {
	covidApiUrl() {
		return process.env.BASE_URL
	}

	covidApiFiltersAndStructureUrl(filter, structure) {
		return (`${this.covidApiUrl()}` + `?filters=${filter}` + `&structure={${structure}}`)
	}

	async getCovidCasesWithFilters() {
		const response = await methods.getData(this.covidApiFiltersAndStructureUrl(process.env.FILTERS, process.env.STRUCTURE))
		return response
	}
} 
