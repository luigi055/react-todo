const express = require('express');

// Create our app
const app = express();
const PORT = process.env.PORT || 3000;

// change https to http req.headers[] doesn't exist locally
app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect(`http://${req.hostname}${req.url}`);
  } else {
    next();
  }
});

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Express server is up on port ${PORT}`);
});
