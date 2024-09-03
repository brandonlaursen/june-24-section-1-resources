const express = require('express');
const router = express.Router();




// demo/
router.get('/', (req, res) => {
  console.log('hello from demo routes');

  res.send('hello from demo routes');
})


// demo/notes
router.get('/notes', (req, res) => {
  console.log('hello from demo routes');

  res.send('hello from demo notes');
})


// demo/notebook
router.get('/notebook', (req, res) => {
  console.log('hello from demo routes');

  res.send('hello from demo routes');
})


// app.use((err, req, res, next) => {
//   console.log(err.message);
//   const status = err.statusCode || 500;
//   res.status(status);
//   next(err)
//   res.json({
//       message: err.message || 'Something went wrong...',
//       status
//   });
// });


module.exports = router;
