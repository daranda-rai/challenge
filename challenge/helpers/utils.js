const fs = require("fs")

class Utils {
	// Replaces every sequence of non-digits (used to remove currency marks)
	async convertPriceToNumber(price) {
		return await price.replace(/\D/g, "")
	}

	// Takes an array and adds it to a txt file, 1 line per item
	async saveEvidenceTxt(testInfo, data) {
		const stream = fs.createWriteStream(`testEvidence/${testInfo}.txt`)
		data.forEach(line => {
			stream.write(line + "\n")
		} )
		stream.end()
	}
}
module.exports = new Utils()