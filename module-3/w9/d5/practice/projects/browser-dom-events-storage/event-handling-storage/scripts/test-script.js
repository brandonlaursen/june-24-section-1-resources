const fs = require("fs");
const cypress = require("cypress");

async function cypressJSON() {
  const res = await cypress.run({
    reporter: "json",
    reporterOptions: { output: "results.json" },
  });
  const results = {
    stats: res.runs[0].reporterStats,
    failures: res.runs[0].tests.filter((test) => test.state === "failed"),
  };
  results.failures = results.failures.map((test) => {
    test.fullTitle = test.title.join(" - ");
    return test;
  });
  fs.writeFileSync("output.json", JSON.stringify(results));
}

cypressJSON();
