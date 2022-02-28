module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ["plugin:react/recommended", "plugin:prettier/recommended"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "prettier", "@typescript-eslint"],
	rules: {
		"react/react-in-jsx-scope": "off",
		"react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }],
	},
};