# Selection And Manipulation Of DOM Elements Practice

In this part of the assessment, you will demonstrate your ability to select
specific DOM elements using a variety of strategies and then manipulate those
elements in a variety of ways.

## Setup

Open the __index.html__ file in your browser to view your work.

## The tasks

You are provided with an __index.html__ file and a __site.css__ file. Do not
modify any of the code in these files or you will fail the tests. You may only
work in the __your-code.js__ file.

Open the __your-code.js__ file in VS Code. You will complete eight selection and
manipulation tasks which are listed in that file. For each task, you are given
instructions to select a given element and manipulate it in a specific way.

When you refresh the __index.html__ page in the browser, you should see your
changes rendered on the screen. A screenshot is provided at the bottom of the
page in the browser to show your target solution. Note that there may be
differences in overall size and position of the boxes depending on your browser
and screen size.

## Tests

You can run the Cypress tests with the command `npm test`.

To see an array of all the failed specs, run `npm run test-for-failures -s`. If
every spec passes, you should see this output:

```sh
[]
```

Any errors will appear like this:

```sh
[
  {
    "fullTitle": "Element selection and manipulation - 1. Change the border color to red and the border width to 3 pixels",
    "error": "AssertionError: Timed out retrying after 4000ms: expected '<div#problem-one.square.odd>' to have CSS property 'border-color' with the value 'rgb(255, 0, 0)', but the value was 'rgb(0, 0, 255)'\n    at Context.eval (webpack://selection-manipulation-project/./cypress/e2e/test.cy.js:9:7)"
  }
]
```
