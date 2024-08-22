# HTML/CSS 2 Practice Assessment - Web Traffic

Welcome to the web traffic assessment!

This assessment consists of three coding projects:

1. Promises Project (10 specs)
2. HTML Web Server Project (14 specs)
3. JSON API Server Project (14 specs)

Each project exists in its own directory. Each project directory has an
additional __README__ with project-specific instructions.

Your objective is to complete all three projects so that all test specs pass.
Each spec is worth 1 point.

* __Total Possible Points:__ 38 points

You will have **2 hours and 30 minutes** to complete the assessment.

## Resources

For this assessment, you are allowed to use the following resources:

* [MDN]
* A whiteboard or paper to work out problems/code, but it must be within camera
  range
* VS Code or a console for coding, testing, and experimentation
* Node
* Postman (when useful)

You are **NOT** allowed to refer to any other resources, including--but not
limited to--other websites (e.g., AA Open, StackOverflow), communication apps
(e.g., Slack, Discord), search engines, notes, or any of your previously
written code.

## Setup

1. Clone this starter repo and open it in VS Code.
2. Run `npm install` in the root directory.
3. Run `npm test` in the root directory to see all the specs you need to pass.

## Submission (ONLY FOR ACTUAL ASSESSMENT)

> The following are the submission instructions for the actual assessment. They
> will not work for submitting the practice assessment but are printed here so
> you can familiarize yourself with them.

When you are ready to submit:

1. Run `npm test` in the root directory to re-run all of the tests from the
   three components. You can also test all of the components with the following
   command:

   ```sh
   npm run test-for-failures -s
   ```

   The `test-for-failures` command will list the failing specs for each
   component, e.g.:

   ```sh
   HTML-web-server failures:
   [
     {
       "fullTitle": "01 - Get all the colors Request should have the appropriate request method",
       "error": "method of the request is not correct"
     },
     {
       "fullTitle": "01 - Get all the colors Request it should have the appropriate request URL",
       "error": "URL of the request is not correct"
     }
   ]
   ```

   The output for an assessment with everything correct will show no
   failures for any component:

   ```sh
   Promises failures:
   []

   HTML-web-server failures:
   []
   
   JSON-api-server failures:
   []
   ```

  For more complete error messages that include stack traces, run the tests for
  the specific component from within that component's directory. See the
  component __README__s for more info.
  
2. Fix any syntax errors that cause the tests to crash. **If a unit test crashes
   or the tests fail to complete their run, you will receive a 0 for the coding
   portion of this assessment.** You can fail specs, but all the tests have to
   be able to finish running.

   **Tip:** If you run out of time to debug, just comment out any code that is
   causing your programs to crash.

3. Add, commit, and push your changed files:

   ```sh
   git add .
   git commit -m "Finish the assessment (or some such descriptive message)"
   git push
   ```

   **Note:** The first time you run `git push`, git will tell you to run a more
   complete version of the command:

   ```sh
   git push --set-upstream origin <your branch>
   ```

You can run tests, `add` files, and `commit` files as often as you wish, but
only your first **two pushes** will be graded. (If for some reason you need more
than two pushes, you must plead your case to an Instructor.)

Good luck!

**Copyright App Academy. Please do not share this repo or post any parts of it
online. App Academy will take violations very seriously.**

[MDN]: https://developer.mozilla.org/en-US/
