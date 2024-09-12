'use strict';

const {
  reporters: { Base },
  Runner: {
    constants: {
      EVENT_SUITE_BEGIN,
      EVENT_TEST_PASS,
      EVENT_TEST_PENDING,
      EVENT_TEST_FAIL,
      EVENT_TEST_END, 
      EVENT_RUN_END,
    }
  }
} = require('mocha');
const fs = require('fs');
/**
 * Constructs a new `JSON` reporter instance.
 *
 * @public
 * @class JSON
 * @memberof Mocha.reporters
 * @extends Mocha.reporters.Base
 * @param {Runner} runner - Instance triggers reporter actions.
 * @param {Object} [options] - runner options
 */
function JSONReporter(runner, options = {}) {
  Base.call(this, runner, options);
  const self = this;
  const tests = [];
  const passes = [];
  let failures = [];
  const pending = [];
  let numTests = null;
  runner.on(EVENT_SUITE_BEGIN, function (suite) {
    if (numTests === null) numTests = suite.total();
  });
  runner.on(EVENT_TEST_END, function (test) {
    tests.push(test);
  });
  runner.on(EVENT_TEST_PASS, function (test) {
    passes.push(test);
  });
  runner.on(EVENT_TEST_FAIL, function (test) {
    failures.push(test);
  });
  runner.on(EVENT_TEST_PENDING, function (test) {
    pending.push(test);
  });
  runner.once(EVENT_RUN_END, function () {
    const stats = self.stats;
    stats.tests = numTests;
    stats.failures = numTests - passes.length;
    delete stats.pending;
    failures = pending.concat(failures).map(clean);
    const obj = {
      stats,
      failures,
    };
    runner.testResults = obj;
    if (!failures.length) {
      fs.writeFileSync("output.json", JSON.stringify(obj, null, 4), "utf-8");
      return;
    }
    const statsStr = JSON.stringify(stats, null, 4).replace(/}$/, "  }");
    const failuresStr = JSON.stringify(failures)
      .replace(/\{\"fullTitle\":/g, '    { "fullTitle": ')
      .replace(/\\u001b\[\d\dm/g, "")
      .replace(/\\n/g, "; ")
      .replace(/\",\"error\":/g, ' ",\n      "error": ')
      .replace(/\},/g, "\n    },\n")
      .replace(/\}\]/g, "\n    }]");
    fs.writeFileSync(
      "output.json",
      `{\n  "stats": ${statsStr},\n  "failures": ${failuresStr}\n}`,
      "utf-8"
    );
  });
}
/**
 * Return a plain-object representation of `test`
 * free of cyclic properties etc.
 *
 * @private
 * @param {Object} test
 * @return {Object}
 */
function clean(test) {
  let err = test.err || {};
  if (err instanceof Error) {
    err = errorJSON(err);
  }
  return {
    fullTitle: test.fullTitle(),
    error: err.message
  };
}
/**
 * Transform an Error object into a JSON object.
 *
 * @private
 * @param {Error} err
 * @return {Object}
 */
function errorJSON(err) {
  const res = {};
  Object.getOwnPropertyNames(err).forEach(function (key) {
    res[key] = err[key];
  }, err);
  return res;
}
JSONReporter.description = 'single JSON object';

module.exports = JSONReporter;
