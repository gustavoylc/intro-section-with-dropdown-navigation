module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
        "standard",
		"plugin:react/recommended",
		"eslint-config-prettier",
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react"],
	rules: {},
};
