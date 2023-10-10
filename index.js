const express = require('express');
const app = express();
const port = 5001;

app.get('/', (req, res) => {
  res.send('my phone information coming soon ton moon');
});

app.listen(port, () => {
  console.log(`My phone server is running on port: ${port}`);
});
