# `Week 9 Day 4`


- Practice: WebStorage
- Practice: Cookies

## `Persistent Storage in Browser`

#### Most data on the Web is stored in a database on a server.
  * user accounts
  * products
  * etc
  * This data is often retrieved through API calls

### Not all data has to be stored in a database
  * Data can also be stored locally
  * That data may be data that relies on state
  * Meaning it only matters to the user using the browser at that time
    * Data could be
    * theme
    * shopping cart
    * search history

### Two ways to store persistent data
  1. Cookies
  2. Web storage - local and session

### Cookies
  * `Cookies` can be transferred between the browser and the server.
  * store stateful information about a user, such as
  * their personal information
  * browser habits or history
  * form input information

#### Stored as a string of key/value pairs
  * `favoriteColor=blue; favoriteDance=tango; currentUserId=12345`
### Two types of cookies
  1. `Session cookie` - last as long as browser tab is open
  2. `Persistent cookie` - cookie that persists as long as expiration date is not met
  * can access cookies using `document.cookie`
  `document.cookie = "favoriteCat=; expires = Thu, 01 Jan 1970 00:00:00 GMT";`

### Web storage
  * Also useful and has larger limit
  * Cleared when browser cache is cleared
  * Session Storage and Local Storage are objects where develops can set and get each value using a key. B
  * Both of these storage objects have the same usage pattern (called the Web Storage API in JavaScript).

### `Session storage`
When you want the data to disappear as the browser tab is closed

### `Local Storage`
When you want the data to be available when the user reopens their browser

  * A `session cookie`: string data only, shared between frontend and backend, disappears when browser tab closed
  * A `persistent cookie:` string data only, shared between frontend and backend, exists until expiration date
  * `Session storage variable:` string data only, only in frontend application, disappears when browser tab closed (JSON.stringify non-string data)
  * `Local storage variable:` string data only, only in frontend application, exists until browser cache is cleared (JSON.stringify non-string data)

#### Can access local/session storage using
  * `.getItem()`
  Can set values in storage
  * `.setItem()`


## `Practice: WebStorage - 30min(Solo)`
## `Practice: WebStorage Walkthrough`
## `Practice: Cookies - 30min(Solo)`
## `Practice: Cookies Walkthrough`

## `Work on Long Practice till EOD`
