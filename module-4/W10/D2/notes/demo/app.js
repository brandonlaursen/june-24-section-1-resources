// * add boiler plate code
const express = require("express");
const app = express();


// app.use(express.json());
console.log('==========')

app.use((req, res, next) => {
  console.log('first middle wear');


  // res.send('first middle wear');
  next();
});


app.get('/', (req, res, next) => {

    console.log('second middle wear');

    // res.send('hello from /');
    next();
})


app.get('/other', (req, res) => {

  console.log('do we hit this?');

  // res.send('hello from /');
  // next();
})


app.get('/', (req, res, next) => {

  console.log('third middle wear');

  // res.send('hello from /');
  // const error = new Error('error-message');
  // next(error);
  next();
})


// app.get("/", (req, res, next) => {
//   console.log('fourth middle wear');


// })

// // app.use that catches error
// // ! this does nothing with errors
app.get("/", (req, res, next) => {
  console.log('fifth middle wear');

  next(new Error('MY ERROR'))
});


// just a function definition
const myMiddleWear1 = (req, res, next) => {
  console.log('sixth middle wear')

  next()
  // res.send('hello from my middle wear 1')
  // next(new Error('NEW ERROR'));

};


// just a function definition
const myMiddleWear2 = (err, req, res, next) => {
  console.log('seventh middle wear');
  console.log(err.message);

  res.send('hello from my middle wear 2');
  // next();
}

app.use('/', [myMiddleWear1, myMiddleWear2]);





app.use((err, req, res, next) => {
  console.log(err.message);
  const status = err.statusCode || 500;
  res.status(status);
  next(err)
  res.json({
      message: err.message || 'Something went wrong...',
      status
  });
});

// app.use((err, req, res, next) => {
//   console.log('==>',err.message);
//   res.send(err.message);
// });





app.listen(5000, () => console.log(`Listening on port ${5000}...`))
