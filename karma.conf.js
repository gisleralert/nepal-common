module.exports = function (config) {
  config.set({

    frameworks: ["mocha", "karma-typescript"],

    files: [
      { pattern: "src/**/*.ts" },
      { pattern: "test/**/*.ts" }
    ],

    preprocessors: {
      "**/*.ts": ["karma-typescript"]
    },

    reporters: ["dots", "karma-typescript"],

    browsers: ["ChromeHeadless"],

    karmaTypescriptConfig: {
      reports:
      {
        "html": {
          "directory": "coverage",
          "subdirectory": "report"
        },
        "text-summary": ""
      },
      compilerOptions: {
        lib: [
          "es6",
          "es2017",
          "dom"
        ],
        esModuleInterop: true,
        sourceMaps: true
      }
    },

    singleRun: true
  });
};
