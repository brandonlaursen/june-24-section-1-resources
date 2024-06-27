# JavaScript Basics - Functions Checkpoint

Coding projects are a great way to test your newfound JavaScript skills! You
will be completing coding tasks and testing their correctness.

You should submit this project--see below for instructions--whenever 1) **all**
of the specs turn green or 2) you reach the due date and time. Don't submit
early unless 100% of the specs turn green!

## Points breakdown

Each spec is worth 1 point.

* **01 - Intro to Functions:** 4 points
* **02 - Function Parameters:** 14 points
* **03 - String Operators:** 6 points
* **04 - Problem Solving Part 1:** 2 points
* **05 - Problem Solving Part 2:** 4 points

**Total Possible Points:** 30 points
**Points Required to Submit Early:** 30 points

## Getting started

1. Clone this starter repo:
   * Click the green `<> Code` button at the top of this repo's GitHub page,
     select HTTPS, and click the copy button to the right of the web URL field:

     ![clone-img]

   * Open a Terminal and `cd` into the directory where you keep your App Academy
     projects.
   * Type `git clone ` and then paste the link you copied from GitHub. The
     resulting command should look something like this:

     ```sh
     git clone https://github.com/appacademy/aa00-assessment-js-basics-functions-ft-student-<Your-Github-Username>.git
     ```

   * Run the command to create a copy of the repo on your local machine.
2. Open the repo in VS Code. One way to do this:
   * Open the "Visual Studio Code" application.
   * Select "File" > "Open Folder..." from the menu at the top and selecting the
     project folder you just created.
   * Finally, open a new terminal navigated to the project folder in VS Code by
     clicking "Terminal" > "New Terminal" from the menu at the top.
3. In the newly opened Terminal in VS Code, run `npm install` in the root
   directory.
4. Run `npm test` to see all the specs you need to pass.

In the VS Code Explorer side menu, you will see the following folders and files:

```plaintext
.
├── problems/
├── test/
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

The __README.md__ file in a coding project typically contains setup instructions
and other useful instructions that you should **ALWAYS** read before starting to
change or write code in the project.

The __problems/__ folder contains the files where you will write your code.
Follow the numbering of the files to complete the problems in order.

The __test/__ folder contains the files that are used to measure how well you
implemented the problems by defining inputs and expected outputs to the
problems. Do **NOT** modify the code in these files. You should interact with
the test specs in these files through the terminal only. Feel free to browse
through the code in these files if you're curious though.

You can just ignore the other files.

## Instructions

Each file inside the __problems/__ folder contains one or more prompts
describing what you need to do. Follow all of the prompts. A corresponding test
spec file that you can use to test your code will be provided in the __test/__
folder for each file in the __problems/__ folder.

Each file in the __problems/__ folder will also have specific instructions on
how you can test your code to make sure you have completed all the requirements.
Typically this will mean running `npm test test/<name-of-spec-file>` in your
terminal. So, e.g., to test your code in the
__problems/01-intro-to-functions.js__ file, you would go to the terminal and run

```sh
npm test test/01-intro-to-functions-spec.js
```

To run tests for all the __problems/__ files at once, just run `npm test` in
the terminal without specifying a particular file:

```sh
npm test
```

What if you just want to run your code to see the output of `console.log`s? You
can do that too. In this case, the command you will run is `node` followed by
the path and filename of the file whose code you want to run. For instance, to
run the code in __problems/01-intro-to-functions.js__, you would go to the
terminal and run

```sh
node problems/01-intro-to-functions.js
```

Note that in this case, you should specify the actual file from the
__problems/__ folder and **NOT** the corresponding spec file from the __test/__
folder.

Once you pass all the test specs, submit the project for grading!

## Submission instructions

When you are ready to submit:

1. Run `npm test` to re-run all of the unit tests.

2. Fix any syntax errors that cause the tests to crash. **If a unit test crashes
   or the tests fail to complete their run, you will score a 0 on the
   checkpoint.** You can fail specs, but all the tests have to be able to finish
   running.

   **Tip:** If you run out of time to debug, just comment out any code that is
   causing your programs to crash.

3. The actual submission is a three-part process: you need to _add_ your changed
   files to the staging area, _commit_ them, and _push_ them to GitHub. (Don't
   worry if these concepts are still a bit fuzzy; you will become very familiar
   with them over the course of the bootcamp!) You can accomplish this by
   running the following commands:

   a. To add your files to the staging area, run `git add .` in the root
      directory. (Don't forget to include the period at the end!)

   b. To commit your files, run (with the quotation marks)

      ```sh
      git commit -m "<brief description of the changes in this commit>"
      ```

   c. To push your files to GitHub for grading, run `git push`. The first time
      you run this command, GitHub will likely tell you that "the current branch
      ... has no upstream branch," i.e., you need to tell it where, exactly, to
      push your files. Fortunately, git will also show the command you can
      use to do this. It will look like this:

      ```sh
      git push --set-upstream origin <your branch>
      ```

      Copy the `push` command that git suggests, paste it on the command line,
      and run it to submit your assessment.

**Note:** You can run tests, `add` files, and `commit` files as often as you
wish. Your work will not be submitted for grading until you `push`.

### Summary of submission commands

1. `npm test`
2. `git add .`
3. `git commit -m "Finish the checkpoint (or some such descriptive message)"`
4. `git push` / `git push --set-upstream origin <your branch>`

Good luck!

[clone-img]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-00/github-clone-img.png
