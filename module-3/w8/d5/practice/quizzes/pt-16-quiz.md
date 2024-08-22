<quiz>
  <question>
    <p>What is a _pending_ promise?</p>
    <answer correct>A promise that has not been fulfilled or rejected</answer>
    <answer>A promise that is not bound to the global context</answer>
    <answer>A promise that has not returned a value</answer>
    <answer>A promise that is not supported on the current browser</answer>
    <explanation>A Promise begins in the "pending" state. When it resolves, it goes to the "fulfilled" state. If it errs, it is sent to the "rejected" state.</explanation>
  </question>
  <weight>4</weight>
</quiz>



<quiz>
  <question>
    <p>What method do you use to handle a rejected promise?</p>
    <answer>`error`</answer>
    <answer correct>`catch`</answer>
    <answer>`reject`</answer>
    <answer>`throw`</answer>
    <explanation>The `catch` method will handle a rejected promise.</explanation>
  </question>
  <weight>4</weight>
</quiz>


```javascript
function slowPush(arr, val, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      arr.push(val);
      resolve();
    }, delay);
  });
}

const arr = [];

slowPush(arr, 1, 1000)
  .then(() => slowPush(arr, 2, 2000))
  .then(() => slowPush(arr, 3, 3000));
```

<quiz>
  <question>
    <p>What are the values inside of the array `arr` after 4 seconds?</p>
    <answer>`[]`</answer>
    <answer>`[1]`</answer>
    <answer correct>`[1, 2]`</answer>
    <answer>`[1, 2, 3]`</answer>
    <explanation>Each call to `slowPush` waits a specified amount of time before pushing a value into the array, and then transitions the Promise object into a fulfilled state.</explanation>
  </question>
  <weight>4</weight>
</quiz>
