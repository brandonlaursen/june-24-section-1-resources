const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('GET / This is the root URL');
});



app.use((req, res, next) => {
  const error = new Error("Sorry, the requested resource couldn't be found");

  error.status  = 404;
  // console.log(error.message)
  next(error);
});


app.use((err, req, res, next) => {

    // const status = err.status;
    console.log(err);
    res.status(err.status);

    // res.message =  "Sorry, the requested resource couldn't be found.";

    res.json({
      message: err.message,
      status: err.status
    });
})


const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
