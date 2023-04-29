module.exports = {
	root: true,
	"env": {
		"browser": true,
		"node": true,
		"es2021": true
	},
	"extends": "eslint:recommended",
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"ignorePatterns":[ "allure-report" ],
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"never"
		],
		"eqeqeq": [ "error", "always" ],
		"no-debugger": "error",
		"no-dupe-else-if": "error",
		"no-dupe-class-members": "error",
		"valid-typeof": "error",
		"no-multiple-empty-lines": [ "error", { "max": 1 , "maxEOF": 0, "maxBOF": 1 } ],
		"spaced-comment": [ "error", "always", { "markers": [ "/" ] } ],
		"array-bracket-spacing": [ "error", "always" ],
		"object-curly-spacing": [ "error", "always" ],
		"arrow-body-style": [ "error", "always" ],
		"block-scoped-var": "error",
		"dot-notation": "error",
		"default-case": "error",
		"no-lonely-if": "error",
		"no-undef-init": "error",
		"no-var": "error",
		"lines-between-class-members": [ "error", "always" ],
		"object-curly-newline": [ "error", { "ObjectPattern": { "multiline": true } , "ImportDeclaration": "always", "ExportDeclaration": "always" } ],
		"brace-style": "error",
		"padded-blocks": [ "error", "never" ],
		"space-before-blocks": "error",
		"space-before-function-paren": [ "error", "never" ],
		"block-spacing": "error",
		"arrow-spacing": "error"
	}
}
