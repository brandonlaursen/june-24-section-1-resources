<quiz>
  <question>
    <p>What are the two methods on the `localStorage` object that allow you to read and write data?</p>
    <answer>`read` and `write`</answer>
    <answer correct>`getItem` and `setItem`</answer>
    <answer>`get` and `set`</answer>
    <answer>`getKey` and `setKey`</answer>
    <explanation>It's the `getItem` and `setItem` methods. [Local storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)</explanation>
  </question>
</quiz>

```html
<!DOCTYPE html>
<html>
<head>
  <script>
    document
      .getElementById("title")
      .innerText = "My Title";
  </script>
</head>
<body>
    <h1 id="title"></h1>
<body>
</html>
```

<quiz>
  <question multiple>
    <p>When this page opens, the header tag doesn't contain any text. Which three of the following changes fixes this code so that it does?</p>
    <answer correct>Wrap the code in the script in a `window.onload` callback.</answer>
    <answer correct>Wrap the code in a DOMContentLoaded event handler.</answer>
    <answer correct>Move the script to the end of the `body`.</answer>
    <answer>Change `.innerText` to `.innerHTML`.</answer>
    <explanation>The code isn't executing because the script is run before the DOM is loaded. The three correct choices force the code to run after the DOM is loaded.</explanation>
  </question>
</quiz>


```html
<!DOCTYPE html>
<html>
<head></head>
<body>
  <div id="lv1">
    Level 1
    <div id="lv2">
      Level 2
      <div id="lv3">
        Level 3
      </div>
    </div>
  </div>

  <script>
    function printId(e) {
      // Your code here
      console.log(e.currentTarget.id + " ");
    }
    document.querySelector('#lv1').addEventListener('click', printId);
    document.querySelector('#lv2').addEventListener('click', printId);
    document.querySelector('#lv3').addEventListener('click', printId);
  </script>
</body>
</html>
```

<quiz>
  <question>
    <p>When the user clicks on the text "Level 3", the console prints "lv3 lv2 lv1". What line of code can be inserted into `printId` to only print the id of the exact div that was clicked? (e.g. Clicking "Level 2" would print "lv2" only.)</p>
    <answer>`e.preventDefault()`</answer>
    <answer correct>`e.stopPropagation()`</answer>
    <answer>`e.stopBubbling()`</answer>
    <answer>`e.preventPropagation()`</answer>
    <explanation>`e.stopPropagation()` properly stops the event from bubbling up the tree and invoking the click events on upstream elements.</explanation>
  </question>
</quiz>

<quiz>
  <question multiple>
    <p>Which two of the following statements incorrectly describes clients and servers?</p>
    <answer correct>The server requests data from a client, which controls and distributes that data.</answer>
    <answer>A server is usually designed to support/serve multiple clients.</answer>
    <answer>A server performs computations and shares data/resources between multiple clients.</answer>
    <answer correct>Clients do not make use of the TCP/IP protocol suite to communicate with servers.</answer>
    <explanation>The server is typically a remote machine that serves many clients and functions as a centralized location for data. The majority of Internet communications use the TCP/IP protocol suite.</explanation>
  </question>
</quiz>

```html
<!DOCTYPE "html">
<html>
  <head></head>
  <body>
    <ul>
      <li data-item-count="2">Milk</li>
      <li data-item-count="6">Apples</li>
      <li data-item-count="3">Onions</li>
    </ul>
  </body>

```

<quiz>
  <question>
    <p>In the HTML above, which line of JavaScript below would correctly return the value in `data-item-count`? Assume the list item has been selected and saved in a variable called `groceryItem`.</p>
    <answer correct>`groceryItem.dataset.itemCount`</answer>
    <answer>`groceryItem.dataset.item-count`</answer>
    <answer>`groceryItem.dataset.count`</answer>
    <answer>`groceryItem.item-count`</answer>
    <explanation>Values stored in `data-` attributes are accessed via the `dataset` property. Hyphenated properties get converted to camelCase.</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p>Which of the following is not an attribute that exist on cookies?</p>
    <answer>expires</answer>
    <answer>samesite</answer>
    <answer>path</answer>
    <answer correct>age</answer>
    <explanation>All these attributes exist on cookies except for age. There is a max-age attribute that sets the number of seconds the cookie should exist for.</explanation>
  </question>
</quiz>

<quiz>
  <question multiple>
    <p>Which three of the following statements correctly identify and describe a part of the TCP/IP protocol suite?</p>
    <answer correct>Port: A virtual connection point between between two devices, </answer>
    <answer correct>MAC Address: Permanent identifiers assigned to network interface hardware.</answer>
    <answer>TCP: Connectionless communication protocol that best serves time-sensitive data with low reliability.</answer>
    <answer correct>IP: Primary communication protocol that enables internetworking, or the Internet.</answer>
    <explanation>All of the above are correctly identified except for TCP. The description is of UDP, whereas TCP is a connection-based communication protocol to delivers reliable data.</explanation>
  </question>
</quiz>
