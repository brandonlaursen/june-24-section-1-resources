/*


  Code gets ran top to bottom

  app.use() - no matter what route you hit this middle wear will get called

  app.get() - than the url must the url in the get

  res.send() - ends the response


*/

// 1
app.use((req, res) => {

  res.send('Stop here')
});


app.get('/', (req, res) => {

  res.send('Stop here')
})

/*


  If next gets called, the next middle wear will get called
  - if its app.use itll get called
  - if its app.get url MUST match

*/

app.use((req, res, next) => {

  next();
});


app.get('/', (req, res, next) => {

  next();
})


// url doest match does not get called
app.get('/notes', (req, res, next) => {

  next();
})

// this will would run url matches
app.get('/', (req, res, next) => {

  next();
})


app.use((req, res, next) => {

  next();
});


/*

  Passes an error
*/



app.use((req, res, next) => {

  next(err);
});


app.get('/', (req, res, next) => {

  next(err);
})


// this wont do anything
app.get('/', (err, req, res, next) => {})

app.use((err, req, res, next) => {})
