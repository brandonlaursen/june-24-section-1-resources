# `Week 9 Day 3`

- Event Listeners Demo
- Practice: Add/Remove Event Listeners
- Practice: Store Data on Elements

## `Event handling`
  * Event handling is the core of front-end development.
  * When a user interacts with HTML elements on a website, those interactions are known as events.
  * Events are fired whenever something happens on the DOM.
  * Event could be
    * button click
    * cursor movement
    * page being loaded
    * form submission
    * an error occurs
    * video is played
    * a key on the key board is pressed
  * Whenever in event is triggered; a event object is created which we can than call useful properties/methods on
  * ex:
    * event.target - saves a copy of the element the event occurred on


## Propagation
 * `The Bubbling Principle` means that when an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.


 * When we run an event on `div` with id of 3
 * The event will propagate up to the parent 2 and fire its event
 * Then the ancestor 1 and fire its event

 The event bubbled up to parent elements
 * starts from the most deeply nested element upwards
 * Whenever you click an element on the page, the browser will bubble that event up through every ancestor of the element you clicked on.
 ! event only happens if there is an event; if no event nothing happens as propagation happens

Once the event bubbles all the way back to the top, it actually turns around and goes all the way back down. This is called event capturing

### How do we stop it?

## ` Practice: Add/Remove Event Listeners - 30min(Solo)`
## ` Practice: Add/Remove Event Listeners Walkthrough`
## `Practice: Store Data on Elements - 30min(Solo)`
## `Practice: Store Data on Elements Walkthrough`

## `Work on Long Practice till EOD`
