export default {
	testEnvironment: "jsdom",
	transform: {
		"^.+\\.tsx?$": "ts-jest",
	},
	moduleDirectories: [
		"node_modules",
		"test", // a utility folder
	],
	coveragePathIgnorePatterns: ["test"],
	moduleNameMapper: {
		"\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__mocks__/fileMock.ts",
		"^@/(.*)$": "<rootDir>/src/$1",
	},
	setupFilesAfterEnv: ["./test/setupTests.ts"],
	coverageThreshold: {
		global: {
			branches: 65,
			functions: 65,
			lines: 65,
			statements: 65,
		},
	},
};
