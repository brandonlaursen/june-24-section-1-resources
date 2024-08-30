<quiz>
  <question>
    <p>Which of the following is the event fired by the browser when it has parsed the HTML and made it available to JavaScript to interact with through the DOM?</p>
    <answer>HTMLParsed</answer>
    <answer>DOMContentParsed</answer>
    <answer>DOMTreeUpdated</answer>
    <answer correct>DOMContentLoaded</answer>
    <explanation>The _DOMContentLoaded_ event gets "Fired at the Document once the parser has finished" according to the HTML specification. That effectively means that the event "fires when the initial HTML document has been completely loaded and parsed" and before the images, stylesheets, and other stuff gets loaded.</explanation>
  </question>
</quiz>

<quiz>
 <question>
    <p>What is the return type of `querySelectorAll`?</p>
    <answer correct>NodeList</answer>
    <answer>HTMLCollection</answer>
    <answer>Element</answer>
    <answer>Node</answer>
    <explanation>`querySelectorAll` returns ALL nodes matching the provided CSS selector in the form of a NodeList.</explanation>
  </question>
</quiz>

<quiz>
 <question>
    <p>What does the `getElementById` method do?</p>
    <answer correct>Returns a single element that matches the provided id or null if there is no match</answer>
    <answer>Returns _all_ elements that match the provided id or an empty list if there is no match</answer>
    <answer>Returns the last element in the document</answer>
    <answer>Creates a new element with the provided id</answer>
    <explanation>This method returns a single element that matches the provided id, if one exists. Otherwise, returns null.</explanation>
  </question>
</quiz>

```html
<!DOCTYPE html>
<html>
<head></head>
<body>
    <span>I</span>
    <span>love</span>
    <span>dogs</span>
    <span>,</span>
    <span>cats</span>
    <span>and</span>
    <span>birds</span>
    <script>
      // Your code here
    </script>
<body>
</html>
```

<quiz>
  <question>
    <p>You want to add the Oxford comma to the beginning of the span with text "and". Which line of code when inserted into the script tag would correctly do this?</p>
    <answer correct>`document.querySelectorAll("span")[5].innerText = ", and"`</answer>
    <answer>`document.querySelector("span")[5].innerHTML = ", and"`</answer>
    <answer>`document.querySelector("span > and").innerText = ", and"`</answer>
    <answer>`document.querySelectorAll("span")[6].innerHTML = ", and"`</answer>
    <explanation>`.querySelectorAll` grabs all the spans, with the index 5 being the span of interest. Recall array-like structures are 0-indexed. `.querySelector` only selects the first element matching the CSS selector provided. `.innerText` and `.innerHTML` would both achieve the same result.</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p>Say you want to redirect a user to a page that the they've previously viewed on the currently open tab by using the BOM. Which property of the `window` object provides methods to perform this?</p>
    <answer>`window.location`</answer>
    <answer>`window.document`</answer>
    <answer>`window.navigator`</answer>
    <answer correct>`window.history`</answer>
    <explanation>`window.history` contains various methods such as `.back()` and `.go()` that can redirect the user to an index within the history of the user's session. </explanation>
  </question>
</quiz>

```html
<!DOCTYPE html>
<html>
  <head>
    <script id="one" src="./script1.js"></script>
    <script id="two" type="module" src="./script2.js"></script>
  </head>
  <body>
    <script id="three" src={./script3.js}></script>
    <script id="four">
      document.body.innerText = "Hello JavaScript!";
    </script>
  </body>
</html>
```

<quiz>
  <question>
    <p>In the above HTML, what is the `id` of the improperly imported script?</p>
    <answer>one</answer>
    <answer>two</answer>
    <answer correct>three</answer>
    <answer>four</answer>
    <explanation>The `src` attribute should be wrapped in quotation marks, not curly braces.</explanation>
  </question>
</quiz>
