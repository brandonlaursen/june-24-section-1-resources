const Module = require('module');
const _require = Module.prototype.require;

function getGlobalNodeModulesPath() {
  const { execSync } = _require('node:child_process');
  let path = "";
  try {
    path = execSync('npm list -g').toString().split("\n")[0];
  } catch (err) {
    console.error("Make sure you have Node installed correctly.\nThen run this command in your terminal: npm install -g chai@4.3.10 chai-spies mocha\nRestart your terminal.");
    process.exit(1);
  }
  return path;
}

let globalNodeModulesPath;
const GLOBAL_MODULES = ["chai", "chai-spies", "mocha"];

Module.prototype.require = function() {
  try {
    return _require.apply(this, arguments);
  } catch (err) {
    if (GLOBAL_MODULES.includes(arguments[0])) {
      if (!globalNodeModulesPath) {
        globalNodeModulesPath = getGlobalNodeModulesPath();
      }
      return _require.call(
        this,
        `${globalNodeModulesPath}/node_modules/${arguments[0]}/`,
        ...Array.from(arguments).slice(1)
      );
    } else {
      throw err;
    }
  }
}
