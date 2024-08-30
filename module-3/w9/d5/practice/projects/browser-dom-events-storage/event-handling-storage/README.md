# Event Handling And Storage Practice Assessment Project

Open the __index.html__ file in a browser. The HTML page contains a list of
tests that you must make pass.

For example, the first test reads:

**PROBLEM 1: Make the circle blue**

> - Button `id`: `make-circle-blue`
> - Div `id`: `blue-border-circle`
>
> When you click the button below, you should add the `"blue-fill"` CSS class to
> the blue circle. Adding the `"blue-fill"` CSS class will turn the inside of
> the circle blue.

Open __your-code.js__ and write the code to make that happen. If you have
written the code correctly, then you can click the button and see the circle
turn blue.

**Don't forget to refresh your page when you make changes in the JavaScript
code!**

**You might want to use a VS code extension like Live Server. Problem #4 will
not work unless you have a server running, and it will refresh your page for you
as you save your JavaScript file.**

Make all of the tests pass by writing code in __your-code.js__ and interacting
with the test in the way specified.

*Some of the problems have a BONUS to implement.  This is to assist in your
practice of the covered material and would not appear on the actual assessment.*

## Installing Cypress and running the tests

**Tip:** This installation might take a long time! While you are waiting for
everything to install, follow the directions above.

Run `npm install` to install the Cypress testing library.

For Ubuntu/Linux/WSL users, you may have to update your environment to support
Cypress. Based on the [docs for Cypress environment dependencies], run the
following commands to make sure your environment is up to date.

```shell
sudo apt-get update
sudo apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
```

Run `npm test` to make sure you pass all the test specs.

To see an array of all the failed specs, run `npm run test-for-failures -s`. If
every spec passes, you should see this output:

```sh
[]
```

Any errors will appear like this:

```sh
[
  {
    "fullTitle": "Event handling and local storage - Problem 2 - counts by one",
    "error": "AssertionError: Timed out retrying after 4000ms: Expected to find content: '1' within the element: <span#counter-value> but never did.\n    at Context.eval (webpack://event-handling-storage/./cypress/e2e/test.cy.js:31:9)"
  }
]
```

[docs for Cypress environment dependencies]: https://docs.cypress.io/guides/continuous-integration/introduction#Dependencies
