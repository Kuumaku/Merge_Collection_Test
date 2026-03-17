module.exports = {
  testEnvironment: "node",
  verbose: true,
  preset: "ts-jest",
  collectCoverage: true,
  coverageDirectory: "coverage",
  testMatch: ["**/*.test.ts"],
  reporters: [
    "default",
    [
      "jest-html-reporter",
      {
        pageTitle: "Test Report",
        outputPath: "test-report.html",
        includeFailureMsg: true,
        includeConsoleLog: true,
        sort: "titleAsc",
      },
    ],
  ],
};
