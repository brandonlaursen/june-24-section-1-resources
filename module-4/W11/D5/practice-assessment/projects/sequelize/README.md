# Express-SQL 2 Practice Assessment - Sequelize

Welcome to the Sequelize Practice Assessment!

This assessment asks you to add Sequelize onto existing Express applications. It
consists of 4 discrete phases:

1. Phase 1 - Migrations and Models (19 test specs)
2. Phase 2 - Seeding (2 test specs)
3. Phase 3 - API Endpoints (2 test specs)
4. Phase 4 - Associations, Eager Loading, and Ordering (6 test specs)

Each phase exists in its own directory. Each phase's directory has an additional
__README__ with phase-specific instructions.

Your objective is to complete all 4 phases so that all test specs pass. Each
spec is worth 1 point.

You will have **2 hours** to complete the assessment.

## General instructions and tips

Use the technologies you have used up to this point. They are all listed in the
root **package.json** for your convenience.

* Express.js
* Sequelize
* Sequelize CLI
* SQLite3
* DotENV
* nodemon (for development purposes)

Do not add or remove any dependencies from the **package.json**.

You **DO NOT** need to run `npx sequelize-cli init` to initialize Sequelize as
it is already done for you. The **.sequelizerc** file in each phase's directory
describes the Sequelize configuration for its application.

## Resources

For this assessment, you are allowed to use the following resources:

<!--!!FT -->
* [MDN]
* A whiteboard or paper to work out problems/code, but it must be within camera
  range
* VS Code or a console for coding, testing, and experimentation
* Node
* Postman (when useful)
* Official documentation, including:
  * [ExpressJS]
  * [SQLite3]
  * [Sequelize]

You are **NOT** allowed to refer to any other resources, including--but not
limited to--other websites (e.g., a/A curriculum on Canvas, StackOverflow),
communication apps (e.g., Slack, Discord), search engines, notes, or any of your
previously written code.

<!--!!END -->
<!--!!PT -->
* [a/A curriculum on Canvas][canvas]
* [MDN]
* A whiteboard or paper to work out problems/code, but it must be within camera
  range
* VS Code or a console for coding, testing, and experimentation
* Node
* Postman (when useful)
* Previously written code you wrote yourself
  * Except for code from previous assessment submissions
* Comments within code
  * If there are comments in your code about your specific code and about what
    your code is doing, that is appropriate. If your comments are about concepts
    and based on the readings, then that counts as notes. Those would not be
    appropriate.
* Official documentation, including:
  * [ExpressJS]
  * [SQLite3]
  * [Sequelize]

You are **NOT** allowed to refer to any other resources, including--but not
limited to--other websites (e.g., StackOverflow), communication apps (e.g.,
Slack, Discord), search engines, notes, or code from previous assessment
submissions.

[canvas]: https://appacademy.instructure.com/
<!--!!END -->
[MDN]: https://developer.mozilla.org/en-US/
[ExpressJS]: http://expressjs.com/
[SQLite3]: https://www.sqlite.org/docs.html
[Sequelize]: https://sequelize.org/docs/v6/

## Setup

1. Clone this starter repo and open it in VS Code.
   * **Make sure your folder's local path has no spaces!** Otherwise,
     dependencies may not install correctly. (Use `pwd` to see the current
     path.)
     * Bad:  __/.../App Academy/aa11-assessment__
     * Good: __/.../App-Academy/aa11-assessment__
2. Run `npm install` in the root directory.
3. Read the phase-specific __README__s to get started!

## Submission (ONLY FOR ACTUAL ASSESSMENT)

> The following are the submission instructions for the actual assessment. They
> will not work for submitting the practice assessment but are printed here so
> you can familiarize yourself with them.

When you are ready to submit:

1. Run `npm test -s` in the root directory to re-run all of the tests from the
   two projects. A passing spec will have a ✔ before it.

   You can also test all of the projects with the following command:

   ```sh
   npm run test-for-failures -s
   ```

   The `test-for-failures` command will list the failing specs for each
   project, e.g.:

   ```sh
   Phase 3 failures:
   [
     {
       "fullTitle": "Phase 3 (Ordering Specs) - Ordered and Alphabetical Entrees GET /entrees returns entrees ordered by highest price first then name alphabetically",
       "error": "expected { Object (_events, _eventsCount, ...) } to have status code 200 but got 500"
     }
   ]
   ```

   The output for an assessment with everything correct will show no failures
   for any project:

   ```sh
   Phase 1 failures:
   []

   Phase 2 failures:
   []

   Phase 3 failures:
   []

   Phase 4 failures:
   []
   ```

   For more complete error messages that include stack traces, run the tests for
   the specific project from within that project's directory. See the
   project __README__s for more info.
  
2. Fix any syntax errors that cause the tests to crash. **If a test crashes or
   the tests fail to complete their run, you will receive a 0 for the coding
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
